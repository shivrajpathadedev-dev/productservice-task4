import { Injectable } from '@angular/core';
import { Iproduct, IproductRes } from '../model/product';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  editproduct$:Subject<Iproduct>=new Subject()
ProductArr: Array<Iproduct> = [
  {
    id: "l101",
    title: "Dell Inspiron 15",
    price: 55999,
    description: "Intel Core i5 laptop with 16GB RAM",
    category: "Laptop",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    id: "l102",
    title: "HP Pavilion",
    price: 62999,
    description: "Powerful laptop for students and professionals",
    category: "Laptop",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    id: "l103",
    title: "Lenovo IdeaPad Slim 5",
    price: 58999,
    description: "Lightweight laptop with Ryzen processor",
    category: "Laptop",
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    id: "l104",
    title: "ASUS VivoBook",
    price: 49999,
    description: "Stylish laptop with Full HD display",
    category: "Laptop",
    image: "https://picsum.photos/300/200?random=4"
  },
  {
    id: "l105",
    title: "Acer Aspire 7",
    price: 64999,
    description: "Gaming and multitasking laptop",
    category: "Laptop",
    image: "https://picsum.photos/300/200?random=5"
  }
];
  constructor(
  ) { }

  fetchproduct():Observable<Iproduct[]>{
    return of(this.ProductArr)
  }

  createproduct(pro:Iproduct):Observable<IproductRes>{
     this.ProductArr.push(pro)
     let res={
      msg:``,
      data:pro
     }
     return of(res)
  }

   removepost(remove:string): Observable<IproductRes> {
  let get_index = this.ProductArr.findIndex(t => t.id === remove);
  let removepro = this.ProductArr.splice(get_index, 1);

  return of({
    msg: `The product ${removepro[0].title} is removed successfully!!!`,
    data: removepro[0]
  })
  }

  updatepro(update:Iproduct){
    let get_index=this.ProductArr.findIndex(t=>t.id===update.id)
    this.ProductArr[get_index]=update

    return of({
      msg:`the product ${update.title} is updated successfully!!!`,
      data:update
    })
  }
}



