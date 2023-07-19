import HomePageComponent from "@/PageComponents/Home";
import SeoHead from "@/Layout/SeoHead";

const Home = () => {
  const SeoData = {
    title: "Aquakart | Store for Softeners and water products",
    description: "",
    keywords: "",
    keyphrases: "",
    site: "",
    canonical: "",
  };
  return (
    <>
      <SeoHead data={SeoData} />
      <HomePageComponent />
    </>
  );
};
export default Home;
