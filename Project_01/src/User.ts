//capital make of the file User.ts because we are going to create and export class form this file
// index.ts is small letters because we would use those classes to make something happen

import { faker } from '@faker-js/faker'

export class User {
  name: string
  location: {
    lat: number
    long: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: Number(faker.address.latitude()),
      long: Number(faker.address.longitude()),
    }
  }
}
