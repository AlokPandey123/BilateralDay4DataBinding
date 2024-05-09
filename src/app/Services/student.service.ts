import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor() { }

  data= [
    {name:"Alok",age:22, branch:"IT", active:true},
    {name:"Sudhanshu",age:23, branch:"IT", active:true},
    {name:"Yes",age:22, branch:"IT", active:false},
    {name:"Akash",age:21, branch:"CS", active:true},
    {name:"Alka",age:22, branch:"CS", active:false},
    
  ];

  getDadta(){
    return this.data;
  }
}
