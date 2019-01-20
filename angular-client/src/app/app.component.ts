import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/').subscribe((data: any) => {
      this.message = data.msg;
      console.log(data);
    })
  }
}
