export default function InnerPageBanner({ title, current, image }) {
  return (
    <div className="inner-page-banner reveal" style={{ "--banner-image": `url(${image})` }}>
      <div className="inner-page-banner-overlay" />
      <div className="inner-page-banner-content">
        <h1>{title}</h1>
        <p>
          <span>Home</span>
          <span className="banner-sep">/</span>
          <span className="current">{current}</span>
        </p>
      </div>
    </div>
  );
}
