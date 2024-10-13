import React, { useRef } from "react";

export default function UncontrolledComponent() {
  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);

  const submitMyData = (e) => {
    e.preventDefault(); // to prevent reset the form.
    console.log(
      `My first name is ${fname.current.value} and last name is ${lname.current.value}.My Email is ${email.current.value}`
    );
    console.log("Uncontrolled component rendered");
  };

  return (
    <form onSubmit={submitMyData}>
      <div>
        <label>fname:</label>
        <input type="text" id="fname" ref={fname} />
        <label>lname:</label>
        <input type="text" id="lname" ref={lname} />
        <label>email:</label>
        <input type="text" id="email" ref={email} />
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
