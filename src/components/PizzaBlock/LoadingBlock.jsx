import React from 'react';
import ContentLoader from 'react-content-loader';

export default function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="135" cy="158" r="106" />
      <rect x="0" y="275" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="307" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="427" rx="6" ry="6" width="0" height="29" />
      <rect x="0" y="412" rx="6" ry="6" width="90" height="30" />
      <rect x="130" y="404" rx="20" ry="20" width="148" height="45" />
    </ContentLoader>
  );
}
