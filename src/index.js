import level from 'level'
import forkdb from 'forkdb'
import forkp from 'forkdb-promise'

class Storage {
  constructor (config) {
    this.db = forkdb(level(config.level), { dir: config.fork })
  }

  get (uri) {
    return forkp.get(this.db, uri)
  }

  put (uri, doc) {
    return forkp.put(this.db, uri, doc)
  }

}

export { Storage as default }
