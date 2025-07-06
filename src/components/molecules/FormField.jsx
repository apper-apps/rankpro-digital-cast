import Label from '@/components/atoms/Label';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Select from '@/components/atoms/Select';

const FormField = ({ 
  label, 
  type = 'text', 
  error, 
  required = false,
  children,
  ...props 
}) => {
  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return <Textarea error={!!error} {...props} />;
      case 'select':
        return <Select error={!!error} {...props}>{children}</Select>;
      default:
        return <Input type={type} error={!!error} {...props} />;
    }
  };

  return (
    <div className="form-field">
      <Label required={required}>
        {label}
      </Label>
      {renderInput()}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormField;