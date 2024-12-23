import { ChatBaseLayout } from '@/components/ChatBaseLayout';
import { SideNavigationBar } from '@/components/SideNavigationBar';
import { ChatMainContainer } from '@/features/chat/components/ChatMainContainer';

export const ChatTemplate = () => {
  return (
    <ChatBaseLayout
      title="チャット画面"
      navigationBarContent={<SideNavigationBar />}
    >
      <ChatMainContainer />
    </ChatBaseLayout>
  );
};
