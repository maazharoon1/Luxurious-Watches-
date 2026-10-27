import React from 'react';

export const BrandLogo: React.FC = () => (
  <span className="brand-logo" role="img" aria-label="Luxurious Watches Available">
    <img src="/brand-mark.svg" alt="" className="brand-logo-mark" width="54" height="54" />
    <span className="brand-logo-type" aria-hidden="true">
      <span className="brand-logo-name">Luxurious</span>
      <span className="brand-logo-descriptor">Watches Available</span>
    </span>
  </span>
);
