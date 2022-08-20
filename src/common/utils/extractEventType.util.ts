import { EVENT_SOURCE } from "../../constant"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractEventType = (body: Record<string, any>): string => {
  const source = body["source"]
  // will ignore events sent from other service than org
  if (source !== EVENT_SOURCE) return null

  const eventType = body["detail-type"]
  return eventType
}
