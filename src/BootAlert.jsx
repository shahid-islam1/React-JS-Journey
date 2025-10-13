import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         heloo {variant} install bootstrap-alert! 
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;