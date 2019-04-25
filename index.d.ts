declare function lives(attempt: () => any): boolean;

declare namespace lives {
  function get(attempt: () => any): any;
  function or(attempt: () => any, fallback: any): any;
}

export = lives;
