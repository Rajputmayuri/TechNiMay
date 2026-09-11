import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-label-md text-label-md font-bold rounded-DEFAULT transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-primary-fixed hover:text-on-primary-fixed shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-colors border border-outline-variant/30',
    emerald: 'bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container shadow-md shadow-secondary/20 hover:-translate-y-0.5',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/5',
    white: 'bg-on-primary text-primary hover:bg-surface-container-lowest shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 flex items-center">{icon}</span>}
    </button>
  );
};

export default Button;
