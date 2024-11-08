import HomeIcon from '@mui/icons-material/Home';
import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { NavigationItem } from './components/NavigationItem';
import { ThreadItem } from './components/ThreadItem';

export const SideNavigationBar = () => {
	const navigationItems = [
		{
			text: 'Home',
			icon: <HomeIcon />,
			path: '/chat',
		},
	];

	const lastUpdated = new Date().toLocaleDateString('ja-JP', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});

	const threads = [
		{
			id: 1,
			title: 'Thread 1',
			lastUpdated,
		},
		{
			id: 2,
			title: 'Thread 2',
			lastUpdated,
		},
		{
			id: 3,
			title: 'Thread 3',
			lastUpdated,
		},
		{
			id: 4,
			title: 'Thread 4',
			lastUpdated,
		},
		{
			id: 5,
			title: 'Thread 5',
			lastUpdated,
		},
	];

	return (
		<>
			<List>
				{navigationItems.map((item) => (
					<NavigationItem
						key={item.text}
						title={item.text}
						icon={item.icon}
						link={item.path}
					/>
				))}
			</List>
			<Divider />

			{/* Thread List */}
			<Box sx={{ flex: 1, overflow: 'auto' }}>
				<Typography
					variant="subtitle2"
					sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 'medium' }}
				>
					スレッド一覧
				</Typography>
				<List>
					{threads.map((thread) => (
						<ThreadItem thread={thread} key={thread.id} />
					))}
				</List>
			</Box>
		</>
	);
};
