import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDiffComponent } from './code-diff.component';

describe('CodeDiffComponent', () => {
  let component: CodeDiffComponent;
  let fixture: ComponentFixture<CodeDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeDiffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
