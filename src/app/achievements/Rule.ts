export interface Rule {
  handle(any): boolean;
  execute(any, any): boolean;
}
