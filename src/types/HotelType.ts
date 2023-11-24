export interface Hotel {
    id: string;
    name: string;
    address: string;
    city: string;
    country: string;
    rating: string;
}

export enum PageEnum {
    list,
    add,
    edit,
}