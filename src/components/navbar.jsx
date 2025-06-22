import { Crosshair } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import Signout from "./Signout";
export default async function Navbar() {
  const session = await getAuthSession();

  return (
    <div className="flex justify-between px-8 h-12 w-full">
      <div>
        <Link href={"/"} className="flex gap-2">
          <Crosshair />
          <span className="font-extrabold">CMSly</span>
        </Link>
      </div>

      {session ? (
        <UserModalComponent user={session?.user} />
      ) : (
        <Link href={"/sign-in"}>Sign in</Link>
      )}
    </div>
  );
}

const UserModalComponent = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          className="rounded-full border-2 border-[greenyellow] cursor-pointer"
          src={user.image}
          alt="user avatar"
          width={40}
          height={40}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/profile/${user.username}`}>Go to profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Signout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
