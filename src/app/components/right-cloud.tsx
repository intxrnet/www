import Link from "next/link";

export default function RightCloud() {
  return (
    <div className="relative border border-gray-300 p-4 rounded-lg w-1/4">
      <h2 className="absolute -top-3 right-2 bg-white px-2 text-sm">
        Right Cloud
      </h2>
      <ul className="space-y-2 text-center">
        <li>
          <Link href="/link4" className="hover:underline">
            Link 4
          </Link>
        </li>
        <li>
          <Link href="/link5" className="hover:underline">
            Link 5
          </Link>
        </li>
        <li>
          <Link href="/link6" className="hover:underline">
            Link 6
          </Link>
        </li>
      </ul>
    </div>
  );
}
