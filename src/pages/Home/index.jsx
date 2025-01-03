import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import bg from "../../assets/img-sea.webp";

function Home() {
  return (
    <div>
      <section className="home-banner">
        <Banner>
          <img src={bg} alt="paysage de mer et montagne" />
          <h1>
            Chez vous, <br className="conditionnal-break" />
            partout et ailleurs
          </h1>
        </Banner>
      </section>
      <section className="home-gallery">
        <Gallery />
      </section>
    </div>
  );
}

export default Home;
