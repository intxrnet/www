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
              text: "essay quality",
              description: "quantitative feedback on writing",
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
              text: "stats",
              description: "counts, frequencies, and more",
            },
            {
              text: "compare",
              description: "see changes side by side",
            },
            {
              text: "cross compare",
              description: "examine between different formats",
            },
            {
              text: "boilerplate",
              description: "more than just lorem ipsum",
            },
            {
              text: "dyslexic convert",
              description: "bionisation for dyslexic readers",
            },
            {
              text: "regex",
              description: "hunt patterns with precision",
            },
            {
              text: "strip",
              description: "convert language to plain text",
            },
            {
              text: "switch case",
              description: "toggle between different letter cases",
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
            {
              text: "editor and filter",
              description: "adjust images on the fly",
            },
            {
              text: "color picker",
              description: "find that hue",
            },
            {
              text: "sensor",
              description: "obfuscate faces and sensitive data",
            },
            {
              text: "convert to base64",
              description: "embed images directly into code",
            },
          ]}
        />
        <LeftCloud
          title="health"
          items={[
            {
              text: "nutrition score",
              description: "find out food quality",
            },
          ]}
        />
      </div>

      <div className="w-1/2 flex flex-col items-start p-4 space-y-4">
        <RightCloud
          title="hardware"
          items={[
            {
              text: "display gamuts",
              description: "compare monitor color spaces",
            },
            {
              text: "screen stats",
              description: "measure screen dimensions",
            },
            {
              text: "browser data",
              description: "check browser leak",
            },
            {
              text: "keyboard",
              description: "check key rollover",
            },
            {
              text: "mouse",
              description: "test mouse accuracy and calibration",
            },
            {
              text: "speaker",
              description: "check audio quality",
            },
            {
              text: "webcam",
              description: "check video quality",
            },
          ]}
        />
        <RightCloud
          title="network"
          items={[
            {
              text: "ip",
              description: "find your public ip",
            },
            {
              text: "vpn test",
              description: "check your vpn",
            },
            {
              text: "trace-route",
              description: "find network path",
            },
            {
              text: "api test",
              description: "test api endpoints",
            },
          ]}
        />
        <RightCloud
          title="ux"
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
              text: "svg textures",
              description: "static textures and grains",
            },
          ]}
        />
        <RightCloud
          title="web"
          items={[
            {
              text: "domain name-gen",
              description: "find the perfect domain name",
            },
            {
              text: "open graph",
              description: "test previews",
            },
            {
              text: "layouts",
              description: "brainstorm flex and grid layouts",
            },
            {
              text: "grainy gradients",
              description: "find perfect grain blend",
            },
            {
              text: "css templates",
              description: "basic css templates",
            },
            {
              text: "spline functions",
              description: "test bezier curves",
            },
            {
              text: "skeuomorphism",
              description: "",
            },
            {
              text: "neumorphism",
              description: "",
            },
            {
              text: "glassmorphism",
              description: "",
            },
            {
              text: "material design",
              description: "",
            },
            {
              text: "css shapes",
              description: "",
            },
            {
              text: "shadow generator",
              description: "",
            },
            {
              text: "cursors",
              description: "test custom pointers, add playful interactivity",
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
