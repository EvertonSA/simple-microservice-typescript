import { PersonStructure } from '@app/user/entity/Person'
import { DateHandler } from '@app/main/usecase/CalendarHandler'

export class PersonValidator {
  public validate (person: PersonStructure): PersonStructure {
    return Object.freeze({
      firstname: this.validateFirstname(person.firstname),
      lastname: this.validateLastname(person.lastname),
      birthday: this.validateBirthday(person.birthday)
    })
  }
  private validateFirstname (firstname: string): string {
    if (!firstname ||
      (firstname.length > 100)) throw new Error('invalid_person_firstname')
    return firstname
  }
  private validateLastname (lastname: string): string {
    if (!lastname ||
      (lastname.length > 100)) throw new Error('invalid_person_lastname')
    return lastname
  }
  private validateBirthday (birthday: string): string {
    if (!DateHandler.isValid(birthday)) throw new Error('invalid_person_birthday')
    return birthday
  }
}
