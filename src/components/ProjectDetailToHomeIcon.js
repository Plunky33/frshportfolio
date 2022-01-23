import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const MotionBox = motion(Box);

const IconButton = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: flex-end;
	padding-bottom: 0.25rem;
`

export default function ProjectDetailToHomeIcon() {
	return (
		<MotionBox
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
		  	<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
				<IconButton>
					<ChevronIcon />
				</IconButton>
			</Box>
	  </MotionBox>
	)
}
