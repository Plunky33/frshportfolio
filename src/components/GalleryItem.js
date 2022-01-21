import { Box, Link, Img, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { projectData } from '../data/projectData'

const MotionBox = motion(Box)

const GalleryItem = () => {
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
    return (
        <Box
        padding={4}
        w="100%"
        maxW="900px"
        mx="auto"
        bg={bgColor}
        // sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
        sx={{ display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 230px)",
              gap: "20px"
        }}
      >
        {projectData.map((project, i) => (
        <MotionBox
          key={project.id}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: i * 0.45 }}
        >
          <Link href={`/projects/${encodeURIComponent(project.slug)}`} passHref>
            <Img
              style={{cursor: 'pointer'}}
              _hover={{ bg: "blue.900" }}
              _focus={{ boxShadow: "outline" }}
              w="100%"
              borderRadius="xl"
              mb={2}
              p={4}
              d="block"
              src={project.img}
              alt="Alt"
            />
          </Link>
        </MotionBox>
        ))}
      </Box>
    )
  }