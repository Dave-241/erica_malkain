import Contact from "./components/general-component/contact";
import Footer from "./components/general-component/footer";
import Nav from "./components/general-component/nav";
import Recent_media from "./components/general-component/recent_media";
import Recent_publication from "./components/general-component/recent_publication";
import Workshop_ad from "./components/general-component/workshop_ad";

export default function Home() {
  return (
    <>
      <>
        <Nav />
        <Recent_publication />
        <Recent_media />
        <Workshop_ad />
        <Contact />
        <Footer />
      </>
    </>
  );
}
