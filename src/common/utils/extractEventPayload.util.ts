import { SQSRecord } from "aws-lambda"

export const extractEventPayload = (event: SQSRecord) => {
  return JSON.parse(event.body)
}
