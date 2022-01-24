import Head from 'next/head';
import Nav from '../../src/components/Nav'
import { Container } from '@chakra-ui/react';

export default function Layout({title, keywords, description, children}) {
  return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta name="keywords" content={keywords}></meta>
                <meta name='language' content='EN'></meta>
                <link rel="canonical" href="<URL HERE>" />
                <meta name="robots" content="all" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@johnmilner33" />
                <meta name="twitter:creator" content="@johnmilner33" />
                <meta name="twitter:title" content="John Milner — Frontend developer" />
                <meta name="twitter:description" content="John Milner is a frontend developer who specializes in building functional and stick web applications. He is currently available on a project basis." />
                <meta name="twitter:image" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <meta property="og:title" content="John Milner — Frontend developer" />
                <meta property="og:description" content="John Milner is a frontend developer who specializes in building functional and stick web applications. He is currently available on a project basis." />
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                <link crossOrigin="use-credentials" rel="manifest" href="" />
                <meta name="theme-color" content="#171717"></meta>
            </Head>
            <Container maxW="2x1" p={0}>
                <Nav />
                {children}
            </Container>
        </>
  )
}

Layout.defaultProps = {
    title: 'John Milner Frontend Engineer Portfolio',
    description: 'A Showcase of John Milner\'s frontend web development work',
    keywords: 'Frontend engineer, web development, react, next, full-stack'
}
