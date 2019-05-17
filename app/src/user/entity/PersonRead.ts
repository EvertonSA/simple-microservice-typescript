import { ObjectId } from 'bson'
import { Database } from '@app/database/Connect'
import { EntityRead } from '@app/main/entity/Entity'
import { PersonStructure } from '@app/user/entity/Person'

export class PersonRead implements EntityRead<PersonStructure, PersonStructure> {
  public findAll (options?: PersonStructure): Promise<PersonStructure[]> {
    return new Promise<PersonStructure[]>((resolve, reject): void => {
      Database.person().then((collection): void => {
        collection.find(options).toArray((err, result): void => {
          if (err) reject(err)
          else resolve(result)
        })
      }).catch((err): void => reject(err))
    })
  }
  public findRow (_id: string): Promise<PersonStructure> {
    return new Promise<PersonStructure>((resolve, reject): void => {
      Database.person().then((collection): void => {
        collection.findOne({ _id: new ObjectId(_id) }, (err, result): void => {
          if (err) reject(err)
          else resolve(result)
        })
      }).catch((err): void => reject(err))
    })
  }
}
