import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { TransactionComponent } from './transaction.component';
import { ActivatedRoute } from '@angular/router';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [TransactionComponent]
    })
  })

  it('should create the app',()=>{
    let fixture = TestBed.createComponent(TransactionComponent)
    let app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
});
