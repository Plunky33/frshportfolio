import { Container, Stack, Divider, Flex, Box, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HomeButton from '../src/sections/homebutton';
import Profile from '../src/sections/profile';
import Nav from '../src/components/Nav'
import Layout from '../src/components/Layout'

const MotionBox = motion(Box)

const IndexPage = () => {

  return (
    <Layout>
      <MotionBox
          initial={{ opacity: 0}}
          animate={{  opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{duration: 1.5}}
      >
        <Container maxW="2x1" p={0}>
          <Nav />
          <Stack h="100vh"
                direction={["column", "column", "column", "row"]}
                spacing="50px"
            >
              <Box w={["100%", "100%", "100%", "50%"]}>
                <Profile />
              </Box>
              <Box w={["100%", "100%", "100%", "50%"]} mr={[0, 0, 0, "3rem !important", "3rem !important"]}>
                <HomeButton />
              </Box>
          </Stack>
        </Container>
      </MotionBox>
    </Layout>
  )
};

export default IndexPage;
