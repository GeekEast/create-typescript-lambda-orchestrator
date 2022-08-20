export interface Executable {
  execute: (payload: any) => Promise<void>
}
