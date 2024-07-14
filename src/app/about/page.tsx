import About_hero from "../components/about/hero";
import Contact from "../components/general-component/contact";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Recent_publication from "../components/general-component/recent_publication";
import Categories from "../components/media/categories";
import Media_hero from "../components/media/hero";

export default function Meida() {
  return (
    <>
      <>
        <Nav />
        <About_hero />
        <Recent_publication />
        <Contact />
        <Footer />
      </>
    </>
  );
}
