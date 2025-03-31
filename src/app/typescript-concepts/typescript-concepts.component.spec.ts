import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptConceptsComponent } from './typescript-concepts.component';

describe('TypescriptConceptsComponent', () => {
  let component: TypescriptConceptsComponent;
  let fixture: ComponentFixture<TypescriptConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypescriptConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
