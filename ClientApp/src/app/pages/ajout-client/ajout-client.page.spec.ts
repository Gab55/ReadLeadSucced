import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutClientPage } from './ajout-client.page';

describe('AjoutClientPage', () => {
  let component: AjoutClientPage;
  let fixture: ComponentFixture<AjoutClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
