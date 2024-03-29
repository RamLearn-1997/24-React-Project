import Tabs from "./tabs";
import { useState } from "react";
import "../App.css";
import GoogleLogo from "../assets/Google.svg";

function SignIn() {
  return (
    <div>
      <div className="button">
        <button>
          <img src={GoogleLogo} alt="googlelogo" />
          Sign In with Google
        </button>
      </div>
      <div className="or">
        <p>
          <span className="line"></span>or<span className="line"></span>
        </p>
      </div>

      <form action="#" className="form1">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign in</button>
        <a href="#">Forget your password ?</a>
      </form>
    </div>
  );
}

function CreateAccount() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <div className="button">
        <button>
          <img src={GoogleLogo} alt="googlelogo" />
          Sign Up with Google
        </button>
      </div>
      <div className="or">
        <p>
          <span className="line"></span>or<span className="line"></span>
        </p>
      </div>
      <form action="#" className="form2">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Create Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
        <div className="checkbox">
          <input className="check"  type="checkbox" checked={isChecked} onChange={handleChange} />
          <p>
            Agree with <a href="#">Terms</a> and <a href="#">Conditions</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default function TabTest() {
  const tabs = [
    {
      label: "Sign In",
      content: <SignIn />,
    },
    {
      label: "Create Account",
      content: <CreateAccount />,
    },
  ];

  function handleChange(currentTabIndex) {}

  return <Tabs tabsContents={tabs} onChange={handleChange} />;
}
