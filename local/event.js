const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs")
// const createDebugger = require('debug');

/**
 * used to send event from eventBridge to sqs
 */
const sendToSQS = async (event) => {
  // const sqsInfo = createDebugger('local:sqsConnectorLog');
  // sqsInfo(`local sqs: ${JSON.stringify(event, null, 2)}`);
  const client = new SQSClient({
    region: process.env.REGION,
    endpoint: process.env.LOCALSTACK_EDGE_ENDPOINT
  })
  const input = {
    QueueUrl: process.env.OFFLINE_QUEUE_URL,
    MessageBody: JSON.stringify(event)
  }
  const command = new SendMessageCommand(input)
  await client.send(command)
}

/**
 * used to log the events from eventBridge
 */
const eventBridgeLogger = async (event) => {
  // const eventInfo = createDebugger('local:eventBridgeLog');
  // eventInfo(`Eventbridge: ${JSON.stringify(event, null, 2)}`);
  return { statusCode: 200, body: JSON.stringify(event) }
}

module.exports = { sendToSQS, eventBridgeLogger }
