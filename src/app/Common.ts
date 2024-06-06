

export class Common{
    locationid: number;
    Applicant: String;
    FoodItems:String
    Address:String
    Latitude:String
    Longitude:String

  
    constructor(locationid: number, Applicant: String,FoodItems:String,Address:String,Latitude:String,Longitude:String){
      this.locationid = locationid;
      this.Applicant = Applicant;
      this.FoodItems=FoodItems;
      this.Address=Address;
      this.Latitude=Latitude;
      this.Longitude=Longitude
    }
  }