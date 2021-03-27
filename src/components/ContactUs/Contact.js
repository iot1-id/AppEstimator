import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import "./contact.css";
import { db } from "../../components/Firebase/firebase";
const Contact = (
//     {
//   maxHours,
//   maxPrice,
//   minPrice,
//   minHours,
//   isSeniorCount,
//   isJuniorCount,
//   isFresherCount,
//   security,
//   customize,
//   features,
//   users,
//   database,
//   platforms,
// }
) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        contactNumber:contactNumber,
        // maxHours: maxHours,
        // maxPrice: maxPrice,
        // minPrice: minPrice,
        // minHours: minHours,
        // isSeniorCount: isSeniorCount,
        // isJuniorCount: isJuniorCount,
        // isFresherCount: isFresherCount,
        // security: security,
        // customize: customize,
        // features: features,
        // users: users,
        // database: database,
        // platforms: platforms,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contact Number</label>
      <input
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => setcontactNumber(e.target.value)}
      />
      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
