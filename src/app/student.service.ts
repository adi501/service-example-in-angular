import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudentsList(): any[]
  {
    var StudentsList = [
      {Id:101, Name: "Adi", Email:"jc.adi101@gmail.com" },
      {Id:102, Name: "Pavan", Email:"pavan@gmail.com"},
      {Id:103, Name: "Nani", Email:"Nani@gmail.com" },
      {Id:104, Name: "Madhan", Email:"Madhan@gmail.com" }
    ];
    return StudentsList;
  }

}
