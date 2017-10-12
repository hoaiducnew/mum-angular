export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    condition: Condition;
    category: string;
}

export enum Condition {
    New,
    Used,
    Discontinued
}