import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', href, onClick, disabled = false, className = '', ...props }) => {
  const variants = {
    primary: 'btn-brutal',
    outline: 'btn-brutal-outline',
    ghost:   'btn-brutal-ghost',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = [
    variants[variant],
    size !== 'md' && sizes[size],
    'disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#B8823A] focus:ring-offset-2',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
        {...props}
      >
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
