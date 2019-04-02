declare function lives(attempt: () => any): boolean;

declare namespace lives {
  function get(attempt: () => any): any;
}

export = lives;
