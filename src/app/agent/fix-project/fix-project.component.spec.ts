import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixProjectComponent } from './fix-project.component';

describe('FixProjectComponent', () => {
  let component: FixProjectComponent;
  let fixture: ComponentFixture<FixProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
