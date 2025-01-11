import { useDeleteThread } from '../../hooks/useDeleteThread';
import { useFetchThreadList } from '../../hooks/useFetchThreadList';
import { ThreadList } from '../ThreadList';

export const ThreadListContainer = () => {
  const { fetchThreadList } = useFetchThreadList();
  const { mutate } = useDeleteThread();

  const { data, refetch } = fetchThreadList();

  const handleDelete = (id: string) => {
    mutate(id);
    refetch();
  };

  return <ThreadList threads={data ?? []} handleDelete={handleDelete} />;
};
