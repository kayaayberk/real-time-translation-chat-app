import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden" >
      <div className="flex items-center w-72 h-14" >
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <h1 className="text-4xl font-extrabold">Chat Up</h1>
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
