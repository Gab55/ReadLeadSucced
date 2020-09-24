import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCataloguePage } from './gestion-catalogue.page';

describe('GestionCataloguePage', () => {
  let component: GestionCataloguePage;
  let fixture: ComponentFixture<GestionCataloguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCataloguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCataloguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
