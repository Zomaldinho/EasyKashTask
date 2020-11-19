import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http:HttpClient) { }
  page;
  per_page;
  seller_id;

  ngOnInit(): void {
    // Getting query parameters and saving them into variables
    this.route.queryParams.subscribe((params: Params)=>{
      this.page = params.page
      this.per_page = params.per_page
      this.seller_id = params.seller_id
    })

    // Calling the api to get the data
  }

}
