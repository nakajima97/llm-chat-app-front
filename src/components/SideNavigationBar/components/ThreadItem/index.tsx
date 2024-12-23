import { ListItem, ListItemButton, ListItemText } from '@mui/material';

type Props = {
  thread: {
    id: number;
    title: string;
    lastUpdated: string;
  };
};

export const ThreadItem = ({ thread }: Props) => {
  return (
    <ListItem key={thread.id} disablePadding>
      <ListItemButton>
        <ListItemText primary={thread.title} secondary={thread.lastUpdated} />
      </ListItemButton>
    </ListItem>
  );
};
