import Link from "next/link";

interface CloudItem {
  text: string;
}

interface LeftCloudProps {
  title: string;
  items: CloudItem[];
}

export default function LeftCloud({ title, items }: LeftCloudProps) {
  const titleLink = `https://${title}.intxr.net`;

  const formatHref = (text: string): string => {
    return `${titleLink}/${text.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <div className="relative border border-gray-300 p-4 rounded-lg w-1/2">
      <Link
        href={titleLink}
        className="absolute -top-3 right-2 bg-white px-2 text-sm hover:underline"
      >
        {title}
      </Link>
      <ul className="space-y-2 text-center">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={formatHref(item.text)} className="hover:underline">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
