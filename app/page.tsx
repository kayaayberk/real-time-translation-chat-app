import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoGif from "../images/landingPage/demo.gif";

export default async function Home() {
  return (
    <main className="dark:bg-black">
      <div className="relative isolate pt-14 dark:bg-black"></div>
      <div className="py-12 sm:py-20 lg:pb-40 dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Chat with Anyone, in any Language!
            </h1>
            <p className="mt-6 text-lg leading-8 font-medium text-indigo-600 dark:text-indigo-500">
              Group chat, real-time translation, chat admins and shareable chat links.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                href="/pricing"
                className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing{" "}
                <span aria-hidden="true">
                  {" "}
                  <MoveRight size={20} />{" "}
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                unoptimized
                src={DemoGif}
                alt="App use gif"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
