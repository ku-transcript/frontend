import { Button } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#006664] flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-white mb-4">Not Found</h2>
      <p className="text-gray-300 mb-8">
        Sorry, we couldn&apos;t find the requested resource.
      </p>
      <Link href="/">
        <Button type="primary">Return home</Button>
      </Link>
    </div>
  );
}
