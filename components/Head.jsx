import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Emily Chen is a computer science student interested in cybersecurity looking to make technical education more accessible."
      />
      <meta
        name="keywords"
        content="emily chen, emily, chen, cybersecurity, emily bit project, emily developer, emily tech, emily chen portfolio, emily unc"
      />
      <meta property="og:title" content="Emily Chen's Portfolio" />
      <meta
        property="og:description"
        content="A computer science student interested in making technical education more accessible"
      />
      <meta property="og:image" content="https://user-images.githubusercontent.com/69332964/173956424-6ff7ca8e-ab96-42a2-b5eb-395fcf643304.png" />
      <meta property="og:url" content="https://my-portfolio-2022-two.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Emily Chen',
};
