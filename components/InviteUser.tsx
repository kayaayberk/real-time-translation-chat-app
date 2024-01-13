"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef, chatMembersRef } from "@/lib/converters/ChatMembers";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { getUserByEmailRef } from "@/lib/converters/User";
import { useToast } from "@/components/ui/use-toast";
import useAdminId from "@/hooks/useAdminId";
import { PlusCircleIcon } from "lucide-react";
// import { ShareLink } from "./ShareLink";
import { useSubscriptionStore } from "@/store/store";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";
import ShareLink from "./ShareLink";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

function InviteUser({ chatId }: { chatId: string }) {
  const { data: session } = useSession();
  const { toast } = useToast();
  const adminId = useAdminId({ chatId });
  const subscription = useSubscriptionStore((state) => state.subscription);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [openInviteLink, setOpenInviteLink] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!session?.user.id) return;

    toast({
      title: "Sending invite...",
      description: "Hold tight while we send an invite to this user...",
    });

    // Need to get the user current chats to check if they are about to exceed the PRO plan limit.
    const noOfUserInChat = (await getDocs(chatMembersRef(chatId))).docs.map(
      (doc) => doc.data()
    ).length;

    // Check if the user is about to exceed the PRO plan chat limit (3 chats).
    const isPro =
      subscription?.role === "pro" && subscription.status === "active";

    if (!isPro && noOfUserInChat >= 2) {
      toast({
        title: "Free plan limit exceeded!",
        description:
          "You have exceeded the limit of users in this chat. Please upgrade to a PRO plan to add more users.",
        variant: "destructive",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => router.push("/register")}
          >
            Upgrade to PRO
          </ToastAction>
        ),
      });
      return;
    }

    const querySnapshot = await getDocs(getUserByEmailRef(values.email));
    if (querySnapshot.empty) {
      toast({
        title: "User not found!",
        description:
          "We couldn't find a registered user with that email address. Please check the email address and try again.",
        variant: "destructive",
      });
      return;
    } else {
      const user = querySnapshot.docs[0].data();

      await setDoc(addChatRef(chatId, user.id), {
        userId: user.id!,
        email: user.email!,
        timestamp: serverTimestamp(),
        isAdmin: false,
        chatId: chatId,
        image: user.image || "",
      })
        .then(() => {
          setOpen(false);

          toast({
            title: "User added to chat!",
            description: "You have successfully added a user to this chat!",
            className: "bg-green-600 text-white",
            duration: 2000,
          });

          setOpenInviteLink(true);
        })
        .catch((error) => {
          toast({
            title: "Error!",
            description:
              "Whoops... There was an error adding this user to the chat!",
            variant: "destructive",
          });
          setOpen(false);
        });
    }
    form.reset();
  }

  return (
    adminId === session?.user.id && (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-black dark:bg-white">
              <PlusCircleIcon className="mr-1" />
              Add User to Chat
            </Button>
          </DialogTrigger>

          <DialogContent className="rounded-xl sm:max-w-lg dark:bg-black shadow-lg shadow-black dark:shadow-lg dark:shadow-white/30">
            <DialogHeader>
              <DialogTitle className="text-center">
                Add User to Chat
              </DialogTitle>
              <DialogDescription className="text-center">
                Simply enter another users email address to invite them to this
                chat!{" "}
                <span className="text-black dark:text-white font-bold">
                  (NOTE: They must already have an account!)
                </span>
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="dummy@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-black dark:bg-white ml-auto sm:w-fit w-full"
                  type="submit"
                >
                  Add to Chat
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        <ShareLink
          isOpen={openInviteLink}
          setIsOpen={setOpenInviteLink}
          chatId={chatId}
        />
      </>
    )
  );
}

export default InviteUser;
