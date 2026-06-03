import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
productarr:Array<Iproduct>=[]
editpro!:Iproduct
  constructor(
    private _matDilaog:MatDialog,
    private _snackbar:SnackbarService,
    private _productservice:ProductService
  ) { }

  ngOnInit(): void {
    this._productservice.fetchproduct()
    .subscribe({
      next:data=>{
        this.productarr=data
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  trackByFun(index:string,item:Iproduct){
    return item.id
  }

onremove(removeproduct:string){
let matconfig=new MatDialogConfig()
matconfig.width='400px',
matconfig.disableClose=true,
matconfig.data=`The product  is removed successfully!!!`
let newconfig=this._matDilaog.open(GetConfirmComponent,matconfig)
newconfig.afterClosed()
.subscribe(res=>{
  if(res){
    this._productservice.removepost(removeproduct)
    .subscribe({
      next:data=>{
        this._snackbar.opensnackbar(data.msg)
      },
      error:err=>{
        this._snackbar.opensnackbar(err)
      }
    })
  }
})

}

  onEdit(editprod:Iproduct){
this._productservice.editproduct$.next(editprod)
  }

  

}
