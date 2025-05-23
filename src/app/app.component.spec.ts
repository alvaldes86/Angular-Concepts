import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { UserComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        UserComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-essentials'`, () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-essentials');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-essentials');
  });
});

