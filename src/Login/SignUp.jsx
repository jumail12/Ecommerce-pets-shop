import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const intialV = {
    email: "",
    password: "",
  };
  const [Fvalues, setFvalues] = useState(intialV);
  const [userData, setUserData] = useState([]);

  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUserData(res.data));
  }, []);

  const Validate = (fv) => {
    const tempError = {};
    const match = userData.find((user) => user.email === fv.email && user.password === fv.password);
    if (!match) {
      tempError.msg = "Incorrect email or password..!";
    }
    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFvalues({ ...Fvalues, [name]: value });
  };

  const LoginSubmit = (e) => {
    e.preventDefault();

    if (Validate(Fvalues)) {
      const user = userData.find((user) => user.email === Fvalues.email);
      const admin=user.admin;

      if(admin){
        localStorage.setItem("admin", user.admin);
        localStorage.setItem("id", user.id);
        localStorage.setItem("user", user.lastName);
        navigate("/admin",{ replace: true });
      }else if(user ){
        localStorage.setItem("id", user.id);
        localStorage.setItem("user", user.lastName);
        navigate("/", { replace: true });
        window.location.reload();
      }
      
      
     
      
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 bg-cover" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2024/04/05/20/17/ai-generated-8678181_960_720.jpg')` }}>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Welcome</h1>
          <form onSubmit={LoginSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={Fvalues.email}
                placeholder="Your Email*"
                name="email"
                onChange={handleInput}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="password"
                value={Fvalues.password}
                placeholder="Password*"
                name="password"
                onChange={handleInput}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              {error.msg && <p className="text-red-500 text-sm">{error.msg}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log In
              </button>
            </div>
            <p className="text-sm">
              don't have an account ,
              <Link to={"/register"} className="font-bold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
