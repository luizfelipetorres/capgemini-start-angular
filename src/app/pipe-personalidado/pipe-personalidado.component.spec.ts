import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePersonalidadoComponent } from './pipe-personalidado.component';

describe('PipePersonalidadoComponent', () => {
  let component: PipePersonalidadoComponent;
  let fixture: ComponentFixture<PipePersonalidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePersonalidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePersonalidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
