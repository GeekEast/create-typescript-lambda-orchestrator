
# create-typescript-lambda-orchestrator
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2022-08-20-11-42-49.png alt="no image found"></p>


## Customize
- search `create-typescript-lambda-orchestrator` globally and replace with whatever you like as your **project name**
- search `lambda-orchestrator-queue` globally and replace with whatever you like as local **queue name**


## Start
```sh
# install deps
yarn
# start localstack
yarn stack up
# start serverless (lambda function)
yarn dev
# send a test event to eventBus
yarn stack event:send
```

## Register Tasks
- add a new event type in `src/constant.ts` under `REGISTERED_EVENT_TYPE` enum.

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2022-08-20-11-17-20.png alt="no image found"></p>

- add a `<taskName>.task.ts` under `src/tasks` following `sample.task.ts` with the new register event type as the Dependency Injection **Token**.
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2022-08-20-11-17-50.png alt="no image found"></p>

- add `export * from "./<taskName>.task.ts"` in `src/tasks/register.ts`
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2022-08-20-11-18-30.png alt="no image found"></p>

- If you want to send a local event to test, please update `DetailType: "SAMPLE_EVENT"` in `local/sendEvent.js` to the new registered event type.
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2022-08-20-11-19-16.png alt="no image found"></p>