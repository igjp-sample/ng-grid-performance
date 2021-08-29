import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialService } from '../services/financial.service';
import { RenderTimer, FPS, Scroller } from '../util/util.js';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Category', 'Type', 'Open Price', 'Price', 'Change', 'Change(%)', 'Change On Year(%)', 'Buy', 'Sell', 'Spread', 'Volume', 'High(D)', 'Low(D)', 'High(Y)', 'Low(Y)', 'Start(Y)' ];

  public data: Observable<any[]>;
  constructor(private localService: FinancialService) {
      this.localService.getData(1000);
      this.data = this.localService.records;
      RenderTimer.start({
        sync : false
      });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    RenderTimer.stop();
    // var tbody = document.querySelector('.mattable').getElementsByTagName('tbody')[0];
    // console.log(tbody.scrollTop)
    // tbody.scrollTop = 1000;
    // console.log(tbody.scrollTop)
    setTimeout(() => {
        FPS.start();
        Scroller.scroll({
            element: document.querySelector('.example-container'),
            callback() {
                FPS.stop();
            }
        });
    }, 500);
  }

}
