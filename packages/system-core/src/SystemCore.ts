import { EventEmitter } from './utils/EventEmitter'

class SystemCore extends EventEmitter {
  constructor() {
    super()
  }
}

const core = new SystemCore()
export { core as SystemCore }
