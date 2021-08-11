export class Product {
    id : number;

    pic: {
        url: string;
    };
    name: string;
    dimension: {
        value: number;
        unit: string;
    };
    price: {
        value: number;
        currency: string;
    };
    category?: string;
    description?: string;

    selectedQuantity?: number;

    constructor(obj?: any) {
        obj = obj || {};
        
        this.id = obj.id;

        this.pic = {
            url: obj.pic || obj.pic_url
        }
        this.name = obj.name;
        this.dimension = obj.dimension;
        this.price = {
            value: obj.price_value,
            currency: obj.price_currency,
        }
        this.dimension = {
            value: obj.dimension_value,
            unit: obj.dimension_unit
        }
        if (obj.category) {
            this.category = obj.category;
        }
        this.description = obj.description;
    }
}