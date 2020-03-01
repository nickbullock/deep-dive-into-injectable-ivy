import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpComponent } from './limp.component';

describe('LimpComponent', () => {
  let component: LimpComponent;
  let fixture: ComponentFixture<LimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
