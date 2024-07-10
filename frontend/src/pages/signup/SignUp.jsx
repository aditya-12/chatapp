import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-blue-500 rounded-md bg-clip-padding backdrop-filter 
      backdrop-blur-sm bg-opacity-10 border border-gray-100 p-7">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="ml-2 text-red-500">ChatApp </span>
        </h1>
      
      <form>
        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Full Name</span>
          </label>
          <input className="w-full input-bordered input h-10
              focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="text" placeholder="Enter your full name">
          </input>
        </div>
        
        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Username</span>
          </label>
          <input className="w-full input-bordered input h-10
          focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="text" placeholder="Enter your Username">
          </input>
        </div>

        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Password</span>
          </label>
          <input className="w-full input-bordered input h-10
          focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="password" placeholder="Enter your password">
          </input>          
        </div>

        <div>
          <label className="label p-2 ">
            <span className="text-base label-text text-gray-300">Confirm Password</span>
          </label>
          <input className="w-full input-bordered input h-10
          focus:ring-2 focus:ring-red-100 focus:border-red-100 focus:shadow-outline-red-100" type="password" placeholder="Confirm Password">
          </input>
        </div>

        <GenderCheckbox /> 

        <a href="#" className="text-sm text-gray-300 hover:underline hover:text-red-500 mt-1 inline-block">
          Already have an account?
        </a>
        <div>
            <button className="btn btn-block btn-sm mt-2 bg-red-500 text-white hover:bg-red-700">SignUp</button>
        </div>

      </form>

      </div>


    </div>
  )
}

export default SignUp