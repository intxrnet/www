"use client";

import { useState } from "react";
import Searchbar from "./components/searchbar";
import LeftCloud from "./components/left-cloud";
import RightCloud from "./components/right-cloud";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterItems = (items, query) => {
    if (!query) return items;
    return items.filter(
      (item) =>
        item.text.toLowerCase().includes(query.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const renderCloud = (CloudComponent, title, items) => {
    const filteredItems = filterItems(items, searchQuery);
    if (filteredItems.length === 0) return null;
    return <CloudComponent title={title} items={filteredItems} />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Searchbar onSearch={handleSearch} />
      <div className="flex flex-1">
        <div className="w-1/2 flex flex-col items-end p-4 space-y-4">
          {renderCloud(LeftCloud, "ideation", [
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
          ])}
          {renderCloud(LeftCloud, "clipboard", [
            {
              text: "to txt",
              description: "save snippet as plain text",
            },
            {
              text: "to img",
              description: "capture clipboard into an image",
            },
          ])}
          {renderCloud(LeftCloud, "text", [
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
            {
              text: "reading difficulty",
              description: "use popular formulas to gauge readability",
            },
            {
              text: "text to speech",
              description: "convert your text to audio locally",
            },
            {
              text: "reverse text",
              description: "mirror your text for fun or obfuscation",
            },
          ])}
          {renderCloud(LeftCloud, "code", [
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
            {
              text: "obfuscate",
              description: "scramble your code for distribution",
            },
            {
              text: "lint",
              description: "basic code linting to maintain style consistency",
            },
            {
              text: "dependency graph",
              description: "visualize code modules as a dependency tree",
            },
          ])}
          {renderCloud(LeftCloud, "img", [
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
              text: "censor",
              description: "obfuscate faces and sensitive data",
            },
            {
              text: "convert to base64",
              description: "embed images directly into code",
            },
            {
              text: "qr and barcodes",
              description: "generate and scan",
            },
            {
              text: "ascii art generator",
              description: "turn images into ASCII text art",
            },
            {
              text: "steganography",
              description: "hide secret messages inside images",
            },
          ])}
          {renderCloud(LeftCloud, "health", [
            {
              text: "nutrition score",
              description: "find out food quality",
            },
            {
              text: "hydration reminder",
              description: "get gentle nudges to stay hydrated",
            },
            {
              text: "breathe",
              description: "find peace",
            },
          ])}
          {renderCloud(LeftCloud, "audio", [
            {
              text: "voice recorder",
              description: "record audio directly in your browser",
            },
            {
              text: "audio visualizer",
              description: "generate waveforms from mic input",
            },
            {
              text: "pitch analyzer",
              description: "identify musical pitch locally",
            },
            {
              text: "soundboard",
              description: "trigger and combine local sound effects",
            },
            {
              text: "white noise generator",
              description: "relaxing background sounds on demand",
            },
          ])}
          {renderCloud(LeftCloud, "pdf", [
            {
              text: "merge pdf",
              description: "combine multiple PDFs client-side",
            },
            {
              text: "split pdf",
              description: "separate pages into multiple PDFs",
            },
            {
              text: "pdf compress",
              description: "reduce size without online services",
            },
            {
              text: "pdf to text",
              description: "extract text from PDFs locally",
            },
            {
              text: "sign pdf",
              description: "draw e-signatures in your browser",
            },
            {
              text: "pdf metadata editor",
              description: "modify PDF properties offline",
            },
          ])}
        </div>

        <div className="w-1/2 flex flex-col items-start p-4 space-y-4">
          {renderCloud(RightCloud, "hardware", [
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
            {
              text: "ram test",
              description: "simulate memory stress locally",
            },
            {
              text: "browser sensor data",
              description: "show accelerometer & gyroscope data",
            },
          ])}
          {renderCloud(RightCloud, "network", [
            {
              text: "ip",
              description: "find your public ip",
            },
            {
              text: "password",
              description: "generate secure passwords",
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
            {
              text: "encoding",
              description: "convert between formats",
            },
            {
              text: "encryption",
              description: "encrypt and decrypt data",
            },
            {
              text: "network speed",
              description: "quick local speed test (no external servers)",
            },
          ])}
          {renderCloud(RightCloud, "ux", [
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
          ])}
          {renderCloud(RightCloud, "web", [
            {
              text: "domain name generator",
              description: "find the perfect domain name",
            },
            {
              text: "open graph viewer",
              description: "test previews",
            },
            {
              text: "open graph generator",
              description: "create previews",
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
            {
              text: "html playground",
              description: "quickly test html",
            },
            {
              text: "javascript playground",
              description: "quickly test javascript code",
            },
            {
              text: "react component test",
              description: "quickly play with react components",
            },
            {
              text: "pwa generator",
              description: "create a basic manifest for progressive web apps",
            },
          ])}
          {renderCloud(RightCloud, "mobile", [
            {
              text: "layouts",
              description: "find optimal screen arrangement",
            },
            {
              text: "device orientation",
              description: "simulate different phone rotations",
            },
          ])}
          {renderCloud(RightCloud, "gaming", [
            {
              text: "reaction time test",
              description: "measure your reflexes locally",
            },
            {
              text: "aim trainer",
              description: "improve your precision and speed",
            },
            {
              text: "typing speed test",
              description: "evaluate words-per-minute & accuracy",
            },
            {
              text: "click speed test",
              description: "how many clicks can you do in a second?",
            },
            {
              text: "visual memory game",
              description: "strengthen your memory with random patterns",
            },
          ])}
          {renderCloud(RightCloud, "benchmark", [
            {
              text: "canvas stress test",
              description: "push your GPU to its limits using canvas",
            },
            {
              text: "cpu stress test",
              description: "local CPU calculations to gauge performance",
            },
            {
              text: "webgl benchmark",
              description: "test your browser's 3D rendering capabilities",
            },
            {
              text: "memory leak test",
              description: "monitor app memory usage in real time",
            },
            {
              text: "fps meter",
              description: "continuously display frames per second",
            },
          ])}
        </div>
      </div>
    </div>
  );
}
