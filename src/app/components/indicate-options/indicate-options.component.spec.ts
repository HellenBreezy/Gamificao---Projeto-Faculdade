import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateOptionsComponent } from './indicate-options.component';

describe('IndicateOptionsComponent', () => {
  let component: IndicateOptionsComponent;
  let fixture: ComponentFixture<IndicateOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicateOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicateOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
