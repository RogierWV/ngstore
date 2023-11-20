import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrl: './subtotal.component.css'
})
export class SubtotalComponent {
  constructor(
    private cartService : CartService
  ){}
  getPrice() : number {
    return this.cartService.getSubtotalPrice();
  }
}
