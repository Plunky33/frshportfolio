import dynamic from "next/dynamic";

import { useButton, useButtonUpdate } from '../../context/ButtonContext';
import { Box } from '@chakra-ui/react';

const BrowseButton = dynamic(() => import('../components/BrowseButton'))
const Projects = dynamic(() => import('./projects'))

export default function Home() {
	const renderProjects = useButton();
	const toggleButton = useButtonUpdate();

	return (
		<Box
			w="full"
			h="full"
			spacing={10}
			sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
		>
		{renderProjects ?
			<Projects /> :
			<BrowseButton toggleButton={toggleButton} />
		}
		</Box>
	);
};