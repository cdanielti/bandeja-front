import { Component } from '@angular/core';
import { FiltrosPanelComponent } from '../../components/filtros-panel/filtros-panel.component';
import { ResultadosListComponent } from '../../components/resultados-list/resultados-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bandeja',
  imports: [FiltrosPanelComponent, ResultadosListComponent,CommonModule],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.scss'
})
export class BandejaComponent {
  public filtrosCollapsed = false;

  toggleFiltros(): void {
    this.filtrosCollapsed = !this.filtrosCollapsed;
  }
}
