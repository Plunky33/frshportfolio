import dynamic from "next/dynamic";
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Box,
    Link,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { profilePageData } from '../src/data/profilePageData';
import * as icons from 'react-icons/si';

const ProfileSkills = dynamic(() => import('../src/components/ProfileSkills'))
const Layout = dynamic(() => import('../src/components/Layout'))
const ProjectDetailToHomeIcon = dynamic(() => import('../src/components/ProjectDetailToHomeIcon'))

const MotionBox = motion(Box)

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function ProfilePage() {
  const project = profilePageData[0]
  const iconone = icons[`${project.iconone}`]
  const icontwo = icons[`${project.icontwo}`]
  const iconthree = icons[`${project.iconthree}`]
  const iconfour = icons[`${project.iconfour}`]
  const iconfive = icons[`${project.iconfive}`]
  const iconsix = icons[`${project.iconsix}`]

  return (
      <Layout>
        <MotionBox
        initial={{ opacity: 0}}
        animate={{  opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{duration: 1.5}}
        >
        <Container maxW="2x1" p={0}>
          <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Text
                  textTransform={'uppercase'}
                  color={'blue.400'}
                  fontWeight={600}
                  fontSize={'sm'}
                  bg={useColorModeValue('blue.50', 'blue.900')}
                  p={2}
                  alignSelf={'flex-start'}
                  rounded={'md'}>
                  Profile
                </Text>
                <Heading>{project.headerdesc}</Heading>
                <Text color={'gray.500'} fontSize={'lg'}>
                {project.description}
                </Text>
                <Text color={'gray.500'} fontSize={'lg'}>
                Current stack:
                </Text>
                {/* <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue('gray.100', 'gray.700')}
                    />
                  }>
                  <Feature
                    icon={
                      <Icon as={iconone} color={'yellow.500'} w={5} h={5} />
                    }
                    iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                    text={'React'}
                  />
                  <Feature
                    icon={<Icon as={icontwo} color={'green.500'} w={5} h={5} />}
                    iconBg={useColorModeValue('green.100', 'green.900')}
                    text={'Next.js'}
                  />
                  <Feature
                    icon={
                      <Icon as={iconthree} color={'purple.500'} w={5} h={5} />
                    }
                    iconBg={useColorModeValue('purple.100', 'purple.900')}
                    text={'GraphQL'}
                  />
                  <Feature
                    icon={
                      <Icon as={iconfour} color={'purple.500'} w={5} h={5} />
                    }
                    iconBg={useColorModeValue('purple.100', 'purple.900')}
                    text={'Postgres'}
                  />
                  <Feature
                    icon={
                      <Icon as={iconfive} color={'purple.500'} w={5} h={5} />
                    }
                    iconBg={useColorModeValue('purple.100', 'purple.900')}
                    text={'Hasura'}
                  />
                  <Feature
                    icon={
                      <Icon as={iconsix} color={'purple.500'} w={5} h={5} />
                    }
                    iconBg={useColorModeValue('purple.100', 'purple.900')}
                    text={'Node'}
                  />
                </Stack> */}
              </Stack>
              <Flex pt={15}>
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={project.img}
                  objectFit={'cover'}
                  boxSize={'400px'}
                />
              </Flex>
            </SimpleGrid>
            <ProfileSkills />
          </Container>
          <Flex justifyContent={'center'} pb={30}>
            <NextLink href='/' passHref>
              <Link>
                <ProjectDetailToHomeIcon />
              </Link>
            </NextLink>
          </Flex>
        </Container>
        </MotionBox>
      </Layout>
  );
}