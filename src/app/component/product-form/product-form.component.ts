import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
isInEditMode:boolean=false
editProduct!:Iproduct
@ViewChild('ProductForm') ProductForm!:NgForm
  constructor(
    private _snackbar:SnackbarService,
    private _productservice:ProductService
  ) { }

  ngOnInit(): void {
    this.onedit()
  }

  onproductsubmit(){
   if(this.ProductForm.valid){
    let add_Obj={
      ...this.ProductForm.value,
       id:Date.now().toString()
    }
    this._productservice.createproduct(add_Obj)
    .subscribe({
      next:data=>{
        this.ProductForm.reset()
        this._snackbar.opensnackbar(data.msg)
      },
      error:err=>{
      this._snackbar.opensnackbar(err)
      }
    })
   }
  }

onedit(){
  this._productservice.editproduct$.subscribe({
    next:data=>{
    this.editProduct=data
    this.isInEditMode=true
    this.ProductForm.form.patchValue(data)
    }
  })
}

  onUpdate(){
   if(this.ProductForm.valid){
    let upd_obj={
      ...this.ProductForm.value,
      id:this.editProduct.id
    }
    this._productservice.updatepro(upd_obj)
    this.ProductForm.reset()
    this.isInEditMode=false
   }
  }
}
