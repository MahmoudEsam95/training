import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayPalService {
  totalAmount = 15000;

  constructor() { }
}
