// Type definitions for gsap-trial modules used in the project
// This file provides minimal typings for gsap-trial plugin imports.

declare module "gsap-trial/SplitText" {
  import { Plugin } from "gsap";

  export class SplitText {
    constructor(targets: gsap.TweenTarget, vars?: gsap.TweenVars);
    revert(): void;
    split(options?: Partial<{ type: "lines" | "words" | "chars" | "lines,words" | "words,chars" | "lines,chars" | "lines,words,chars"; }>): void;

    // Common properties exposed by SplitText instances (used in this project)
    chars?: HTMLElement[];
    words?: HTMLElement[];
    lines?: HTMLElement[];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  export const SplitTextPlugin: Plugin;
  export default SplitText;
}
