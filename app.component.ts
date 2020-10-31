import { Component } from '@angular/core';
import {CommonService} from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore';
  allbook: Object;
  isEdit =false;
  bookObj ={
    bookname:"",
    author:"",
    price:""
  }
  constructor(private commonService:CommonService){
  
  }
  ngOnInit(){
    this.getbook();
  }
  addbook(formObj){
    console.log(formObj);
    this.commonService.createbook(formObj).subscribe((response)=>{
      this.getbook();
    })
  }
  getbook(){
    this.commonService.getallbook().subscribe((response)=>{
      this.allbook = response
    })
  }
  editbook(book){
    this.bookObj = book;
    this.isEdit = true;

  }
  deletebook(book){
    this.commonService.deletebook(book).subscribe(()=>{
      this.getbook();
    })
  }
  updatebook(){
    this.isEdit = !this.isEdit;
    this.commonService.updatebook(this.bookObj).subscribe(()=>{
      this.getbook();
    })
  }
}
