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
                <meta name='robots' content='index,follow'></meta>

                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content={description} />
                <meta property="og:type" content={description} />
                <meta property="og:url" content={description} />
                <meta property="og:image" content={description} />

                {/* <link rel="manifest" href="site.webmanifest" /> */}
                {/* <link rel="apple-touch-icon" href="icon.png" /> */}
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
