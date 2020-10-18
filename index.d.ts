declare module "@fto/relative-time" {
  export function getRelativeTime(mills: Number, units?: { [key: string]: number }): String;
}