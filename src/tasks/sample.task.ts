import { Service } from "typedi"

import { Logger } from "../common/utils/logger.util"
import { REGISTERED_EVENT_TYPE } from "../constant"

@Service(REGISTERED_EVENT_TYPE.SAMPLE_EVENT)
export class SampleTask {
  async execute(payload: any) {
    Logger.info(payload)
  }
}
