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

const Navbar = () => {
  const auth = true;
  const tempUser = { name: "john", username: "john_123" };
  return (
    <div className="flex justify-between px-8 h-12 w-full">
      <div>
        <Link href={"/"} className="flex gap-2">
          <Crosshair />
          <span className="font-extrabold">CMSly</span>
        </Link>
      </div>

      {auth ? (
        <UserModalComponent user={tempUser} />
      ) : (
        <Link href={"/sign-in"}></Link>
      )}
    </div>
  );
};
export default Navbar;

const UserModalComponent = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>user</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/profile/${user.username}`}>Go to profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
