import { SelectDTO } from "../SelectDTO";

export interface UserViewDTO{
    fullName:string,
    username:string,
    phone:string,
    website:string,
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    postset:SelectDTO[],
}