import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [AppComponent]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render the next title: User list made with stencil.js and Angular', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    const title = 'User list made with native Web Components and Angular';
    expect(app.title).toEqual(title);
  });

  it('should render the <user-list /> component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('user-list')).toBeDefined()
  });
});
