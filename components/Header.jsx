import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="whoami">
        <Link href="/">
          <a>
            <div className="image">
              <Image src="/images/pauek.jpg" alt="Pauek's face" width={46} height={46} />
            </div>
            <span className="name">Pau Fernández</span>
          </a>
        </Link>
      </div>
      <div className="social">
        <a
          href="https://youtube.com/paueky"
          className="youtube-icon icon ss-social-circle ss-youtube"
          aria-label="Pauek's YouTube page"
        ></a>
        <a
          href="https://twitter.com/pauek"
          className="twitter-icon icon ss-social-circle ss-twitter"
          aria-label="Pauek's Twitter page"
        ></a>
        <a
          href="https://github.com/pauek"
          className="github-icon icon ss-social-circle ss-octocat"
          aria-label="Pauek's GitHub page"
        ></a>
        <a
          href="https://www.linkedin.com/in/pau-fern%C3%A1ndez-5b7688aa/"
          className="linkedin-icon icon ss-social-circle ss-linkedin"
          aria-label="Pauek's LinkedIn page"
        ></a>
      </div>
    </header>
  );
};
