import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SHeroeComponent } from './s-heroe.component';

describe('SHeroeComponent', () => {
  let component: SHeroeComponent;
  let fixture: ComponentFixture<SHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
