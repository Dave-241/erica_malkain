import Contact from "../components/general-component/contact";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Publication_hero from "../components/publication/hero";
import Publication from "../components/publication/publication";
import Each_consultation from "../components/teaching_consultation/each_consultation";
import Teaching_hero from "../components/teaching_consultation/hero";

export default function Home() {
  return (
    <>
      <>
        <Nav />
        <Teaching_hero />
        <Each_consultation />
        <Contact />

        <Footer />
      </>
    </>
  );
}
