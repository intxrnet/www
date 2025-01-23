import LeftCloud from "./components/left-cloud";
import RightCloud from "./components/right-cloud";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left half */}
      <div className="w-1/2 flex flex-col items-end p-4 space-y-4">
        <LeftCloud
          title="Tools"
          items={[
            { text: "Calculator" },
            { text: "Converter" },
            { text: "Notepad" },
          ]}
        />
        <LeftCloud
          title="Resources"
          items={[
            { text: "Documentation" },
            { text: "Tutorials asdasd" },
            { text: "Tutorials" },
            { text: "Tutorials" },
            { text: "Tutorials" },
            { text: "Tutorials" },
            { text: "Tutorials" },
            { text: "Tutorials" },
            { text: "FAQ" },
          ]}
        />
      </div>

      {/* Right half */}
      <div className="w-1/2 flex flex-col items-start p-4 space-y-4">
        <RightCloud
          title="Community"
          items={[{ text: "Forum" }, { text: "Chat" }, { text: "Events" }]}
        />
        <RightCloud
          title="About"
          items={[{ text: "Team" }, { text: "Mission" }, { text: "Contact" }]}
        />
      </div>
    </div>
  );
}
