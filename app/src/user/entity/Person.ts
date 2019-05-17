import { PersonValidator } from '@app/user/usecase/PersonValidator';

export interface PersonStructure {
  firstname: string;
  lastname: string;
  birthday: string;
}

export class Person implements PersonStructure {
  public readonly firstname: string;
  public readonly lastname: string;
  public readonly birthday: string;
  public constructor (person: PersonStructure) {
    const {
      firstname,
      lastname,
      birthday
    } = (new PersonValidator()).validate(person)
    this.firstname = firstname
    this.lastname = lastname
    this.birthday = birthday
  }
}
