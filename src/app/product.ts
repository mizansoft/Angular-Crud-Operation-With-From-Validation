export class Product {

    pId?: number;
    pName?: string;
    pStock?: number;
    pPrice?: number;
    pDiscount?: number;


    constructor(pId?: number, pName?: string, pStock?: number, pPrice?: number,pDiscount?:number) {
        this.pId = pId;
        this.pName = pName;
        this.pStock = pStock;
        this.pPrice = pPrice;
        this.pDiscount = pDiscount;
    }
}
