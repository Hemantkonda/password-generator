import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passGen = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (char) str += "@#$%!&*?_";

    for (let i = 0; i < length; i++) {
      let charactor = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(charactor);
    }
    setPass(password);
  }, [length, numAllowed, char, setPass]);

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    passGen();
  }, [length, numAllowed, char, setPass]);

  return (
    <>
      <div className="conatiner">
        <h1>Password Generator</h1>
        <div className="password">
          <input type="text" value={pass} className="password" readOnly ref={passwordRef} />
          <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="other-input">
          <input
            type="range"
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length {length}</label>

          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>

          <input
            type="checkbox"
            defaultChecked={char}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
