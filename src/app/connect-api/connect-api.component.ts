import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connect-api',
  standalone: false,
  templateUrl: './connect-api.component.html',
  styleUrl: './connect-api.component.css'
})
export class ConnectApiComponent {
  weather: any[] = [];


}
