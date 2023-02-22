import { UserType } from "../../../shared/api";

export type UpdateUserBodyType = Partial<Pick<UserType, "about" | "name" | "avatar">>;
