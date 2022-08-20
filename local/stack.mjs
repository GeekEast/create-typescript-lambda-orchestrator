const { sleep } = require('zx');

const up = async () => {
  await $`docker-compose -f docker-compose.local.yml --env-file .env.local up -d`;
  await sleep(2000);
  await $`awslocal sqs create-queue --queue-name ${process.env.OFFLINE_QUEUE_NAME}`;
  await $`awslocal sqs get-queue-attributes --queue-url http://localhost:4566/000000000000/${process.env.OFFLINE_QUEUE_NAME} --attribute-names QueueArn`;
  await sleep(3000);
};

const down = async () => {
  await $`docker-compose -f docker-compose.local.yml --env-file .env.local down`;
};

const sendEvent = async () => {
  await $`env-cmd -f .env.local node ./local/sendEvent.js`;
};

if (argv._.length > 1) {
  const mode = argv._.pop();
  switch (mode) {
    case 'up':
      await up();
      break;
    case 'down':
      await down();
      break;
    case 'event:send':
      await sendEvent();
      break;
    default:
      break;
  }
}
