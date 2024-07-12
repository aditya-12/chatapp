import GenderCheckbox from "./GenderCheckbox";
import {Link} from 'react-router-dom';
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username:'',
    password:'',
    confirmPassword:'',
    gender:'',
  });

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-blue-500 rounded-md bg-clip-padding backdrop-filter 
      backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="ml-2 text-red-500">ChatApp </span>
        </h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Full Name</span>
          </label>
          <input className="w-full input-bordered input h-10
              focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="text" placeholder="Enter your full name"
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName:e.target.value})}>
          </input>
        </div>
        
        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Username</span>
          </label>
          <input className="w-full input-bordered input h-10
          focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="text" placeholder="Enter your Username"
          value={inputs.username}
          onChange={(e) => setInputs({...inputs, username:e.target.value})}>
          </input>
        </div>

        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Password</span>
          </label>
          <input className="w-full input-bordered input h-10
          focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="password" placeholder="Enter your password"
          value={inputs.password}
          onChange={(e) => setInputs({...inputs, password:e.target.value})}>
          </input>          
        </div>

        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Confirm Password</span>
          </label>
          <input className="w-full input-bordered input h-10
          focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="password" placeholder="Confirm Password"
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}>
          </input>
        </div>

        <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/> 

        <Link to={'/login'} className="text-sm text-gray-300 hover:underline hover:text-red-500 mt-1 inline-block">
          Already have an account?
        </Link>
        <div>
            <button className="btn btn-block btn-sm mt-2 bg-red-500 text-white hover:bg-red-700" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
        </div>

      </form>

      </div>


    </div>
  )
}

export default SignUp;