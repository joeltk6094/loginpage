// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [gender, setGender] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !gender || !termsAccepted) {
//       toast.error("Please fill out all fields and accept the terms.");
//       return;
//     }

//     // Save user data in localStorage or send it to your backend
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     localStorage.setItem("gender", gender);
//     localStorage.setItem("termsAccepted", termsAccepted);

//     toast.success("Signup successful. Please login.");
//     navigate("/login"); // Redirect to the login page after signup
//   };

//   return (
//     <div className="form__container d-flex felx-column align-items-center justify-content-center">
//       <form>
       
//         <h4 className="form__heading" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
//         User Signup</h4>

        
//         <hr />
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="gender" className="form-label">
//             Gender
//           </label>
//           <select
//             className="form-select"
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>
//         <div className="form-check mb-3">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="termsAccepted"
//             checked={termsAccepted}
//             onChange={() => setTermsAccepted(!termsAccepted)}
//           />
//           <label className="form-check-label" htmlFor="termsAccepted">
//             I Accept Terms and Conditions
//           </label>
//         </div>
//         <div className="form__loginLink mb-3">
//           <p>
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </div>
//         <button
//           type="submit"
//           className="form__button"
//           onClick={handleSignup}
//         >
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // New username state
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !username || !password || !gender || !termsAccepted) {
      toast.error("Please fill out all fields and accept the terms.");
      return;
    }

    // Save user data in localStorage or send it to your backend
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username); // Save username
    localStorage.setItem("password", password);
    localStorage.setItem("gender", gender);
    localStorage.setItem("termsAccepted", termsAccepted);

    toast.success("Signup successful. Please login.");
    navigate("/login"); // Redirect to the login page after signup
  };

  return (
    <div className="form__container d-flex felx-column align-items-center justify-content-center">
      <form>
        <h4 className="form__heading" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
          User Signup
        </h4>
        <hr />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label"> {/* New username field */}
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsAccepted"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <label className="form-check-label" htmlFor="termsAccepted">
            I Accept Terms and Conditions
          </label>
        </div>
        <div className="form__loginLink mb-3">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <button
          type="submit"
          className="form__button"
          onClick={handleSignup}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
