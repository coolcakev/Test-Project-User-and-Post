import { SelectDTO } from "../SelectDTO";

export interface PostDTO {
    id: number;
    title: string;
    body: string;
    user: SelectDTO;
}