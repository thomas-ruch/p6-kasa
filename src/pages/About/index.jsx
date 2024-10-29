import Banner from "../../components/Banner";
import bg from "../../assets/img-mountain.png";
import DropTxt from "../../components/DropTxt";

function About() {
  return (
    <div className="about-content">
      <section>
        <Banner>
          <img src={bg} alt="paysage de lac et de montagne boisée" />
        </Banner>
      </section>
      <section className="about-drop-txt">
        <DropTxt />
      </section>
    </div>
  );
}

export default About;
