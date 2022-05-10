import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTreeTableComponent } from './p-tree-table.component';

describe('PTreeTableComponent', () => {
  let component: PTreeTableComponent;
  let fixture: ComponentFixture<PTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTreeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
