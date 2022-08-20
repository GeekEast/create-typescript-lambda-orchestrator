import createDebugger from "debug"

const info = createDebugger("worker:info")
const warn = createDebugger("worker:warning")
const error = createDebugger("worker:error")
const test = createDebugger("worker:test")

export const Logger = { error, info, warn, test }
