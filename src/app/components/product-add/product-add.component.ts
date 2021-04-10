import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(private toastrService:ToastrService, private formBuilder:FormBuilder,private productService:ProductService) { }
  
  ngOnInit(): void {
    this.crateProductAddForm();
  }
  crateProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }
  add(){
    if (this.productAddForm.valid) {
    let productModel = Object.assign({},this.productAddForm.value)
    this.productService.add(productModel).subscribe(response=>{
      console.log(response);
      this.toastrService.success(response.message,"Basarili");
    },responseError=>{
      console.log(responseError.error);
      this.toastrService.error(responseError.error)
    });
    
    }
    else{
    this.toastrService.error("Hatalı Form","Dikkat");
    }
    
  }


}
