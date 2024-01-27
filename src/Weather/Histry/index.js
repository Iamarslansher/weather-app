import React, { useEffect, useState } from "react";
import "./index.css";
import { FcApproval } from "react-icons/fc";

function Histry() {
  const [histroy, setHistroy] = useState([]);
  useEffect(() => {
    getHistry();
  }, []);

  const getHistry = () => {
    const userHistroy = JSON.parse(localStorage.getItem("userHistroy"));
    setHistroy(userHistroy);
  };
  if (!histroy) {
    return (
      <div>
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif"
          alt=""
        />
      </div>
    );
  }
  console.log(histroy);
  return (
    <div className="histroy-container">
      <div className="histroy-contant">
        <h2 className="his-heading">HISTROY</h2>
        <hh2>
          {histroy.map((item, index) => {
            return (
              <h4 key={index} className="his-item">
                <FcApproval /> {item.value}
              </h4>
            );
          })}
        </hh2>
      </div>
    </div>
  );
}

export default Histry;
