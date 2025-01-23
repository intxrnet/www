import Link from "next/link";

interface CloudItem {
  text: string;
  href: string;
}

interface RightCloudProps {
  title: string;
  items: CloudItem[];
}

export default function RightCloud({ title, items }: RightCloudProps) {
  const titleLink = `https://${title}.intxr.net`;

  return (
    <div className="relative border border-gray-300 p-4 rounded-lg w-1/2">
      <Link
        href={titleLink}
        className="absolute -top-3 left-2 bg-white px-2 text-sm hover:underline"
      >
        {title}
      </Link>
      <ul className="space-y-2 text-center">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:underline">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
