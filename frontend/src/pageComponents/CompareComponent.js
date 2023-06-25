import SeoHead from "../Head/Seo";
import CommonLayout from "../Layout/CommonLayout/Layout";
const CompareComponent = () => {
  const CompareSeo = {
    title: "AquaKart | Comparision between products",
    description:"Aquakart | here we can compare products and their features and the prices for clear view",
    keywords:
      "Aquakart , water softeners , water purifiers , kent , 3m , pentair",
    type:"Ecommerce"
  };
  return (
    <>
      <CommonLayout>
        <SeoHead data={CompareSeo}/>
        <h1>Comapre Component</h1>
      </CommonLayout>
    </>
  );
};
export default CompareComponent;
