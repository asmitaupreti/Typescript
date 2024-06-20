//capital make of the file User.ts because we are going to create and export class form this file
// index.ts is small letters because we would use those classes to make something happen

import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      long: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `Username: ${this.name}`;
  }
}
