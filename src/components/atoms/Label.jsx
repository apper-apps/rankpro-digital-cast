import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

const Label = forwardRef(({ 
  className = '',
  children,
  required = false,
  ...props 
}, ref) => {
  const baseStyles = "block text-sm font-medium text-gray-700 mb-2";
  
  const combinedClassName = cn(baseStyles, className);
  
  return (
    <label
      ref={ref}
      className={combinedClassName}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
});

Label.displayName = 'Label';

export default Label;