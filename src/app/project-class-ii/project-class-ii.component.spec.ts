import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectClassIiComponent } from './project-class-ii.component';

describe('ProjectClassIiComponent', () => {
  let component: ProjectClassIiComponent;
  let fixture: ComponentFixture<ProjectClassIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectClassIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectClassIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
