import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefaule();
  };

  return (
    <div>
      <>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
          />
          <input type="submit" value="Login" />
        </form>
        <div>
          <button>Continue with Google</button>
          <button>Continue with Facebook</button>
        </div>
      </>
    </div>
  );
};

export default Login;
