import Contact from "./components/general-component/contact";
import Footer from "./components/general-component/footer";
import Nav from "./components/general-component/nav";
import Recent_media from "./components/general-component/recent_media";
import Recent_publication from "./components/general-component/recent_publication";
import Hero_home from "./components/home/hero";
import Home_research from "./components/home/research";
import Workshop_ad from "./components/home/workshop_ad";

export default function Home() {
  return (
    <>
      <>
        <div className="bg-[#DFE4DF]">
          <Nav />
          <Hero_home />
          <Home_research />
          <Recent_publication />
          <Recent_media />
          <Workshop_ad />
          <Contact />
          <Footer />
        </div>
      </>
    </>
  );
}
