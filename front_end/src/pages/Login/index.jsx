import React, { useState, useEffect, useContext } from "react";
import { LoginForm} from "../../components";
import axios from "axios";
import { AuthContext } from "../../store/AuthContext";
import {useNavigate } from "react-router-dom";


export function Login() {
  const [FormData, setFormData] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (FormData) {  
      axios
        .post("http://localhost:3000/login", FormData)
        .then(res => {
          localStorage.setItem('token',res.headers['auth-token'])
          res.status === 200 && setAuth({ loggedIn: true });
          navigate("/dashboard", {replace: true});
        })
        .catch((err) => console.log(err.response));
        // .then(res=>res.status === 200 && setAuth({ loggedIn: true }))
        // .then(()=>  navigate("/dashboard", {replace: true}))
    }
  },[FormData]);

  // useEffect(() => {
  //   if (auth.loggedIn) {
  //     navigate("/", {
  //       replace: true,
  //     });
  //   }
  // },[auth]);
  
  return (
    <div className="bg-zinc-200 py-6 sm:py-8 lg:py-12 w-screen h-screen flex justify-center items-center">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-start mb-4 md:mb-8">
          <LoginForm loginFormData={setFormData} />
        </h2>
      </div>
    </div>
  );
}
