import { PersonStructure } from '@app/user/entity/Person'

export class CleanResponse {
  public byPerson (person?: PersonStructure): Promise<PersonStructure> {
    return new Promise<PersonStructure>((resolve, reject): void => {
      try {
        if (person) person.secrectkey = ''
        resolve(person)
      } catch (err) {
        reject(err)
      }
    })
  }
}
