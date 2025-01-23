import LeftCloud from "./components/left-cloud";
import RightCloud from "./components/right-cloud";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-center w-full max-w-screen-xl px-4">
        <div className="flex-1"></div>
        <RightCloud />
        <div className="w-1/4"></div>
        <LeftCloud />
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
