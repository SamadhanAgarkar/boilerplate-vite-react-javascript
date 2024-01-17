import { useState } from "react";
import "./FormAssignment.css";

const FormAssignmentWithFunComponent = () => {
  const [fName, setfName] = useState("");
  const [mName, setmName] = useState("");
  const [lName, setlName] = useState("");
  const [fullDate, setFullDate] = useState("");
  const [month, setMonth] = useState("");
  const [onlyMonth, setOnlyMonth] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPinCode] = useState("");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [oName, setOName] = useState("");
  const [comments, setComments] = useState("");
  const [course, setCourse] = useState("");

  console.log(
    fName,
    mName,
    lName,
    fullDate,
    month,
    address,
    city,
    state,
    pincode,
    email,
    mobile,
    oName,
    comments,
    onlyMonth,
    course
  );
  const handleSend = () => {
    console.log(
      fName,
      mName,
      lName,
      fullDate,
      month,
      address,
      city,
      state,
      pincode,
      email,
      mobile,
      oName,
      comments,
      onlyMonth,
      course
    );
  };

  return (
    <>
      <div className="form-element">
        <h3>Registration Form.</h3>
        <p>Fill out the form carefully for registration.</p>
        <div>
          <h4>Student Name</h4>
          <div>
            <input
              type="text"
              name="fName"
              placeholder="Enter First Name"
              value={fName}
              onChange={(e) => setfName(e.target.value)}
            />
            <input
              type="text"
              name="mName"
              placeholder="Enter Middle Name"
              value={mName}
              onChange={(e) => setmName(e.target.value)}
            />
            <input
              type="text"
              name="lName"
              placeholder="Enter Last Name"
              value={lName}
              onChange={(e) => setlName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h4>Birth Date</h4>
          <div>
            <input
              type="date"
              name="fullDate"
              placeholder="Day"
              value={fullDate}
              onChange={(e) => setFullDate(e.target.value)}
            />
            <input
              type="month"
              name="month"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <select
              id="month"
              name="onlyMonth"
              selected={onlyMonth}
              onChange={(e) => setOnlyMonth(e.target.value)}
            >
              <option>Select Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
        </div>
        <div>
          <h4>Address</h4>
          <div>
            <input
              type="text"
              name="address"
              placeholder="Enter Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              name="city"
              placeholder="Enter Your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              name="state"
              placeholder="Enter Your State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              name="pincode"
              placeholder="Enter Your Pin-Code"
              value={pincode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h4>Student Details</h4>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h4>Company Details</h4>
          <div>
            <input
              type="text"
              name="oName"
              placeholder="Enter Organization Name"
              value={oName}
              onChange={(e) => setOName(e.target.value)}
            />
            <select
              id="course"
              name="course"
              selected={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>Select course</option>
              <option>Java</option>
              <option>.Net</option>
              <option>React</option>
              <option>Dev ops</option>
            </select>
          </div>
        </div>
        <div>
          <h4>Additional Comments</h4>
          <div>
            <textarea
              name="comments"
              style={{ width: "100%", height: "150px" }}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            style={{ width: "100px", height: "40px", marginTop: "15px" }}
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default FormAssignmentWithFunComponent;
