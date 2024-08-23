import img from "../../assets/img/Frame 28.png";
import imges from "../../assets/img/Frame 29.png";
import "../Avalia/style.css";

function Avalia() {
  return (
    <>
      <div className="avalia">
        <div className="avalia_item">
          <h1>God of War: Ragnarök</h1>
          <div>
            <p>Avaliação da ratings</p>
          </div>
        </div>

        <div>
          <div className="logos">
            <img className="images" src={img} alt="" />
            <img className="image" src={imges} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Avalia;
