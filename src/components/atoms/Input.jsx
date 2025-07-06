import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Input = forwardRef(({ 
  type = 'text',
  className = '',
  error = false,
  ...props 
}, ref) => {
  const baseStyles = "w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";
  
  const variants = {
    default: "border-gray-300 focus:ring-primary",
    error: "border-red-300 focus:ring-red-500 bg-red-50"
  };
  
  const combinedClassName = cn(
    baseStyles,
    error ? variants.error : variants.default,
    className
  );
  
  return (
    <input
      ref={ref}
      type={type}
      className={combinedClassName}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;