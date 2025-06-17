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
const Navbar = () => {
  const session = getAuthSession();
  console.log(session);
  const tempUser = { name: "john", username: "john_123" };
  return (
    <div className="flex justify-between px-8 h-12 w-full">
      <div>
        <Link href={"/"} className="flex gap-2">
          <Crosshair />
          <span className="font-extrabold">CMSly</span>
        </Link>
      </div>

      {session.user ? (
        <UserModalComponent user={session?.user} />
      ) : (
        <Link href={"/sign-in"}>Sign in</Link>
      )}
    </div>
  );
};
export default Navbar;

const UserModalComponent = ({ user }) => {
  return (
    <DropdownMenu>
      {/* <DropdownMenuTrigger>user</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/profile/${user.username}`}>Go to profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent> */}
      hi
    </DropdownMenu>
  );
};
