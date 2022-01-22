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
