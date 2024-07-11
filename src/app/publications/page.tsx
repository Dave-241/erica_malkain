import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Publication_hero from "../components/publication/hero";
import Publication from "../components/publication/publication";

export default function Home() {
  return (
    <>
      <>
        <Nav />
        <Publication_hero />
        <Publication />
        <Footer />
      </>
    </>
  );
}
