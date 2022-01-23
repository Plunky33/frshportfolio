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
                <link rel="canonical" href="" />
                <meta name="robots" content="all" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@AriBenoist" />
                <meta name="twitter:creator" content="@AriBenoist" />
                <meta name="twitter:title" content="Aristide Benoist — Freelance developer" />
                <meta name="twitter:description" content="Aristide Benoist is a developer who specializes in motion and interaction. As a freelancer, he works with companies, agencies, startups and individuals all over the world." />
                <meta name="twitter:image" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <meta property="og:title" content="Aristide Benoist — Freelance developer" />
                <meta property="og:description" content="Aristide Benoist is a developer who specializes in motion and interaction. As a freelancer, he works with companies, agencies, startups and individuals all over the world." />
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <link rel="icon" href="" />
                <link rel="mask-icon" href="" color="#0B0C0C" />
                <link rel="alternate icon" href="" />
                <link rel="apple-touch-icon" href="" />
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
