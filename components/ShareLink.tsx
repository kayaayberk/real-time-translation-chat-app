"use client";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "./ui/use-toast";

function ShareLink({
  isOpen,
  chatId,
  setIsOpen,
}: {
  isOpen: boolean;
  chatId: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { toast } = useToast();

  const host = window.location;

  const linkToChat =
    process.env.NOVE_ENV === "development"
      ? `http://${host}/chat/${chatId}`
      : `https://${host}/chat/${chatId}`;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(linkToChat);
      console.log("URL copied to clipboard");

      toast({
        title: "Copied Successfully!",
        description:
          "You can now share this link with your friends to start chatting! (NOTE: They must be added to the chat to access it!",
        className: "bg-green-600 text-white",
      });
    } catch (err) {
      console.log("Failed to copy: ", err);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} defaultOpen={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Copy className="mr-2" />
          Share Link
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg rounded-xl dark:bg-black shadow-lg shadow-black dark:shadow-lg dark:shadow-white/30">
        <DialogHeader>
          <DialogTitle className="text-center">Share Link</DialogTitle>
          <DialogDescription className="text-center" >
            Any user who has been{" "}
            <span className="text-black dark:text-white font-bold">
              granted access
            </span>{" "}
            can use this link to join the chat!
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={linkToChat} readOnly />
          </div>
          <Button
            type="submit"
            onClick={() => copyToClipboard()}
            size="sm"
            className="px-3"
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ShareLink;
