import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile= [];

  constructor() { }

  ngOnInit(): void {

  }

  getProfile()
  {
    var arr=["abc"];
    this.profile=arr;
  }

}
