import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

// const SignUp = () => {
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false); // Optional loading state
//   const [error, setError] = useState(""); // State for displaying errors
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     console.log(formData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true
//     setError(""); // Clear any previous error

//     try {
//       const res = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) {
//         // If the response is not successful, throw an error
//         const errorData = await res.json(); // Get the error message from the response
//         throw new Error(errorData.message || `Error: ${res.statusText}`);
//       }

//       const data = await res.json(); // If signup is successful, get the response
//       console.log(data);

//       navigate("/sign-in"); // Navigate to login page on success
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setError(error.message); // Set error message in state
//     } finally {
//       setLoading(false); // Turn off loading
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold m-9">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Username"
//           className="border p-3 rounded-lg"
//           id="username"
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-3 rounded-lg"
//           id="email"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-3 rounded-lg"
//           id="password"
//           onChange={handleChange}
//         />
//         <button
//           className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-80"
//           type="submit"
//           disabled={loading} // Disable button while loading
//         >
//           {loading ? "Loading..." : "Signup"}
//         </button>
//       </form>

//       {error && (
//         <p className="text-red-500 text-center mt-2">
//           {error} {/* Display error message */}
//         </p>
//       )}

//       <div className="flex gap-2 mt-5">
//         <p>Have an Account?</p>
//         <Link to={"/sign-in"}>
//           <span className="text-blue-700">Sign In</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

//2nd test

// const SignUp = () => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     console.log(formData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       const res = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);

//       if (data.success == false) {
//         setLoading(false);
//         setError(data.message);
//         return;
//       }

//       setLoading(false);
//       setError(null);
//       navigate("/sign-in");
//     } catch (error) {
//       setLoading(false);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Username"
//           className="border p-3 rounded-lg"
//           id="username"
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-3 rounded-lg"
//           id="email"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-3 rounded-lg"
//           id="password"
//           onChange={handleChange}
//         />
//         <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
//           {loading ? "Loading..." : "Sign Up"}
//         </button>
//         <OAuth />
//       </form>

//       <div className="flex gap-2 mt-5">
//         <p>Have an account?</p>
//         <Link to={"/sign-in"}>
//           <span className="text-blue-700">Sign In</span>
//         </Link>
//       </div>
//       {error && <p className="text-red-500 m">{error}</p>}
//     </div>
//   );
// };

// export default SignUp;

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-9">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-80"
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Loading..." : "Signup"}
        </button>
        <OAuth></OAuth>
      </form>

      {error && (
        <p className="text-red-500 text-center mt-2">
          {error} {/* Display error message */}
        </p>
      )}

      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
