import Link from 'next/link'
import Layout from '../src/components/Layout'
import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box)

export default function NotFoundPage() {
  return (
      <Layout title="Page Not Found">
         <Flex justify="center" align="center" minHeight="100vh">
          <MotionBox
            initial={{ y: -250}}
            animate={{  y: 0 }}
            exit={{ opacity: 0}}
            transition={{duration: 1.5}}
          >
            <Link href="/" passHref>
                <Text
                  fontFamily="Blackout Sunrise"
                  size='lg'
                  fontSize='80px'
                  css={{cursor: 'pointer'}}
                >Page Not Found</Text>
            </Link>
          </MotionBox>
          </Flex>
      </Layout>
  )
}
