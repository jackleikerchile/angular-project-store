import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // Product interfaz y product es un metodo
  // El decorador @Input pasa valores del componente padre al hijo
  //@Input() product!: Product;
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter;
  constructor() {}

  ngOnInit(): void {}
}
