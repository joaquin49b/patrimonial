import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatrimonialForm } from './patrimonial-form.page';

describe('PatrimonialForm', () => {
  let component: PatrimonialForm;
  let fixture: ComponentFixture<PatrimonialForm>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PatrimonialForm],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatrimonialForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
