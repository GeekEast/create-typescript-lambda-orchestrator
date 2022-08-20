const { CloudWatchEventsClient, PutEventsCommand } = require("@aws-sdk/client-cloudwatch-events")

const sendEventToLocalEventBridge = async () => {
  const client = new CloudWatchEventsClient({
    endpoint: process.env.OFFLINE_EVENT_BUS_ENDPOINT,
    region: process.env.REGION
  })

  const input = {
    Entries: [
      {
        EventBusName: process.env.OFFLINE_EVENT_BUS_NAME,
        Source: process.env.OFFLINE_EVENT_SOURCE,
        DetailType: "SAMPLE_EVENT",
        Detail: JSON.stringify({ name: "hello world" })
      }
    ]
  }
  const command = new PutEventsCommand(input)
  await client.send(command)
}

sendEventToLocalEventBridge()
