import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeCustoComponent } from './centro-de-custo.component';

describe('CentroDeCustoComponent', () => {
  let component: CentroDeCustoComponent;
  let fixture: ComponentFixture<CentroDeCustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroDeCustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroDeCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
