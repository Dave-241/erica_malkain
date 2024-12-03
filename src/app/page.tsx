import Contact_wrappeer from "./components/general-component/contact_wrapper";
import Footer from "./components/general-component/footer";
import Nav from "./components/general-component/nav";
import Recent_media from "./components/general-component/recent_media";
import Recent_media_wrapper from "./components/general-component/recent_media_wrapper";
import Recent_publication from "./components/general-component/recent_publication";
import Review_wrapper from "./components/general-component/review_wrapper";
import AnimatedLines from "./components/home/approach";
import Hero_home from "./components/home/hero";
import Home_research from "./components/home/research";
import Reviews from "./components/home/reviews";
import Workshop_ad from "./components/home/workshop_ad";
import { supabase } from "./utils/supabaseClient";
export const revalidate = 2;
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("publication")
    .select("*")
    .order("order", { ascending: true })
    .limit(4);

  // if (error) throw notFound();
  // console.log(data);
  return data;
};
const fetch_research_items = async () => {
  const { data, error } = await supabase
    .from("research_blog")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  return data;
};
const fetch_approach_items = async () => {
  const { data, error } = await supabase
    .from("approach")
    .select("*")
    .order("created_at", { ascending: false });

  return data;
};
export default async function Home() {
  const product_data = await fetchProducts();
  const research_items = await fetch_research_items();
  const approach_items = await fetch_approach_items();

  return (
    <>
      <>
        <div className="bg-[#DFE4DF]">
          <Nav />
          <Hero_home />
          <div className="md:pb-[6vw] md:mt-[8vw] mt-[15vw] ">
            <AnimatedLines active_user_data={approach_items || []} />
          </div>

          <Home_research research_items={research_items || []} />
          <Recent_publication product_data={product_data || []} />
          <Recent_media_wrapper />
          <Review_wrapper />
          <Contact_wrappeer />
          <Footer />
        </div>
      </>
    </>
  );
}
