import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { ApiService } from '../api.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-misproductos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './misproductos.component.html',
  styleUrl: './misproductos.component.css'
})
export class MisproductosComponent {
  misProductos: any = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getAll()
      .subscribe(data => {
        this.misProductos = data.results;
      });
  }
}
