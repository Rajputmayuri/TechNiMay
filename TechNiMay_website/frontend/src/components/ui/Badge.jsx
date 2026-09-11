import React from 'react';

export const Badge = ({ children, className = '' }) => {
  return (
    <span className={`px-3 py-1 bg-surface-container-high rounded-full font-mono-code text-mono-code text-on-surface-variant ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
