import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationpageComponent } from './paginationpage.component';

describe('PaginationpageComponent', () => {
  let component: PaginationpageComponent;
  let fixture: ComponentFixture<PaginationpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationpageComponent]
    });
    fixture = TestBed.createComponent(PaginationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
