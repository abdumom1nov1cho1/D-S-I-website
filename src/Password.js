import React,{useState} from "react";
import "../src/Password.css";
import { Link } from "react-router-dom";

const Password = () => {
  const [password, setPassword] = useState();
  return (
    <div>
 {password === "a" ? (
          <button>
            <Link to="/home">Home</Link>
          </button>
        ) : (
          <button>
            <Link to="/">Password</Link>
          </button>
        )}
      
      {/* <div className="login">
        <input
          type="password"
          placeholder="Search?"
          onChange={(e) => setPassword(e.target.value)}
        />

        {password === "a" ? (
          <button>
            <Link to="/home">Home</Link>
          </button>
        ) : (
          <button>
            <Link to="/">Password</Link>
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Password;
