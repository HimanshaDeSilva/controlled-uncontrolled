import React, { useState } from "react";

function ControlledComponent() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

    const dataSubmission = () => {
        console.log(
            `My first name is ${fname} and last name is ${lname}.My Email is ${email}`
        );
        console.log("Controlled component rendered");
    };

    return (
        <div>
            <label>fname:</label>
            <input
                type="text"
                id="fname"
                onChange={(e) => {
                    setFname(e.target.value);
                }}
            />
            <label>lname:</label>
            <input
                type="text"
                id="lname"
                onChange={(e) => {
                    setLname(e.target.value);
                }}
            />
            <label>email:</label>
            <input
                type="text"
                id="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <div>
                <button
                    onClick={() => {
                        dataSubmission();
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ControlledComponent;
