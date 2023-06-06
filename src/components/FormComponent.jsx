import { useState } from 'react';

const FormComponent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Initialize form data here
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formSubmit', JSON.stringify(formData));
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="Name"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
