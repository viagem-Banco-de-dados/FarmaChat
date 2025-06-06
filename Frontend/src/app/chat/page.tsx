import { MainLayout } from "@/components/layout/MainLayout";
import { ChatInterface } from "@/components/chat/ChatInterface";

export default function ChatPage() {
  return (
    
    <MainLayout hideFooter>
      <div className="container max-w-none mx-auto h-[calc(100vh-64px)]">
        <div className="h-full flex flex-col py-4">
          <div className="flex-1 overflow-hidden bg-background flex flex-col">
            <ChatInterface />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
