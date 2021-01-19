import { NumberValueAccessor } from "@angular/forms";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
}
