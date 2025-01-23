import Link from "next/link";

export default function LeftCloud() {
  return (
    <div className="relative border border-gray-300 p-4 rounded-lg w-1/4">
      <h2 className="absolute -top-3 left-2 bg-white px-2 text-sm">
        Left Cloud
      </h2>
      <ul className="space-y-2 text-center">
        <li>
          <Link href="/link1" className="hover:underline">
            Link 1
          </Link>
        </li>
        <li>
          <Link href="/link2" className="hover:underline">
            Link 2
          </Link>
        </li>
        <li>
          <Link href="/link3" className="hover:underline">
            Link 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
