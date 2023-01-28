import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  searchText: string = '';

 OnClick1 (){
  console.log("OnClick1");

}
OnClick2 (){
  console.log("OnClick2");


}
OnClick3 (){
  console.log("OnClick3");
  this.searchText="";
}



  
  constructor() { }

  ngOnInit(): void {
  }



  

}


