import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialService } from '../services/financial.service';
import { RenderTimer, FPS, Scroller } from '../util/util.js';

@Component({
  selector: 'app-ignite',
  templateUrl: './ignite.component.html',
  styleUrls: ['./ignite.component.scss']
})
export class IgniteComponent implements OnInit, AfterViewInit {

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
    setTimeout(() => {
      FPS.start();
      Scroller.scroll({
          element: document.querySelector('.igx-vhelper--vertical'),
          callback() {
              FPS.stop();
          }
      });
  }, 500);
  }

}
