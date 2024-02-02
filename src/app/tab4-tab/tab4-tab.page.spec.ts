import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab4TabPage } from './tab4-tab.page';

describe('Tab4TabPage', () => {
  let component: Tab4TabPage;
  let fixture: ComponentFixture<Tab4TabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab4TabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
