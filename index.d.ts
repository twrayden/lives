declare function lives(attempt: () => any): boolean;

declare namespace lives {
  export function get(attempt: () => any): any;
  export function or(attempt: () => any, fallback: any): any;
}

export = lives;
