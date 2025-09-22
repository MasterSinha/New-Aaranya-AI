import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number; // ms per char
}

export default function Typewriter({ text, speed = 35 }: Props) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay((d) => d + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span className="relative">
      {display}
      <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 align-middle bg-emerald-300 animate-caret" />
    </span>
  );
}
