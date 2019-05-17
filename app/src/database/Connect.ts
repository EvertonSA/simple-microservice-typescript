import { Collection } from 'mongodb'
import { Database as Db } from '@app/main/driver/MongoDB'

import person = require('@app/database/person.json')

export class Database {
  public static seed (): void {
    Database.user().catch((err): void => console.error(err))
  }
  public static user (): Promise<Collection> {
    return new Promise<Collection>((resolve, reject): void => {
      Db.collection('user', `person`, person)
        .then((collection): void => resolve(collection))
        .catch((err): void => reject(err))
    })
  }
}
