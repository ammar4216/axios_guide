import React from "react";

function Contact() {
  return (
    <div style={useStyle}>
      <h1>Contact</h1>
    </div>
  );
}

const useStyle = {
  height: "80vh",
  width: "50%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default Contact;
