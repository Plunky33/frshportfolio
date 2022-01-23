import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useButtonUpdate } from '../../context/ButtonContext';
import ChevronIcon from './ChevronIcon';


const MotionBox = motion(Box);

const IconButton = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: flex-end;
	padding-bottom: 0.25rem;
`

export default function ProjectGalleryToHomeIcon() {
	const toggleButton = useButtonUpdate();
	return (
		<MotionBox
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
		  	<Flex justifyContent='space-between' alignItems='flex-end' pr={[12, 12, 12, 0, 0]}>
			  	<Text fontFamily="heading"
				  	  fontWeight="700"
					//   size='xl'
					  fontSize='70px'
					  mt={4} mb={-6}
					  pl={[14, 14, 14, 2, 2]}
				>
					  Projects</Text>
				<IconButton onClick={toggleButton}>
					<ChevronIcon />
				</IconButton>
			</Flex>
	  </MotionBox>
	)
}
