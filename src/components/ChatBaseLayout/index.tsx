import { AppBar, Box, Toolbar, useTheme } from '@mui/material';

type Props = {
	title: string;
	navigationBarContent: React.ReactNode;
	children: React.ReactNode;
};

export const ChatBaseLayout = ({
	title,
	navigationBarContent,
	children,
}: Props) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: '100dvw',
				height: '100dvh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<AppBar position="static">
				<Toolbar>{title}</Toolbar>
			</AppBar>
			<Box sx={{ flexGrow: 1, display: 'flex' }}>
				<Box
					component="nav"
					sx={{
						height: '100%',
						backgroundColor: theme.palette.grey[100],
					}}
				>
					{navigationBarContent}
				</Box>
				<Box component="main" sx={{ flexGrow: 1, height: '100%' }}>
					{children}
				</Box>
			</Box>
		</Box>
	);
};
