import { useButton, useButtonUpdate } from '../../context/ButtonContext';
import { Box } from '@chakra-ui/react';
import BrowseButton from '../components/BrowseButton'
import Projects from './projects';

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