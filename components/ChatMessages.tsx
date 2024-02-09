"use client";

import { Message, sortedMessagesRef } from "@/lib/converters/Message";
import { useLanguageStore } from "@/store/store";
import { MessageCircleIcon } from "lucide-react";
import { Session } from "next-auth";
import { createRef, use, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "./LoadingSpinner";
import UserAvatar from "./UserAvatar";

function ChatMessages({
  chatId,
  initialMessages,
  session,
}: {
  chatId: string;
  initialMessages: Message[];
  session: Session | null;
}) {
  const language = useLanguageStore((state) => state.language);
  const messagesEndRef = createRef<HTMLDivElement>();

  const [messages, loading, error] = useCollectionData<Message>(
    sortedMessagesRef(chatId),
    {
      initialValue: initialMessages,
    }
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="p-5">
      {!loading && messages?.length === 0 && (
        <div
          className="flex flex-col justify-center items-center p-20
        rounded-xl space-y-2 dark:border text-center dark:text-white font-light"
        >
          <MessageCircleIcon className="w-10 h-10" />

          <h2>
            <span className="font-bold">Invite a friend</span>{' '}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            below to get started!
          </h2>
          <p>We will auto-detect & translate it all for you!</p>
        </div>
      )}

      {messages?.map((message) => {
        const isSender = message.user.id === session?.user.id;
        return (
          <div key={message.id} className="flex my-2 items-end">
            <div
              className={`flex flex-col w-96 relative space-y-2 p-4 overflow-auto whitespace-normal mx-2 rounded-lg ${
                isSender
                  ? "ml-auto bg-green-600 text-white rounded-br-none"
                  : "bg-gray-300 dark:bg-slate-700 dark:text-gray-100 rounded-bl-none"
              }`}
            >
              <p
                className={`text-xs italic font-light line-clamp-1${
                  isSender ? "text-right" : "text-left"
                }`}
              >
                {message.user.name.split(" ")[0]}
              </p>
              <div className="space-x-2">
                <p className="whitespace-normal break-words">{message.translated?.[language] || message.input}</p>
                {!message.translated && <LoadingSpinner />}
              </div>
            </div>
            <UserAvatar
              name={message.user.name}
              image={message.user.image}
              className={`${!isSender && "-order-1"}`}
            />
          </div>
        );
      })}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;
