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
