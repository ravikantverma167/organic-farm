
 export class Category {

    pic: {
        url: string;
    };
    name: string;

    constructor(obj?: any) {
        obj = obj || {};

        this.pic = obj.pic;
        this.name = obj.name;
    }
}