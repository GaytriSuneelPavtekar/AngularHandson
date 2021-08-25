import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDemoDirective } from './custom-directive-demo.directive';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import {AlertModule } from 'ngx-bootstrap/alert';
import { ChildComponent } from './child/child.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { ClassBindingDemoComponent } from './class-binding-demo/class-binding-demo.component';
import { StyleBindingDemoComponent } from './style-binding-demo/style-binding-demo.component';
import { TwoWayBindingWithoutNgModelComponent } from './two-way-binding-without-ng-model/two-way-binding-without-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDemoDirective,
    BootstrapdemoComponent,
    ChildComponent,
    TwoWaybindingComponent,
    ClassBindingDemoComponent,
    StyleBindingDemoComponent,
    TwoWayBindingWithoutNgModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
