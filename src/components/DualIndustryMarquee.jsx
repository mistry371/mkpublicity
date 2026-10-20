export default function DualIndustryMarquee() {
  const row1 = [
    { text: 'TEXTILE & APPAREL', isOutline: false },
    { text: 'LAB-GROWN DIAMONDS', isOutline: true },
    { text: 'COMMERCIAL REAL ESTATE', isOutline: false },
    { text: 'D2C CONSUMER BRANDS', isOutline: true }
  ];

  const row2 = [
    { text: 'HEALTHCARE & HOSPITALS', isOutline: true },
    { text: 'HEAVY MANUFACTURING', isOutline: false },
    { text: 'LUXURY JEWELLERY', isOutline: true },
    { text: 'FINTECH & SAAS', isOutline: false }
  ];

  const row3 = [
    { text: 'GLOBAL EXPORT HOUSES', isOutline: false },
    { text: 'CHEMICAL & INDUSTRIAL', isOutline: true },
    { text: 'RETAIL CONGLOMERATES', isOutline: false },
    { text: 'EDUCATION & EDTECH', isOutline: true }
  ];

  const renderTrack = (items) => (
    <>
      <div className="ind-group">
        {items.map((item, idx) => (
          <span key={idx} className={`ind-word ${item.isOutline ? 'is-outline' : ''}`}>
            {item.text} <i className="text-gold">✺</i>
          </span>
        ))}
      </div>
      <div className="ind-group" aria-hidden="true">
        {items.map((item, idx) => (
          <span key={`clone-${idx}`} className={`ind-word ${item.isOutline ? 'is-outline' : ''}`}>
            {item.text} <i className="text-gold">✺</i>
          </span>
        ))}
      </div>
    </>
  );

  return (
    <section className="section theme-light ind-wall-section" id="industries-wall">
      <div className="container">
        <header className="arch-sec-head">
          <div className="section-label">Category Authority</div>
          <div className="arch-head-split">
            <h2 className="display-title">
              EVERY INDUSTRY HAS A <em className="serif-em">MARKET LEADER.</em>
            </h2>
            <p className="arch-head-lead">
              From Surat’s historic textile and diamond empires to venture-backed startups and national conglomerates, 
              we engineer the narrative and technology that turns good businesses into category kings.
            </p>
          </div>
        </header>
      </div>

      <div className="ind-wall-wrapper" aria-hidden="true">
        <div className="ind-track-row track-forward">
          {renderTrack(row1)}
        </div>
        <div className="ind-track-row track-reverse">
          {renderTrack(row2)}
        </div>
        <div className="ind-track-row track-forward">
          {renderTrack(row3)}
        </div>
      </div>
    </section>
  );
}
