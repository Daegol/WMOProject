import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectClassIComponent } from './project-class-i.component';

describe('ProjectClassIComponent', () => {
  let component: ProjectClassIComponent;
  let fixture: ComponentFixture<ProjectClassIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectClassIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectClassIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
