import { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    city: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 7) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!/^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(formData.age)) {
      newErrors.age = "Age must be a number between 1 and 120";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "pink" }}>{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "pink" }}>{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "pink" }}>{errors.password}</p>}
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={{ color: "pink" }}>{errors.phone}</p>}
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: "pink" }}>{errors.age}</p>}
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p style={{ color: "pink" }}>{errors.city}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
