import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {Row} from './row';
import {ROWS} from './rows';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from './sortable.directive';

interface SearchResult {
  rows: Row[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

let ROWES: Row[] = ROWS;
const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(rows: Row[], column: SortColumn, direction: string): Row[] {
  if (direction === '' || column === '') {
    return rows;
  } else {
    return [...rows].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(row: Row, term: string, pipe: PipeTransform) {
  term = term.toLowerCase();
  return row.artifacts?.toLowerCase().includes(term)
    || row.role?.toLowerCase().includes(term)
    || row.construction?.toLowerCase().includes(term)
    || row.elaboration?.toLowerCase().includes(term)
    || row.inception?.toLowerCase().includes(term)
    || row.task?.toLowerCase().includes(term)
    || row.discipline?.toLowerCase().includes(term)
    || row.transition?.toLowerCase().includes(term);
}

@Injectable({providedIn: 'root'})
export class RowService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _rows$ = new BehaviorSubject<Row[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._rows$.next(result.rows);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get rows$() { return this._rows$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  public changeRows(discipline:string,phases:string){
    if(discipline!=="" && phases!=="") {
      ROWES = ROWS.filter(x=> x.discipline == discipline && (x[phases]!=null));
    } else if(phases!=="") {
      ROWES = ROWS.filter(x=>(x[phases]!=null));
    } else if(discipline!=="") {
      ROWES = ROWS.filter(x=> x.discipline == discipline);
    } else {
      ROWES = ROWS;
    }
    this._search();
  }
  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let rows = sort(ROWES, sortColumn, sortDirection);

    // 2. filter
    rows = rows.filter(row => matches(row, searchTerm, this.pipe));
    const total = rows.length;

    // 3. paginate
    rows = rows.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({rows, total});
  }
}
