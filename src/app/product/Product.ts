export class Product {
    name: string;
    description: string;
    priceOptions: PriceOptions[];
    addOns: Addon[];
}

export class PriceOptions{
    size: string;
    price: number;
}

export class Addon{
    addOnDescription: string; 
    addOnPrice: number;
    addOnOptions: string[];
}
