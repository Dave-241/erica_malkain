import Contact from "../components/general-component/contact";
import Footer from "../components/general-component/footer";
import Nav from "../components/general-component/nav";
import Recent_media from "../components/general-component/recent_media";
import Each_workshop from "../components/workshop/each_workshop";
import Workshop_hero from "../components/workshop/hero";

export default function Home() {
  return (
    <>
      <>
        <Nav />
        <Workshop_hero />
        <Each_workshop />
        {/* <Recent_media /> */}
        {/* <Contact /> */}
        <Footer />
      </>
    </>
  );
}
