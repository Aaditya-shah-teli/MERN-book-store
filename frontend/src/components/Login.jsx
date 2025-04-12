
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

export const Login = () => {
    const { login, createUser } = useContext(AuthContext);
        const [error, setError] = useState("");
        const location = useLocation();
        const navigate = useNavigate();
        const from = location.state?.from?.pathname || "/";

        const handleLogin = (e) => {
          e.preventDefault();
          const form = e.target;
          
          const email = form.email.value;
          const password = form.password.value;
          
          login(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              alert("Login Successfully");
              navigate(from, { replace: true });
            })
            .catch((error) => {
              setError(error.message);
            });
        };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
              Flowbite
            </a> */}
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  login an account
                </h1>

                {/* form here  */}
                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" placeholder="name@company.com" required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                 
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="terms" aria-describedby="terms" type="checkbox" required
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                        focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 
                        dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                        I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                  <p className='text-red-500'>{error}</p>
                  <button type="submit"
                    className="bg-blue-500 w-full text-white bg-primary-600 hover:bg-primary-700 
                    focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
                    rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 
                    dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    login an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have't an account? <Link to="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">create here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}
