import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Common } from './Common';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodTruck';
  public truckArray: Common[] = [];
  public truckData: Common[] = [];

  searchText :any;
  foodItems:any;
  @ViewChild('modal', {static: false}) modal!: ModalComponent
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: any;
  startIndex:any=1;
  endIndex=10;
  sortKey: any;
sortType ='asec';
isActive: boolean = false;
foodItemsList: string = "";


  constructor(private http:HttpClient){
    this.http.get('assets/Mobile_Food_Facility_Permit.csv', {responseType: 'text'}).subscribe(data=>{
      let csvToRowArray = data.split('\n')
     // console.log(csvToRowArray);
      for (let index = 1; index < csvToRowArray.length - 1; index++) {
        let row = csvToRowArray[index].split(",");
        let foodItems = [];
        foodItems.push(row[11].split(':'))
        this.truckData.push(new Common( parseInt( row[0], 10), row[1],row[11],row[5],row[14],row[15]));
      }
      this.totalItems=this.truckData.length;
      this.truckData.slice(this.startIndex-1, this.endIndex).map((item, i) => {
        this.truckArray.push(item);
       console.log('row*****', this.truckArray);

      });
    })
  }

  // openMenu(truckData:any){
  //   this.foodItems=truckData.split(':');
  //   console.log(this.foodItems);
  //   this.modal.open();
  // }

  sortById(value: any){
    this.sortKey = value;
    console.log('sort' , value);
   //this.sortType == 'asec' ? 'asec' : 'desc';
  if(this.sortType == 'asec'){
    this.sortType = 'desc';
  }
  else{
    this.sortType ='asec';
  }
  }
  openMap(loc:any){
    window.open("https://www.google.com/maps/search/?api=1&query="+loc.Latitude+","+loc.Longitude)
  }

  onPageChange(page: number): void {
    this.truckArray=[]
    this.currentPage = page;
    this.truckData.slice((page*this.endIndex)-9, page*this.endIndex).map((item, i) => {
      this.truckArray.push(item);
    });
  }

  openModal(value: any, itemsList: string) {
    value.active = true
    this.foodItemsList = itemsList.replaceAll(":",",");
  }

  closeModal(value: any) {
    value.active = false
  }
}
