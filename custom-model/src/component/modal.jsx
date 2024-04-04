import "../App.css";
import Imgpic from "../assets/main.svg";
import List1 from "../assets/list1.svg";
import list2 from "../assets/list2.svg";
import List3 from "../assets/list3.svg";
import Listn from "../assets/listn.svg";

export default function Modal({ id, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>

          <div className="profile">
            <img className="img1" src={Imgpic} alt="profilepic" />
            <div className="prof-text">
              <p className="p1">Jimmy Curtis</p>
              <p className="p2"> @jmcur</p>
            </div>
          </div>

          <div className="record">
            <p>
              <span className="s1">11.4k</span> Follower
            </p>
            <p>
              <span className="s1">379</span> Following
            </p>
          </div>

          <span className="line"></span>
          <div className="list">
            <p className="li1">Mutual Connections</p>
            <div className="li2">
              <img className="img2" src={List1} alt="mutual" />
              <img className="img2" src={list2} alt="mutual" />
              <img className="img2" src={List3} alt="mutual" />
              <img className="img2" src={Listn} alt="mutual" />
            </div>
          </div>
          <span className="line"></span>
        </div>
        <div className="body">
          <p>
            Cofounder of Neno Studio with @Ron. Also father of 2, a husband, and
            art graduate from IIT Bombay. Thanks for being here!
          </p>
        </div>
        <div className="footer">
          <button className="color">Connect</button>
          <button className="outline">Send Note</button>
        </div>
      </div>
    </div>
  );
}
