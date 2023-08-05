import React from "react";
import hoto from "../assets/hotobabba.png"
import "../Styles/homepage.css";
import Header from "../Components/Header";

const Homepage = () => {
  return (
   <div>
     <Header />
    <div className="sec-1">
      <div className="left">
      <div>
        <h1>
          Manage your Tasks on <br />
          <span>TaskDuty</span>
        </h1>
      </div>
      <div>
      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Non tellus,
        sapien, morbi ante nunc euismod ac <br /> felis ac. Massa et, at platea tempus
        duis non eget. <br /> Hendrerit tortor fermentum bibendum mi nisl <br /> semper
        porttitor. Nec accumsan.</p>
      </div>
      <button>Go to my Tasks</button>
      </div>
      <div className="right">
<img src={hoto} alt={'hoto'} />
      </div>
    </div>
   </div>
  );
};

export default Homepage;
