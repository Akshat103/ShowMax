import { useState, useRef } from "react";

function FormComponent({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const initialRef = useRef();

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data from the input fields
    const formData = {
      numberOfTickets: e.target.elements["number-of-tickets"].value,
      customerName: e.target.elements["customer-name"].value,
      customerEmail: e.target.elements["customer-email"].value,
      customerPhone: e.target.elements["customer-phone"].value
    };

    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    closeForm();
  };

  return (
    <>
      <button onClick={openForm}>Book Now</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeForm}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <p className="name">{data.name}</p>
              <div className="details">
                <div className="innerdiv">
                  <p>Premiered: {data.premiered}</p>
                  {data.schedule.days.length !== 0 && (
                    <p>
                      {data.schedule.days.join(", ")} at {data.schedule.time}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="number-of-tickets"
                  name="number-of-tickets"
                  placeholder="Tickets"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="customer-name"
                  name="customer-name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="customer-email"
                  name="customer-email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  id="customer-phone"
                  name="customer-phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <button type="submit">Book</button>
                <button type="button" onClick={closeForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormComponent;
