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
            { text: "Calculator", href: "/tools/calculator" },
            { text: "Converter", href: "/tools/converter" },
            { text: "Notepad", href: "/tools/notepad" },
          ]}
        />
        <LeftCloud
          title="Resources"
          items={[
            { text: "Documentation", href: "/resources/docs" },
            { text: "Tutorials", href: "/resources/tutorials" },
            { text: "Tutorials", href: "/resources/tutorials" },
            { text: "Tutorials", href: "/resources/tutorials" },
            { text: "Tutorials", href: "/resources/tutorials" },
            { text: "Tutorials", href: "/resources/tutorials" },
            { text: "Tutorials", href: "/resources/tutorials" },
            { text: "Tutorials", href: "/resources/tutorials" },
            { text: "FAQ", href: "/resources/faq" },
          ]}
        />
      </div>

      {/* Right half */}
      <div className="w-1/2 flex flex-col items-start p-4 space-y-4">
        <RightCloud
          title="Community"
          items={[
            { text: "Forum", href: "/community/forum" },
            { text: "Chat", href: "/community/chat" },
            { text: "Events", href: "/community/events" },
          ]}
        />
        <RightCloud
          title="About"
          items={[
            { text: "Team", href: "/about/team" },
            { text: "Mission", href: "/about/mission" },
            { text: "Contact", href: "/about/contact" },
          ]}
        />
      </div>
    </div>
  );
}
