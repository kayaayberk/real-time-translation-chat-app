import ChatList from "@/components/ChatList";
import ChatPermissionsError from "@/components/ChatPermissionsError";

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {
  return (
    <div className="">
      {error && (
        <div className="m-2">
          <ChatPermissionsError />
        </div>
      )}
      <ChatList />
    </div>
  );
}

export default ChatsPage;
