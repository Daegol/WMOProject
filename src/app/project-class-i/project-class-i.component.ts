import {Component, OnInit, PipeTransform, QueryList, ViewChildren} from '@angular/core';
import * as data from '../../assets/data/data.json';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import {ROWS} from './Rows';
import {map, startWith} from 'rxjs/operators';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import {RowService} from './table.service';
import {Row} from './Row';

@Component({
  selector: 'app-project-class-i',
  templateUrl: './project-class-i.component.html',
  styleUrls: ['./project-class-i.component.css'],
  providers: [DecimalPipe]
})

export class ProjectClassIComponent implements OnInit {

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
