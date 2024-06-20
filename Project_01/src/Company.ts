import { faker } from '@faker-js/faker'

export class Company {
  name: string
  catchPhrase: string
  location: {
    lat: number
    long: number
  }

  constructor() {
    this.name = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: Number(faker.address.latitude()),
      long: Number(faker.address.longitude()),
    }
  }
}
