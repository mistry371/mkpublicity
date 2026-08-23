import React from 'react';
import assetData from '../assetData.json';

const ClientMarquee = () => {
  const clients = assetData.clients || [];

  if (clients.length === 0) return null;

  // Duplicate the array to ensure smooth infinite scrolling
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="client-marquee-section">
      <div className="container">
        <h2 className="marquee-title">Trusted By 500+ Brands</h2>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((src, index) => (
            <div key={index} className="marquee-item">
              <div className="marquee-card">
                <img src={src} alt={`Client ${index}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
