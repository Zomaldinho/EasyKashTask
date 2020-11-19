import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  page;
  per_page;
  seller_id;
  totalNum;
  dataArray = new MatTableDataSource<any>();
  isLoaded = false;
  displayedColumns: string[] = ['id', 'user_id', 'title', 'fees', 'amount']

  // Function to get data from api
  getData(page, perPage, sellerId) {
    return this.http.get(
      `http://localhost:5000/transaction?page=${page}&per_page=${perPage}&seller_id=${sellerId}`
    );
  }

  ngOnInit(): void {
    // Getting query parameters and saving them into variables
    this.route.queryParams.subscribe((params: Params) => {
      this.page = params.page;
      this.per_page = params.per_page;
      this.seller_id = params.seller_id;
    });

    // Calling the api to get the data
    this.getData(this.page, this.per_page, this.seller_id).subscribe(
      (recievedData) => {
        this.totalNum = recievedData['data']['paging']['total'];
        this.dataArray.data = recievedData['data']['transaction'];
        this.isLoaded = true;
      }
    );
  }
}
