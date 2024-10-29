import Banner from "../../components/Banner";
import bg from "../../assets/img-mountain.png";
import DropBox from "../../components/DropBox";
import aboutList from "../../datas/aboutList.json";

function About() {
  return (
    <div className="about-content">
      <section className="about-banner">
        <Banner>
          <img src={bg} alt="paysage de lac et de montagne boisée" />
        </Banner>
      </section>
      <section className="about-drop-boxes">
        {aboutList.map(({ title, content }, index) => (
          <DropBox key={index} title={title} content={content} />
        ))}
      </section>
    </div>
  );
}

export default About;
