import Head from 'next/head';

export default function Layout({title, keywords, description, children}) {
  return <div>
      <Head>
          <title>{title}</title>
          <meta name="description" content={description}></meta>
          <meta name="keywords" content={keywords}></meta>
      </Head>
      {children}
  </div>
}

Layout.defaultProps = {
    title: 'John Milner Frontend Engineer Portfolio',
    description: 'A Showcase of John Milner\'s frontend web development work',
    keywords: 'Frontend engineer, web development, react, next, full-stack'
}
