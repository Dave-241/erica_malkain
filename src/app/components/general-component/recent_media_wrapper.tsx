import { supabase } from "../../utils/supabaseClient";
import Recent_media from "./recent_media";
export const revalidate = 0;
const fetchProducts = async () => {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  // if (error) throw notFound();
  // console.log(data);
  return data;
};

export default async function Recent_media_wrapper() {
  const product_data = await fetchProducts();

  return (
    <>
      <>
        <Recent_media product_data={product_data || [{}]} />
      </>
    </>
  );
}
