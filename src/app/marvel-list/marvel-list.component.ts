import { Component, OnInit } from '@angular/core';
import { PopupService } from '../services/utils/popup.service';
import { SeriesService } from '../services/marvel/series.service';
import { Series } from '../services/interfaces/series';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrl: './marvel-list.component.scss'
})
export class MarvelListComponent implements OnInit {
  seriesMarvel: Series[] = [];
  constructor(
    private popupService: PopupService,
    private seriesService: SeriesService,
    
  ){}

  ngOnInit(): void {
    this.popupService.loading("Cargando datos", "Por favor espere, no sea impaciente...");

    this.seriesService.getAllSeries().subscribe({
      next: (response) => {
        this.seriesMarvel =response.data.results;
        this.popupService.close();
      },      
      error: error => {
        console.log(error);
      }
  })
}

}
