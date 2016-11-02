import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  items:any[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getOwnData().
      subscribe(
      (data: any) => {
        let myArray = [];
        for(let key in data){
          myArray.push(data[key])
        }
        this.items = myArray;
      }
    );
  }

}
