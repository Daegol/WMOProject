import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Row} from './Row';
import {NgbdSortableHeader} from './sortable.directive';
import {RowService} from './table.service';

@Component({
  selector: 'app-project-class-ii',
  templateUrl: './project-class-ii.component.html',
  styleUrls: ['./project-class-ii.component.css'],
  providers: [DecimalPipe]
})
export class ProjectClassIiComponent implements OnInit  {

  rows$: Observable<Row[]>;
  fsi1: string = "assets/img/Inception_V.png";
  ti1: string = "assets/img/Inception_VT.png";
  fsi2: string = "assets/img/Elaboration_V.png";
  ti2: string = "assets/img/Elaboration_VT.png";
  fsi3: string = "assets/img/Construction_V.png";
  ti3: string = "assets/img/Construction_VT.png";
  fsi4: string = "assets/img/Transition_V.png";
  ti4: string = "assets/img/Transition_VT.png";
  zoomMode = "hover-freeze";
  total$: Observable<number>;
  discipline: string = "";
  disciplineName: string = "Wszystkie dyscypliny";
  phase: string = "";
  phaseName: string = "Wszystkie fazy";
  tab: number = 0;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: RowService) {
    this.rows$ = service.rows$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
  }

  onClickDisc(disc:string) {
    this.discipline = disc;
    if(disc!="") this.disciplineName = disc;
    else this.disciplineName = "Wszystkie dyscypliny";
    this.changeData()
  }

  changeTab(tab:number) {
    this.tab = tab;
  }

  onClickPhs(disc:string) {
    this.phase = disc;
    if(disc!="") this.phaseName = disc;
    else this.phaseName = "Wszystkie fazy";
    this.changeData()
  }

  changeData() {
    this.service.changeRows(this.discipline,this.phase)
    this.service.searchTerm = "";
  }

}
