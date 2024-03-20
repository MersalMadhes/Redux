import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    console.log("click");
    const myuser = [{ name: name, email: email }];
    setData([data, ...myuser]);
  };
  return (
    <>
      <h3>Welcome</h3>

      {data
        ? data.map((d, i) => {
            return <li key={i}>{d.name}</li>;
          })
        : ""}

      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>

      <button onClick={submit}>Submit</button>
    </>
  );
}

export default App;
