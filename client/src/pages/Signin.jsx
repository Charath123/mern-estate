import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

// const SignIn = () => {
//   const [formData, setFormData] = useState({});
//   // const [loading, setLoading] = useState(false); // Optional loading state
//   // const [error, setError] = useState(""); // State for displaying errors
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading, error } = useSelector((state) => state.user);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     //console.log(formData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setLoading(true); // Set loading to true 1
//     dispatchEvent(signInStart());
//     //setError(""); // Clear any previous error

//     try {
//       const res = await fetch("/api/auth/signin", {
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
//       //console.log(data);
//       dispatch(signInSuccess(data));

//       navigate("/"); // Navigate to login page on success
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       //setError(error.message); // Set error message in state 3
//     } finally {
//       // setLoading(false); // Turn off loading 2
//       console.log("error submitting from:", error);
//       dispatch(signInFailure(data.message));
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold m-9">Sign In</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
//           {loading ? "Loading..." : "Signin"}
//         </button>
//       </form>

//       {error && (
//         <p className="text-red-500 text-center mt-2">
//           {error} {/* Display error message */}
//         </p>
//       )}

//       <div className="flex gap-2 mt-5">
//         <p>Dont have an Account?</p>
//         <Link to={"/sign-up"}>
//           <span className="text-blue-700">Sign Up</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

//2nd test

// const SignIn = () => {
//   const [formData, setFormData] = useState({});
//   const { loading, error } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     console.log(formData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       dispatch(signInStart());
//       const res = await fetch("/api/auth/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);

//       if (data.success == false) {
//         dispatch(signInFailure(data.message));
//         return;
//       }

//       dispatch(signInSuccess(data));
//       navigate("/");
//     } catch (error) {
//       dispatch(signInFailure(error.message));
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
//           disabled={loading}
//           className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
//         >
//           {loading ? "Loading..." : "Sign In"}
//         </button>
//         <OAuth />
//       </form>

//       <div className="flex gap-2 mt-5">
//         <p>Dont have an account?</p>
//         <Link to={"/sign-up"}>
//           <span className="text-blue-700">Sign Up</span>
//         </Link>
//       </div>
//       {error && <p className="text-red-500 m">{error}</p>}
//     </div>
//   );
// };
// export default SignIn;

//task 3

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-9">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          {loading ? "Loading..." : "Signin"}
        </button>
        <OAuth></OAuth>
      </form>

      {error && (
        <p className="text-red-500 text-center mt-2">
          {error} {/* Display error message */}
        </p>
      )}

      <div className="flex gap-2 mt-5">
        <p>Dont have an Account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
