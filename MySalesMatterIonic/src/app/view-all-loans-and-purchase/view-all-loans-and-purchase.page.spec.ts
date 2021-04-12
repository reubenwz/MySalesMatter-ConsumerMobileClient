import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAllLoansAndPurchasePage } from './view-all-loans-and-purchase.page';

describe('ViewAllLoansAndPurchasePage', () => {
  let component: ViewAllLoansAndPurchasePage;
  let fixture: ComponentFixture<ViewAllLoansAndPurchasePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllLoansAndPurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllLoansAndPurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
