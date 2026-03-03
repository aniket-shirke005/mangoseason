import ModeToggle from "./header/mode-toggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription,SheetTitle,SheetTrigger, SheetHeader} from "../ui/sheet";

const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
        <nav className="hidden md:flex w-full max-w-xs gap-1">
            <ModeToggle/>
            <Button variant={'ghost'} asChild>
                <Link href={'/cart'}>
                <ShoppingCart/>Cart
                </Link>
            </Button>
            <Button asChild>
                <Link href={'/sign-in'}>
                <UserIcon/>Sign In
                </Link>
            </Button>
        </nav>
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <EllipsisVertical/>
                </SheetTrigger>
                <SheetContent className="ps-3 flex flex-col items-start">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <ModeToggle/>
                    <Button variant={'ghost'} asChild>
                        <Link href={'/cart'}>
                        <ShoppingCart/>Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={'/sign-in'}>
                        <UserIcon/>Sign In
                        </Link>
                    </Button>
                    <SheetDescription></SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>
    </div>
)};

export default Menu;
