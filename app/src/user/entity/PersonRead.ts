import { ObjectId } from 'bson'
import { Database } from '@app/database/Connect'
import { EntityRead } from '@app/main/entity/Entity'
import { PersonStructure } from '@app/user/entity/Person'
import { IdentifyStructure } from '@app/user/entity/Identify'

export class PersonRead implements EntityRead<IdentifyStructure, PersonStructure> {
  public findAll (options?: IdentifyStructure): Promise<PersonStructure[]> {
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
  public findRowByIdentify (options: IdentifyStructure): Promise<PersonStructure> {
    return new Promise<PersonStructure>((resolve, reject): void => {
      Database.person().then((collection): void => {
        collection.findOne({ identify: options }, (err, result): void => {
          if (err) reject(err)
          else resolve(result)
        })
      }).catch((err): void => reject(err))
    })
  }
}
