type Messages = typeof import("./messages/en-GB/common.json") &
  typeof import("./messages/en-GB/app.json");

declare interface IntlMessages extends Messages {}
