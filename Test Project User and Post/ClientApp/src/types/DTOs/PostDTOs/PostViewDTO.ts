import { SelectDTO } from "../SelectDTO";

export interface PostViewDTO {
    title: string;
    body: string;
    user: SelectDTO;
}
