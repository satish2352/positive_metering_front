import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description, keywords, slug, alt }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" content={`https://positive.sumagotest.in/${slug}`} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://positive.sumagotest.in/${slug}`} />
      {/* <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} /> */}
    </Helmet>
  );
};

export default MetaTags;
