import ChatList from "@/components/ChatList";

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {
  return (
    <div className="" >
      <ChatList />
    </div>
  );
}

export default ChatsPage;
