import "react";

type Messages = typeof import("./messages/en-GB/common.json") &
  typeof import("./messages/en-GB/app.json");

declare interface IntlMessages extends Messages {}

declare module "react" {
  let __webpack_public_path__: string;
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
