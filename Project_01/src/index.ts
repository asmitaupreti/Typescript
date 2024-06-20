import { User } from "./User";
// import { Company } from './Company'
import { CustomMap } from "./CustomMap";
// const u = new User()
// const c = new Company()
// console.log(u)
// console.log(c)
const user = new User();
const customMap = new CustomMap("map");

customMap.addMarker(user);
