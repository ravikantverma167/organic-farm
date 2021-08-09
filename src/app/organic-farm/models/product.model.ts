export class Product {

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

    constructor(obj?: any) {
        obj = obj || {};

        this.pic = obj.pic;
        this.name = obj.name;
        this.dimension = obj.dimension;
        this.price = obj.price;
        if(obj.category){
            this.category = obj.category;
        }
        this.description = obj.description;
    }
}