// * ===================================== Basics =====================================
export const STAGE = process.env.STAGE
export const REGION = process.env.REGION
// export const REGION_SHORT = process.env.REGION_SHORT

export const isDev = STAGE === "local" || STAGE === undefined || STAGE === ""
export const isTest = STAGE === "test"
export const isOffline = isDev || isTest

export const isQa = STAGE === "qa"
export const isSandbox = STAGE === "sandbox"
export const isProd = STAGE === "product"
export const isOnline = isQa || isSandbox || isProd

export const EVENT_SOURCE = isOffline ? process.env.OFFLINE_EVENT_SOURCE : process.env.EVENT_SOURCE

// * ===================================== Task Keys =====================================
export enum REGISTERED_EVENT_TYPE {
  SAMPLE_EVENT = "SAMPLE_EVENT"
}
