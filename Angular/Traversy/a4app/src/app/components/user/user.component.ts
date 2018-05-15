import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataservice:DataService) {
    console.log('Constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.name    = 'Jon Snow';
    this.age     = 20;
    this.email   = 'jon@north.wf';
    this.address = {
      street: 'wolf',
      city: 'winterfell',
      state: 'north'
    };
    this.hobbies = ['movies', 'football', 'coding'];

    this.dataservice.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });

  }

  onClick() {
    this.name = 'BOOM';
    this.hobbies.push('reading');
  }

  addHobby(hobby:string) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string;
  city:string;
  state:string;
}

interface Post {
  userid:number;
  id:number;
  title:string;
  body:string;
}
