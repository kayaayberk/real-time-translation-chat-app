import { CheckIcon } from "lucide-react";
import CheckoutButton from "./CheckoutButton";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get Chatting Right Away with Anyone, in any Language",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant Limit in Chat",
      "3 Chat Rooms Limit",
      "Supports 2 languages",
      "48-hour Support Response Time",
    ],
  },
  {
    name: "Pro",
    id: "pro",
    href: "#",
    priceMonthly: "zł 9.99",
    description: "Unlock the Full Potential with Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chat",
      "Unlimited Chat Rooms",
      "Supports up to 10 Languages",
      "Mutlimedia Support in Chats (Coming Soon)",
      "1-hour Dedicated Support Response Time",
      "Early Access to New Features",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl
        ring-1 ring-gray-900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-black">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-5xl font-bold tracking-tight text-black">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-black">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-6 text-base leading-7 text-black">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-black/50"
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-x-3"
                  >
                    <CheckIcon  
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

           {redirect ? (
            <Link 
            href="/register"
            className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center
            text-sm font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 focus-visible:outline
            cursor-pointer disabled:opacity-80"
            >
              Get Started Today
            </Link>
           ): (
            tier.id && <CheckoutButton />
           )} 
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
