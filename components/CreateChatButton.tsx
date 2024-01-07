"use client"

import { MessageSquarePlus } from "lucide-react";
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

function CreateChatButton() {
    const router = useRouter();

    const createNewChat = async () => {
        //  logic to create a new chat

        router.push(`/chat/chatabc`)
    }
  return (
    <Button onClick={createNewChat} variant={"ghost"} >
        <MessageSquarePlus />
    </Button>
  )
}

export default CreateChatButton