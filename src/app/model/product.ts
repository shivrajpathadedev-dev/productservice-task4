

export interface Iproduct{
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface IproductRes{
    msg:string;
    data:Iproduct;
}
