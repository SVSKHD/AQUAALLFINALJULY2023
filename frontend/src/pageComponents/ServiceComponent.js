import SeoHead from "../Head/Seo";
import CommonLayout from "../Layout/CommonLayout/Layout";

const ServiceComponent = () => {
  const ServiceSeo = {
    title: "AquaKart | Excellent Services for Plumbers & Softner Services",
    description:
      "Aquakart | The softeners need timely maintanance by plumbers and slat load timely to the softeners.",
    keywords:
      "Aquakart , water softeners , water purifiers , kent , 3m , pentair",
    type: "Ecommerce",
  };
  return (
    <>
      <CommonLayout>
        <SeoHead data={ServiceSeo} />
        <h1>Service Component</h1>
      </CommonLayout>
    </>
  );
};
export default ServiceComponent;
