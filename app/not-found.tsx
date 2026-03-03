import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const NotFound = () => {
  return <div className="min-h-screen flex justify-center items-center flex-col">
    <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} height={48} width={48} priority={true}/>
    <div className="p-6 min-w-1/3 rounded-lg shadow-md  text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button variant={'outline'} asChild>
            <Link href={'/'} className="mt-4 ml-2">Back to Home</Link>
        </Button>
    </div>
  </div>;
};

export default NotFound;
