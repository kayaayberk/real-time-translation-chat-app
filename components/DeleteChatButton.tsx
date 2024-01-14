"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useAdminId from "@/hooks/useAdminId";

function DeleteChatButton({ chatId }: { chatId: string }) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const adminId = useAdminId({ chatId });

  const handleDelete = async () => {
    toast({
      title: "Deleting chat...",
      description: "Hold tight while we delete your chat...",
    });

    console.log("Deleting: ", chatId);

    await fetch("/api/chat/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId: chatId }),
    })
      .then((res) => {
        console.error(res);
        toast({
          title: "Success!",
          description: "You have successfully deleted your chat!",
          className: "bg-green-600 text-white",
          duration: 2000,
        });
        router.push("/chat");
      })
      .catch((error) => {
        console.error(error.message);

        toast({
          title: "Error!",
          description: "There was an error deleting your chat!",
          variant: "destructive",
        });
      })
      .finally(() => setOpen(false));
  };

  return (
    session?.user.id === adminId && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Chat</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-xl dark:bg-black shadow-lg shadow-black dark:shadow-lg dark:shadow-white/30">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This will delete the chat for all users.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 space-x-2">
            <Button variant={"destructive"} onClick={handleDelete}>
              Delete
            </Button>

            <Button variant={"outline"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}

export default DeleteChatButton;
