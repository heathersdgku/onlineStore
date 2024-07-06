import { useState } from "react";
import "./styles/about.css";

function About() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  function show() {
    setIsInfoVisible(true);
  }

  function getInfo() {
    if (isInfoVisible) {
      return (
        <div>
          <p>email: heatherchoe@gmail.com</p>
          <p>phone: 858 123 4567</p>
        </div>
      );
    } else {
      return <p>Click the button to view contact info</p>;
    }
  }

  return (
    <div className="about">
      <h2>Heather Choe</h2>

      {getInfo()}

      {isInfoVisible ? "" : <button onClick={show}>View contact info</button>}
    </div>
  );
}

export default About;
