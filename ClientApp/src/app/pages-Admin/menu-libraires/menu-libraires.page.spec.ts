import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuLibrairesPage } from './menu-libraires.page';

describe('MenuLibrairesPage', () => {
  let component: MenuLibrairesPage;
  let fixture: ComponentFixture<MenuLibrairesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLibrairesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLibrairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
