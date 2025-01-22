import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center overflow-hidden scrollbar-thin">
      <h2>Not Found</h2>
      <p>This resource is either legacy, myth or unbegun.</p>
      <Link href="/" className="text-gray-500">
        Return Home
      </Link>
    </div>
  );
}
