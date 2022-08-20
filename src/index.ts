import "reflect-metadata"
import "./tasks/register"

import { SQSEvent, SQSHandler } from "aws-lambda"

import { handleEvent } from "./task.handler"

export const handler: SQSHandler = async (event: SQSEvent) => {
  const records = event.Records || []
  await Promise.all(records.map(async (record) => handleEvent(record)))
}
