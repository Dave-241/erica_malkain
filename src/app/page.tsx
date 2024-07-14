import Contact from "./components/general-component/contact";
import Footer from "./components/general-component/footer";
import Nav from "./components/general-component/nav";
import Recent_publication from "./components/general-component/recent_publication";
import Workshop_ad from "./components/general-component/workshop_ad";

export default function Home() {
  return (
    <>
      <>
        <Nav />
        <Recent_publication />
        <Workshop_ad />
        <Contact />
        <Footer />
      </>
    </>
  );
}
