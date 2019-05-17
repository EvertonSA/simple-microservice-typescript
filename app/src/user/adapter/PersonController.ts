import { ControllerRead } from '@app/main/adapter/Controller'
import { PersonRead } from '@app/user/entity/PersonRead'
import { PersonStructure } from '@app/user/entity/Person'
import { CleanResponse } from '@app/user/usecase/CleanResponse'
import { PersonValidator } from '@app/user/usecase/PersonValidator'

export class PersonController implements ControllerRead<PersonStructure, PersonStructure> {
  public find (params: PersonStructure): Promise<PersonStructure> {
    return new Promise<PersonStructure>(async (resolve, reject): Promise<void> => {
      const platform = (new PersonValidator()).validate(params);
      (new PersonRead()).findRowByPerson(platform)
        .then((new CleanResponse()).byPerson)
        .then((result: PersonStructure): void => resolve(result))
        .then((err): void => reject(err))
    })
  }
}
