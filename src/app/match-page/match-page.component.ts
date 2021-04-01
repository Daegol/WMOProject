import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {Row} from './Row';
import {NgbdSortableHeader} from '../project-class-ii/sortable.directive';
import {RowService} from './table.service';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})
export class MatchPageComponent implements OnInit {

  rows$: Observable<Row[]>;
  total$: Observable<number>;
  discipline: string = "";
  disciplineName: string = "Wszystkie dyscypliny";
  phase: string = "";
  phaseName: string = "Wszystkie fazy";
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
