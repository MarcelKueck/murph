/**
 * Button component
 * Used for primary actions throughout the application
 */
import React, { ReactNode } from 'react';

interface ButtonProps {
  /**
   * Button content
   */
  children: ReactNode;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Full width button
   */
  fullWidth?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Icon to display before text
   */
  leftIcon?: ReactNode;
  /**
   * Icon to display after text
   */
  rightIcon?: ReactNode;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  fullWidth = false,
  disabled = false,
  className = '',
  leftIcon,
  rightIcon,
  type = 'button',
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-200 active:bg-primary-700 disabled:bg-neutral-300 disabled:text-neutral-500',
    secondary: 'bg-white text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-200 active:bg-primary-100 disabled:border-neutral-200 disabled:text-neutral-500',
    tertiary: 'bg-transparent text-primary-500 hover:bg-primary-50 focus:ring-primary-200 active:bg-primary-100 disabled:text-neutral-400',
  };
  
  // Size styles
  const sizeStyles = {
    small: 'text-sm py-1.5 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-2.5 px-5 rounded-md',
  };
  
  // Width style
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;