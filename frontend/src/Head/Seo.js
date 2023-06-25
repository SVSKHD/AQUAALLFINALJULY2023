import { Helmet } from "react-helmet";

const SeoHead = ({ data }) => {
  const { title, description, keywords, keyphrases, url, type } = data;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="keyphrases" content={keyphrases} />

      {/* indexing and seo */}
      <meta name="Robots" content="index , follow" />

      <meta name="og:title" content={title} />
      <meta name="og:type" content={type} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
      <meta name="og:site_name" content="IMDb" />
      <meta name="og:description" content={description} />

      <meta name="fb:page_id" content="43929265776" />
      <meta name="application-name" content="Aquakart" />
      <meta name="og:email" content="me@example.com" />
      <meta name="og:phone_number" content="650-123-4567" />
      <meta name="og:fax_number" content="+1-415-123-4567" />

      <meta name="og:latitude" content="37.416343" />
      <meta name="og:longitude" content="-122.153013" />
      <meta name="og:street-address" content="1601 S California Ave" />
      <meta name="og:locality" content="Palo Alto" />
      <meta name="og:region" content="CA" />
      <meta name="og:postal-code" content="94304" />
      <meta name="og:country-name" content="IN" />

      <meta property="fb:admins" content="987654321" />
      <meta property="og:type" content={type} />
      <meta property="og:points" content="POINTS_FOR_ACHIEVEMENT" />
    </Helmet>
  );
};
export default SeoHead;
