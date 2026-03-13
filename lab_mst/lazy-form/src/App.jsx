import { useState, lazy, Suspense } from "react";
import "./App.css";

const LazyImage = lazy(() => import("./components/ImageComponent.jsx"));

function App() {

  const [showImage, setShowImage] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (name.length < 8) {
      setNameError("Name must be at least 8 characters");
      valid = false;
    } else {
      setNameError("");
    }

    const special = /[!@#$%^&*]/;

    if (!special.test(password)) {
      setPasswordError("Password must contain a special character");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="container">

      {showImage && (
        <Suspense fallback={<p>Loading Image...</p>}>
          <LazyImage />
        </Suspense>
      )}

      <button onClick={() => setShowImage(true)}>
        Load Image
      </button>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error">{nameError}</p>}

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>}

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default App;