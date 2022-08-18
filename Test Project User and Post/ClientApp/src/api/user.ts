import axios from "axios";
import { BaseApi } from ".";
import { UserDTO } from "../types/DTOs/UserDTOs/UserDTO";
import { UserViewDTO } from "../types/DTOs/UserDTOs/UserViewDTO";

const userApi = `${BaseApi}/users`
export const GetUsersApi = () =>
    axios.get<UserDTO[]>(userApi);
export const GetUserApi = (id: number) =>
    axios.get<UserViewDTO>(`${userApi}/${id}`);
export const DeleteUserApi = (id: number) =>
    axios.delete(`${userApi}/${id}`);
export const CreateUserApi = (id: number) =>
    axios.post(`${userApi}/${id}`);