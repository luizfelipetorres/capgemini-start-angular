import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloDeVidaPAIComponent } from './ciclo-de-vida-pai.component';

describe('CicloDeVidaPAIComponent', () => {
  let component: CicloDeVidaPAIComponent;
  let fixture: ComponentFixture<CicloDeVidaPAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloDeVidaPAIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloDeVidaPAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
