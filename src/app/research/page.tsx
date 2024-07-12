import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Each_research from "../components/research/each_research";
import Research_hero from "../components/research/hero";

export default function Home() {
  return (
    <>
      <>
        <Nav />
        <Research_hero />
        <Each_research />
        <Footer />
      </>
    </>
  );
}
