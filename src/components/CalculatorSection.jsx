import { useEffect, useMemo, useState } from "react";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
const REQUEST_TIMEOUT_MS = 10000;

const fetchWithTimeout = async (url, options = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
};

const withRetry = async (requestFn, retries = 1, retryDelayMs = 700) => {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await requestFn();
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
      }
    }
  }
  throw lastError;
};

const formatINR = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

export default function CalculatorSection() {
  const [procedures, setProcedures] = useState([]);
  const [selectedProcedureId, setSelectedProcedureId] = useState("");
  const [roomType, setRoomType] = useState("standard");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProcedures = async () => {
      try {
        const res = await withRetry(() => fetchWithTimeout(`${API_BASE}/api/procedures`));
        if (!res.ok) throw new Error("Failed to load procedures");
        const data = await res.json();
        const list = data?.procedures ?? [];
        setProcedures(list);
        if (list.length > 0) setSelectedProcedureId(list[0].id);
      } catch {
        setError("Unable to load calculator data. Please try again.");
      }
    };

    loadProcedures();
  }, []);

  const selectedProcedure = useMemo(
    () => procedures.find((p) => p.id === selectedProcedureId),
    [procedures, selectedProcedureId]
  );

  const onCalculate = async () => {
    if (!selectedProcedureId) return;
    setLoading(true);
    setError("");

    try {
      const res = await withRetry(() => fetchWithTimeout(`${API_BASE}/api/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ procedureId: selectedProcedureId, roomType })
      }));

      if (!res.ok) throw new Error("Failed to calculate");
      const data = await res.json();
      setResult(data);
    } catch {
      setError("Calculation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="calculator-section">
      <div className="container-xl reveal">
        <div className="mb-5">
          <h2 className="section-title">Surgical Charges Calculator</h2>
          <p className="section-subtitle">Transparent pricing for your peace of mind.</p>
        </div>
        <div className="calculator-panel mx-auto">
          <div className="row g-4 align-items-start">
            <div className="col-md-7">
              <label className="tiny-label">Select Procedure</label>
              <select
                className="form-select custom-select mb-4"
                value={selectedProcedureId}
                onChange={(e) => {
                  setSelectedProcedureId(e.target.value);
                  setResult(null);
                }}
              >
                {procedures.map((procedure) => (
                  <option key={procedure.id} value={procedure.id}>
                    {procedure.name}
                  </option>
                ))}
              </select>
              <div className="row g-3">
                <div className="col-6">
                  <button
                    type="button"
                    className={`price-card selectable ${roomType === "standard" ? "selected" : ""}`}
                    onClick={() => setRoomType("standard")}
                  >
                    <p>Standard Ward</p>
                    <h4>{selectedProcedure ? formatINR(selectedProcedure.pricing.standard) : "-"}</h4>
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className={`price-card premium selectable ${roomType === "premium" ? "selected" : ""}`}
                    onClick={() => setRoomType("premium")}
                  >
                    <p>Premium Suite</p>
                    <h4>{selectedProcedure ? formatINR(selectedProcedure.pricing.premium) : "-"}</h4>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="note-box d-none d-md-block">{selectedProcedure?.note || "Loading details..."}</div>
              <button className="btn btn-calc w-100" onClick={onCalculate} disabled={loading || !selectedProcedureId}>
                <span className="material-symbols-outlined">calculate</span>
                {loading ? "Calculating..." : "Calculate Final Quote"}
              </button>
              {result && (
                <div className="calc-result mt-3">
                  <div className="d-flex justify-content-between">
                    <span>Base Amount</span>
                    <strong>{formatINR(result.breakdown.baseAmount)}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>GST ({Math.round(result.breakdown.taxRate * 100)}%)</span>
                    <strong>{formatINR(result.breakdown.taxAmount)}</strong>
                  </div>
                  <div className="d-flex justify-content-between calc-total">
                    <span>Total Quote</span>
                    <strong>{formatINR(result.breakdown.totalAmount)}</strong>
                  </div>
                </div>
              )}
              {error && <p className="calc-error mt-2 mb-0">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
