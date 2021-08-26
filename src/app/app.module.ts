import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDemoDirective } from './custom-directive-demo.directive';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ChildComponent } from './child/child.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { ClassBindingDemoComponent } from './class-binding-demo/class-binding-demo.component';
import { StyleBindingDemoComponent } from './style-binding-demo/style-binding-demo.component';
import { TwoWayBindingWithoutNgModelComponent } from './two-way-binding-without-ng-model/two-way-binding-without-ng-model.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FunctionCallByStringInterpolationComponent } from './function-call-by-string-interpolation/function-call-by-string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDemoDirective,
    BootstrapdemoComponent,
    ChildComponent,
    TwoWaybindingComponent,
    ClassBindingDemoComponent,
    StyleBindingDemoComponent,
    TwoWayBindingWithoutNgModelComponent,
    CalculatorComponent,
    NgForDemoComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    FunctionCallByStringInterpolationComponent
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
