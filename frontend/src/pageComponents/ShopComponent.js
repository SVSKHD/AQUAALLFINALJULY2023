import SeoHead from "../Head/Seo";
import CommonLayout from "../Layout/CommonLayout/Layout";
const ShopComponent = () => {
  const ShopSeo = {
    title: "AquaKart | Shop All the Softeners here",
    keywords:
      "Aquakart , water softeners , water purifiers , kent , 3m , pentair",
    type: "Ecommerce",
  };
  return (
    <>
      <CommonLayout>
        <SeoHead data={ShopSeo} />
        <h1>Shop</h1>
      </CommonLayout>
    </>
  );
};
export default ShopComponent;
