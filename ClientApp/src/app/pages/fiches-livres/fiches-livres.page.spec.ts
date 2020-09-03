import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichesLivresPage } from './fiches-livres.page';

describe('FichesLivresPage', () => {
  let component: FichesLivresPage;
  let fixture: ComponentFixture<FichesLivresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichesLivresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichesLivresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
