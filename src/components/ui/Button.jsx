import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', href, onClick, disabled = false, className = '', ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center font-mono text-sm font-medium transition-all duration-250 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-transparent text-primary-400 border border-primary-400 hover:bg-primary-400 hover:bg-opacity-10 hover:shadow-xl-primary',
    outline: 'bg-transparent text-primary-400 border border-primary-400 hover:bg-primary-400 hover:bg-opacity-10',
    ghost: 'bg-transparent text-text-300 hover:text-primary-400 hover:bg-primary-400 hover:bg-opacity-5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : '_self'} rel={href.startsWith('http') ? 'noopener noreferrer' : ''} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
