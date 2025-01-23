import LeftCloud from "./components/left-cloud";
import RightCloud from "./components/right-cloud";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col items-end p-4 space-y-4">
        <LeftCloud
          title="ideation"
          items={[
            {
              text: "vocab",
              description: "expand word choices through meaningful randomness",
            },
            {
              text: "grammar",
              description: "refine sentences quickly with precise checks",
            },
            {
              text: "creative notepad",
              description:
                "write in structured sections, hush distractions with a gentle blur",
            },
            {
              text: "brainstorming canvas",
              description:
                "map tasks visually, link ideas, and forge clear workflow paths",
            },
            {
              text: "mind map",
              description: "divide and conquer ideas",
            },
          ]}
        />
        <LeftCloud
          title="clipboard"
          items={[
            {
              text: "to txt",
              description: "save snippet as plain text",
            },
            {
              text: "to img",
              description: "capture clipboard into an image",
            },
          ]}
        />
        <LeftCloud
          title="text"
          items={[
            {
              text: "compare",
              description: "see changes side by side",
            },
            {
              text: "cross compare",
              description: "examine between different formats",
            },
            {
              text: "regex",
              description: "hunt patterns with precision",
            },
            {
              text: "strip",
              description: "convert language to plain text",
            },
          ]}
        />
        <LeftCloud
          title="code"
          items={[
            {
              text: "minify",
              description: "shrink code for efficiency",
            },
            {
              text: "format",
              description: "tidy up for clarity",
            },
            {
              text: "compare",
              description: "highlight code differences",
            },
          ]}
        />
        <LeftCloud
          title="img"
          items={[
            {
              text: "convert",
              description: "shift between formats easily",
            },
            {
              text: "scrub",
              description: "wipe metadata clean",
            },
          ]}
        />
      </div>

      <div className="w-1/2 flex flex-col items-start p-4 space-y-4">
        <RightCloud
          title="UX"
          items={[
            {
              text: "colors",
              description: "find your color palette",
            },
            {
              text: "fonts",
              description: "explore typeface combinations",
            },
            {
              text: "icons",
              description: "explore icon packs combinations",
            },
            {
              text: "svg blobs",
              description: "fluid shapes",
            },
            {
              text: "svg hero patterns",
              description: "repeatable vector designs",
            },
            {
              text: "svg noise",
              description: "static grains",
            },
          ]}
        />
        <RightCloud
          title="web"
          items={[
            {
              text: "layouts",
              description: "brainstorm flex and grid layouts",
            },
            {
              text: "palettes",
              description: "find novel color matches",
            },
            {
              text: "cursors",
              description: "test custom pointers, add playful interactivity",
            },
            {
              text: "domains",
              description: "find the perfect domain name",
            },
          ]}
        />
        <RightCloud
          title="mobile"
          items={[
            {
              text: "layouts",
              description: "find optimal screen arrangement",
            },
          ]}
        />
      </div>
    </div>
  );
}
