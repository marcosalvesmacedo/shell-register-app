import { TestBed } from '@angular/core/testing';
import { GenericModalErrorComponent } from './generic-modal-error.component';

describe('GenericModalErrorComponent', () => {
  let component: GenericModalErrorComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GenericModalErrorComponent
      ]
    }).compileComponents();
    component = TestBed.inject(GenericModalErrorComponent);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call closeModal', () => {
    spyOn(component.close, 'emit');
    component.closeModal();
    expect(component.close.emit).toHaveBeenCalledWith(false);
  });

});
