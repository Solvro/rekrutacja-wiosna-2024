import {Specialization} from "./specialization"

export interface Developer {
    id: string,
    projectId: string,
    specialization: Specialization
}
