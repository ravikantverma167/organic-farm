
export class Category {

    pic_url: string;
    name: string;

    constructor(obj?: any) {
        obj = obj || {};

        this.pic_url = obj.pic_url;
        this.name = obj.name;
    }
}