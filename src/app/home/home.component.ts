import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  misProductos: any = [];
  miImagen: any = [];
  itemsPerPage = 10; // Número de elementos por página
  currentPage = 1; // Página actual

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos() {
    this.productosService.getAll().subscribe((data: any) => {
      this.misProductos = data.results;
      this.getPokemons();
    });
  }

  getPokemons() {
    const requests = [];
    for (let i = 1; i <= 150; i++) {
      requests.push(this.productosService.getPokemons(i));
    }
    forkJoin(requests).subscribe((res: any[]) => {
      this.miImagen = res.map(item => ({
        nombre: item.name,
        peso: item.weight,
        imagen: item.sprites.other["official-artwork"].front_default
      }));
    });
  }

  get totalPagesPokemons(): number {
    return Math.ceil(this.miImagen.length / this.itemsPerPage);
  }

  get currentPokemons(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.miImagen.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPagesPokemons) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
