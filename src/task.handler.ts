import { SQSRecord } from "aws-lambda"
import Container from "typedi"

import { Executable } from "./common/interfaces/executable.interface"
import { extractEventPayload } from "./common/utils/extractEventPayload.util"
import { extractEventType } from "./common/utils/extractEventType.util"
import { Logger } from "./common/utils/logger.util"

export const handleEvent = async (event: SQSRecord) => {
  const eventPayload = extractEventPayload(event)
  const eventType = extractEventType(eventPayload)
  if (!eventType) return

  const executeTaskInstance = Container.get<Executable>(eventType)
  if (!executeTaskInstance) {
    Logger.warn(`No executable found for event type: ${eventType}`)
    return
  }

  try {
    await executeTaskInstance.execute(eventPayload)
  } catch (error) {
    Logger.error(error)
    throw error
  }
}
