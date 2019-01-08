import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {AgmCoreModule} from '@agm/core';
import {MapService} from './mapservice/map.service';
import {CamelizePipe} from 'ngx-pipes';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MapComponent],
  exports: [MapComponent],
  imports: [CommonModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCHHDmp86jFNTHisZBbHgw7HDsE19LeMr4'
  })],
  providers: [MapService, CamelizePipe],
})
export class MapModule {
}
