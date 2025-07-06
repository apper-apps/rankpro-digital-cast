import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Select = forwardRef(({ 
  className = '',
  error = false,
  children,
  ...props 
}, ref) => {
  const baseStyles = "w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white";
  
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
    <select
      ref={ref}
      className={combinedClassName}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;