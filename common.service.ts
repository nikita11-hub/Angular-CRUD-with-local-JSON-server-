import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  createbook(book){
    return this._http.post("http://localhost:3000/bookname" , book);

  }
  getallbook(){
       return this._http.get('http://localhost:3000/bookname')
  }
  updatebook(book){
   return this._http.put("http://localhost:3000/bookname/" +book.id , book);
  }
  deletebook(book){
    return this._http.delete("http://localhost:3000/bookname/" +book.id);

  }
}
