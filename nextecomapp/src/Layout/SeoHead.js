import Head from 'next/head'
const SeoHead = ({data}) => {
    const { title, description, keywords, keyphrases, image, site, canonical, website } = data
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="keyphrases" content={keyphrases} />
                {/* twitter cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={site} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                {/* open graph  */}
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content={site} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content={website} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="640" />
                {/* link tags */}
                <link rel="canonical" href={canonical} />
            </Head>
        </>
    )
}
export default SeoHead