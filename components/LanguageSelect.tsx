"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LanguagesSupported,
  LanguagesSupportedMap,
  useLanguageStore,
  useSubscriptionStore,
} from "@/store/store";
import LoadingSpinner from "./LoadingSpinner";
import { usePathname } from "next/navigation";
import Link from "next/link";

function LanguageSelect() {
  const [language, setLanguage, getLanguages, getNotSupportedLanguages] =
    useLanguageStore((state) => [
      state.language,
      state.setLanguage,
      state.getLanguages,
      state.getNotSupportedLanguages,
    ]);

  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro =
    subscription?.role === "pro" && subscription?.status === "active";

  const pathName = usePathname();
  const isChatPage = pathName.includes("/chat");

  return (
    isChatPage && (
      <div>
        <Select
          onValueChange={(value: LanguagesSupported) => setLanguage(value)}
        >
          <SelectTrigger className="w-[150px] text-black dark:text-white">
            <SelectValue
              placeholder={LanguagesSupportedMap[language]}
              className=""
            ></SelectValue>

            <SelectContent className="bg-white dark:bg-black" >
              {subscription === undefined ? (
                <LoadingSpinner />
              ) : (
                <>
                  {getLanguages(isPro).map((language) => (
                    <SelectItem key={language} value={language}>
                      {LanguagesSupportedMap[language]}
                    </SelectItem>
                  ))}
                  {getNotSupportedLanguages(isPro).map((language) => (
                    <Link href={"/register"} key={language} prefetch={false}>
                      <SelectItem
                        value={language}
                        key={language}
                        disabled
                        className="bg-gray-300/50 text-gray-500 dark:text-white py-2 my-1"
                      >
                        {LanguagesSupportedMap[language]} (PRO)
                      </SelectItem>
                    </Link>
                  ))}
                </>
              )}
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
    )
  );
}

export default LanguageSelect;
