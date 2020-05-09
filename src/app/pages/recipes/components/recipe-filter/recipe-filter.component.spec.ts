import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFilterComponent } from './recipe-filter.component';

describe('RecipeFilterComponent', () => {
  let component: RecipeFilterComponent;
  let fixture: ComponentFixture<RecipeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
