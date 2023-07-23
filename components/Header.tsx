import Image from "next/image";
import Link from "next/link";
import IconYouTube from "./icons/IconYouTube";
import IconTwitter from "./icons/IconTwitter";
import IconGitHub from "./icons/IconGitHub";
import IconLinkedIn from "./icons/IconLinkedIn";

export const Header = () => {
  return (
    <header className="flex flex-row items-end border-b">
      <Link href="/" className="flex flex-row items-center -mb-1">
        <Image
          className="rounded-full mr-2"
          src="/images/pauek.jpg"
          alt="Pauek's face"
          width={42}
          height={42}
        />
        <span className="name">Pau Fernández</span>
      </Link>
      <div className="flex-1" />
      <div className="flex flex-row items-center pb-1 gap-1.5 text-stone-300">
        <a href="https://youtube.com/paueky" aria-label="Pauek's YouTube page">
          <IconYouTube />
        </a>
        <a href="https://twitter.com/pauek" aria-label="Pauek's Twitter page">
          <IconTwitter />
        </a>
        <a href="https://github.com/pauek" aria-label="Pauek's GitHub page">
          <IconGitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/pauek/"
          aria-label="Pauek's LinkedIn page"
        >
          <IconLinkedIn />
        </a>
      </div>
    </header>
  );
};
