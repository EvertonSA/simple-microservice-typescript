import { ObjectId } from 'bson'
import { Database } from '@app/database/Connect'
import { EntityDelete } from '@app/main/entity/Entity'

export class PersonDelete implements EntityDelete<boolean> {
  public deleteRow (id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject): void => {
      Database.person().then((collection): void => {
        collection.deleteOne({ _id: new ObjectId(id) }, (err, result): void => {
          if (err) reject(err)
          else resolve(true)
        })
      }).catch((err): void => reject(err))
    })
  }
}
