import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GenericModalErrorComponent } from './generic-modal-error.component';

describe('GenericModalErrorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        GenericModalErrorComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GenericModalErrorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
