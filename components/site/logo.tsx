import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Studio della Voce — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={dark ? "/brand/logo-white.png" : "/brand/logo.png"}
        alt="Studio della Voce"
        width={600}
        height={161}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
