import assetData from '../assetData.json';

// Helper to format clean brand name from file path
function formatBrandName(src, index) {
  if (!src) return `Client Brand ${index + 1}`;
  const filename = src.split('/').pop().replace(/\.[^/.]+$/, '');
  const clean = filename
    .replace(/-\d+$/, '') // Remove trailing index numbers like -39, -51
    .replace(/-logo/gi, '')
    .replace(/-/g, ' ')
    .trim();

  // If filename was just numbers or generic
  if (!clean || /^\d+$/.test(clean)) {
    return `Verified Client Partner ${index + 1}`;
  }

  // Capitalize words
  return clean.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ClientMarquee() {
  const clients = assetData.clients || [];

  if (clients.length === 0) return null;

  // Duplicate the array to ensure smooth infinite scrolling
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="client-marquee-section" id="clients" aria-label="Client Showcase">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          Proven Commercial Partnerships
        </div>
        <h2 className="marquee-title" style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
          Trusted by Established Businesses Across Surat, Gujarat & Pan-India
        </h2>
      </div>

      <div className="marquee-container" style={{ marginTop: '1.5rem' }}>
        <div className="marquee-track">
          {marqueeItems.map((src, index) => {
            const brandName = formatBrandName(src, index);
            return (
              <div key={index} className="marquee-item">
                <div className="marquee-card">
                  <img
                    src={src}
                    alt={`${brandName} — Client Partner of MK Publicity`}
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="60"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
