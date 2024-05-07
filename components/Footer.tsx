import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        @2024 ExploreAnimes - Ernie Codes
      </p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="object-contain"
      />
      <div className="flex gap-4">
        <Link href="https://twitter.com/ernestodc14">
          <Image
            src="./twitter.svg"
            alt="twitter"
            width={20}
            height={20}
            className="object-obtain"
          />
        </Link>
        <Link href="https://www.instagram.com/ernie.codes/">
          <Image
            src="./instagram.svg"
            alt="instagram"
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
