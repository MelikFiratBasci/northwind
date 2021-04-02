import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);//eger item daha onceden varsa referansini aliyor linq gibi js 
    if (item) {
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product=product;
      cartItem.quantity = 1 ; 
      CartItems.push(cartItem)
    }
  }
  list():CartItem[]{
    return CartItems;//public variable const
  }
  removeFromCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);//itemin bulundugu indexi sil,javascriptte arrayden remove  
  }
}
