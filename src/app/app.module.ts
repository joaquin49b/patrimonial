import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, ComponentsModule, BrowserAnimationsModule, NgCircleProgressModule.forRoot({
    "backgroundPadding": -22,
    "radius": 77,
    "space": 4,
    "toFixed": 0,
    "maxPercent": 100,
    "unitsFontSize": "20",
    "unitsFontWeight": "500",
    "outerStrokeWidth": 9,
    "outerStrokeColor": "#9dff00",
    "innerStrokeColor": "#bdf06a",
    "innerStrokeWidth": 5,
    "titleFontSize": "32",
    "titleFontWeight": "800",
    "subtitleFontWeight": "600",
    "imageHeight": 217,
    "imageWidth": 218,
    "animationDuration": 500,
    "showBackground": false,
    "responsive": false,
    "lazy": false
  })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule { }
