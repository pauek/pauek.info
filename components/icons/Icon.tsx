import IconGitHub from "./IconGitHub";
import IconLinkedIn from "./IconLinkedIn";
import IconTwitter from "./IconTwitter";
import IconYouTube from "./IconYouTube";

export default function Icon({ name, size }: { name: string; size: number }) {
  switch (name) {
    case "github":
      return <IconGitHub size={size} />;
    case "linkedin":
      return <IconLinkedIn size={size} />;
    case "twitter":
      return <IconTwitter  size={size} />;
    case "youtube":
      return <IconYouTube  size={size} />;
    default:
      return (
        <div className="text-red-500">Icon &quot;{name}&quot; not found!</div>
      );
  }
}
