import { Component, OnInit } from '@angular/core';

import {HttpService} from '../../http.service';
import {Response} from "@angular/http";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
  items: any[] = [];

  constructor(private httpService: HttpService) { }

  onSubmit(
      firstname:string,
      lastname: string,
      email:string,
      color:string,
      password: string,
      disabled:boolean
  )
  {
    this.httpService.sendData({
      firstName:firstname,
      lastName: lastname,
      email:email,
      color:color,
      password: password,
      disabled:disabled
    })
        .subscribe(
            (data) => console.log(data)
        )
  }

  onGetData(){
    this.httpService.getOwnData()
        .subscribe(
            (data)=>{
              let myArray = [];
              for(let key in data){
                myArray.push(data[key])
              }
              this.items = myArray;
            }
        )
  }

  ngOnInit() {
  }

}
