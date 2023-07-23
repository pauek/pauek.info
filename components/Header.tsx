import Image from "next/image";
import Link from "next/link";
import Icon from "./icons/Icon";

import socialLinks from "./social-links.json";

export const Header = () => {
  return (
    <header className="flex flex-row items-end border-b">
      <Link href="/" className="flex flex-row items-center -mb-1">
        <Image
          className="rounded-full mr-2"
          src="/images/pauek.jpg"
          alt="Pauek's face"
          width={36}
          height={36}
        />
        <span className="name">Pau Fernández</span>
      </Link>
      <div className="flex-1" />
      <div className="flex flex-row items-center pb-1 gap-1 text-stone-300">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            className="hover:text-stone-600"
            href={link.href}
            aria-label={link.ariaLabel}
          >
            <Icon name={link.icon} size={28} />
          </a>
        ))}
      </div>
    </header>
  );
};
