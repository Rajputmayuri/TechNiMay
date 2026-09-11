import React from 'react';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 ${
        hover ? 'hover:border-primary/50 transition-colors shadow-sm hover:shadow-md' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
