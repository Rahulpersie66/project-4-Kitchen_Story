import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUpdateProductComponent } from './admin-view-update-product.component';

describe('AdminViewUpdateProductComponent', () => {
  let component: AdminViewUpdateProductComponent;
  let fixture: ComponentFixture<AdminViewUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewUpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
