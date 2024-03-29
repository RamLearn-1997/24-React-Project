import Accordian from "./accordian";
import Img from "/src/assets/yoga.png";
import "./style.css";

function AccordianSinglePage() {
  return (
    <div className="wrapper">
      <div className="top">
        <h1>How Do We Help You To Transform ?</h1>
        <h3>We Created Our Mental And Physical Transformation Through Yoga</h3>
      </div>
      <div className="bottom">
        {/* Accordian components */}
        <div className="left"><Accordian /></div>
        <div className="right">
          <img src={Img} alt="yoga" />
        </div>
      </div>
    </div>
  );
}

export default AccordianSinglePage;
