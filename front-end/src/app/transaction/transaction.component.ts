import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  page;
  per_page;
  seller_id;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params)=>{

    })
  }

}
