import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  USERS:Array<any> = [
    { id: 11, name: 'Tomás' , surname: 'Rodriguez', edad: 21,  profesion: 'Estudiante'},
    { id: 12, name: 'María', surname: 'Figallo', edad: 33 , profesion: 'Ingeniera Civil'},
    { id: 13, name: 'Agustina' , surname: 'Leanz', edad: 42, profesion: 'Electricista'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
