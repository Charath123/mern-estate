// import React from "react";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { app } from "../firebase";
// import { useDispatch } from "react-redux";
// import { signInSuccess } from "../redux/user/userSlice";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const OAuth = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleGoogleClick = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const auth = getAuth(app);

//       const result = await signInWithPopup(auth, provider);

//       const res = await fetch("/api/auth/google", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: result.user.displayName,
//           email: result.user.email,
//           photo: result.user.photoURL,
//         }),
//       });
//       const data = await res.json();
//       dispatch(signInSuccess(data));
//       Navigate("/");
//       // console.log(result);
//     } catch (error) {
//       console.log("could not sign in with Google");
//     }
//   };
//   return (
//     <button
//       onClick={handleGoogleClick}
//       type="button"
//       className="bg-red-800 text-white p-3 rounded-lg uppercase hover:opacity-50"
//     >
//       Continue with Google
//     </button>
//   );
// };
// export default OAuth;

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with Google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      // className="bg-blue-400 text-white p-3 rounded-lg uppercase hover:bg-blue-800 "
      className=" text-black p-3 rounded-3xl uppercase flex items-center space-x-2 gap-2  justify-center border border-black hover:border-2 hover:bg-slate-200"
    >
      <FaGoogle />
      <span> Continue with Google</span>
    </button>
  );
};

export default OAuth;
