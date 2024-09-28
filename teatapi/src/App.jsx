import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
  });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    createdAt: null,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/user", input)
    setUser(res.data);
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={onSubmit}>
            <input
              name="firstName"
              type="text"
              placeholder="firstName"
              onChange={onChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder="lastName"
              onChange={onChange}
            />
            <button type="submit" className="submit">
              ok
            </button>
          </form>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.createdAt}</div>
        </div>
      </div>
    </>
  );
}

export default App;
