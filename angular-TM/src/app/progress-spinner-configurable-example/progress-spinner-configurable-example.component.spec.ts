import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerConfigurableExampleComponent } from './progress-spinner-configurable-example.component';

describe('ProgressSpinnerConfigurableExampleComponent', () => {
  let component: ProgressSpinnerConfigurableExampleComponent;
  let fixture: ComponentFixture<ProgressSpinnerConfigurableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerConfigurableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerConfigurableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
