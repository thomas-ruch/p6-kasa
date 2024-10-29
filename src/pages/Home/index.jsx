import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import bg from "../../assets/img-sea.png";

function Home() {
  return (
    <section>
      <Banner>
        <img src={bg} alt="paysage de mer et montagne" />
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </section>
  );
}

export default Home;
