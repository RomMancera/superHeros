import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SHeroesComponent } from './s-heroes.component';

describe('SHeroesComponent', () => {
  let component: SHeroesComponent;
  let fixture: ComponentFixture<SHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
