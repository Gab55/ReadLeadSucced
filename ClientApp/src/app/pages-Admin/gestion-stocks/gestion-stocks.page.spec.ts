import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionStocksPage } from './gestion-stocks.page';

describe('GestionStocksPage', () => {
  let component: GestionStocksPage;
  let fixture: ComponentFixture<GestionStocksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionStocksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionStocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
