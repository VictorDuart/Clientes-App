import { Component, OnInit } from '@angular/core';
import { ServiceProvideSearch } from './serviceProvideSearch';
import { ServiceProvidedService } from '../../service-provided.service';

@Component({
  selector: 'app-service-provide-list',
  templateUrl: './service-provide-list.component.html',
  styleUrls: ['./service-provide-list.component.css']
})
export class ServiceProvideListComponent implements OnInit {

  name: string;
  month: number;
  monthList: number[];
  list: ServiceProvideSearch[];

  constructor(
    private service: ServiceProvidedService
  ) { 
    this.monthList = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  search(){
    this.service
      .search(this.name, this.month)
      .subscribe(response => this.list = response);
  }
}
