import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {AgmCoreModule} from '@agm/core';
import {MapService} from './mapservice/map.service';
import {CamelizePipe} from 'ngx-pipes';
import {CommonModule} from '@angular/common';
import {googleApi} from './google-api';


@NgModule({
  declarations: [
    MapComponent],
  exports: [MapComponent],
  imports: [CommonModule,
    AgmCoreModule.forRoot({
    apiKey: googleApi.GOOGLE_API_KEY
  })],
  providers: [MapService, CamelizePipe],
})
export class MapModule {
}
