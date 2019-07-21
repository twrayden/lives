declare function lives(attempt: () => any): boolean;

declare namespace lives {
  function not(attempt: () => any): boolean;
  function get(attempt: () => any): any;
  function or(attempt: () => any, fallback: any): any;
  function is(attempt: () => any, type: string): boolean;
  function key(target: any, key: string): boolean;
}

export = lives;
