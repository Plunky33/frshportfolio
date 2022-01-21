import {
  Container,
  SimpleGrid,
  Box,
  useMediaQuery,
  Link,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  AiOutlineLink
} from 'react-icons/ai';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { useButtonUpdate } from '../../context/ButtonContext';
import NextLink from 'next/link';

import Nav from '../../src/components/Nav';
import { ProjectDetailToHome } from '../../src/components/ProjectDetailToHome';
import { projectData } from '../../src/data/projectData';

import * as icons from 'react-icons/si';

const MotionBox = motion(Box)

const Feature = ({ text, icon, iconBg}) => {
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

export default function ProjectPage({project, gallery}) {
	const toggleButton = useButtonUpdate();
  // const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  console.log(project.iconone);
  const iconone = icons[`${project.iconone}`]
  const icontwo = icons[`${project.icontwo}`]
  const iconthree = icons[`${project.iconthree}`]
  return (
    <MotionBox
          initial={{ opacity: 0}}
          animate={{  opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{duration: 1.5}}
    >
    <Nav />
    <Container maxW={'5xl'} py={6} p={[6, 8, 6, 8]}>
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
            Project Overview
          </Text>
          <Heading>{project.title}</Heading>
          <Text
            _hover={{ color: "purple.500" }}
            _focus={{ boxShadow: "outline" }}
            color={'gray.500'}
            fontSize={'lg'}
          >
            <NextLink
              href={project.link}
              passHref
            >
              <a target="_blank">
                {project.subtitle}<Icon as={AiOutlineLink} color={'purple.500'} ml={-1} mb={-1} pt={3} w={8} h={8} />
              </a>
            </NextLink>
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={<Icon as={iconone} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={project.featureone}
            />
            <Feature
              icon={<Icon as={icontwo} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={project.featuretwo}
            />
            <Feature
              icon={
                <Icon as={iconthree} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={project.featurethree}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={project.detailimg}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} py={30}>
          <Flex>
            <Text color={'gray.500'} fontSize={'lg'}>
              {project.description}
            </Text>
          </Flex>
          <Flex>
              <SimpleGrid minChildWidth='120px' spacing='40px'>
              {gallery.map((item: any, i: any) => (
                  <MotionBox
                    key={item.id}
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, delay: i * 0.15 }}
                  >
                  <NextLink href={`/projects/${encodeURIComponent(item.slug)}`} passHref>
                    <Image
                      style={{cursor: 'pointer'}}
                      _hover={{ bg: "blue.900" }}
                      _focus={{ boxShadow: "outline" }}
                      w="100%"
                      borderRadius="xl"
                      mb={2}
                      p={4}
                      d="block"
                      src={item.detailimg}
                      alt="Alt"
                    />
                    </NextLink>
                  </MotionBox>
              ))}
              </SimpleGrid>
          </Flex>
          <Flex justifyContent={'center'}>
            <NextLink href='/' passHref>
              <Link>
                <ProjectDetailToHome />
              </Link>
            </NextLink>
          </Flex>
      </SimpleGrid>
    </Container>
    </MotionBox>
  );
}

export async function getStaticPaths() {
  const projects = projectData;
  const paths = projects.map(project => {
    const projectId = project.slug.toLowerCase().replace(/ /g, '-');
    return {
      params: {
        projectId: projectId.toString()
      }
    }
  });
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: {params: any}) {
  const projectId = params.projectId.replace(/\-/g, '+')
  const results = projectData;
  const result = results.find(x => x.slug === projectId)
  const gallery = results.filter(x => x.slug !== projectId)
  return {
    props: {
      project: result,
      gallery
    }
  }
}