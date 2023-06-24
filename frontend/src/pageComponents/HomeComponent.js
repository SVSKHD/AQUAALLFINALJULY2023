import CommonLayout from "../Layout/CommonLayout/Layout";
import SeoHead from "../Head/Seo"

const HomeComponent = () => {
  const HomeSeo = {
    title: "AquaKart | Store for Softeners and water purifiers",
    keywords:
      "Aquakart , water softeners , water purifiers , kent , 3m , pentair",
    type:"Ecommerce"
  };
  return (
    <>
      <CommonLayout>
        <SeoHead data={HomeSeo}/>
        <h1>Home</h1>
      </CommonLayout>
    </>
  );
};
export default HomeComponent;
