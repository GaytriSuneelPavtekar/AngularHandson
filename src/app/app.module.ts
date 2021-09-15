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
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { StringCaseConversionComponent } from './string-case-conversion/string-case-conversion.component';
import { InterComponentCommunicationComponent } from './Assignments/inter-component-communication/inter-component-communication.component';
import { StringLengthCalculationWithNgModelComponent } from './string-length-calculation-with-ng-model/string-length-calculation-with-ng-model.component';
import { ServiceDemoComponent } from './Assignment/service-demo/service-demo.component';
import { ServiceDemo2Component } from './Assignment/service-demo2/service-demo2.component';
import { ServiceDemo3Component } from './Assignment/service-demo3/service-demo3.component';
import { StringService } from './Assignment/string.service';
import { ArithmeticServiceService } from './Assignment/arithmetic-service.service';
import { NumberService } from './Assignment/number.service';
import { ClassListComponent } from './LectureHandson/HttpAndObservables/class-list/class-list.component';
import { ClassDetailsComponent } from './LectureHandson/HttpAndObservables/class-details/class-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Assignment/BootstapFormDemo/header/header.component';
import { PersonalInfoComponent } from './Assignment/BootstapFormDemo/personal-info/personal-info.component';
import { BugInfoComponent } from './Assignment/BootstapFormDemo/bug-info/bug-info.component';
import { FooterComponent } from './Assignment/BootstapFormDemo/footer/footer.component';
import { BootstrapParentFormComponent } from './Assignment/BootstapFormDemo/bootstrap-parent-form/bootstrap-parent-form.component';
import { FormDesigningComponent } from './Assignment/BootstrapFormDemo2/form-designing/form-designing.component';
import { FirstComponent } from './LectureHandson/AngularRouting/first/first.component';
import { SecondComponent } from './LectureHandson/AngularRouting/second/second.component';
import { InvalidComponent } from './LectureHandson/AngularRouting/invalid/invalid.component';
import { TechnologyComponent } from './Assignment/AngularRoutingAssignment/technology/technology.component';
import { BookListComponent } from './Assignment/AngularRoutingAssignment/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignDemoComponent } from './LectureHandson/material-design-demo/material-design-demo.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    FunctionCallByStringInterpolationComponent,
    EventBindingDemoComponent,
    StringCaseConversionComponent,
    InterComponentCommunicationComponent,
    StringLengthCalculationWithNgModelComponent,
    ServiceDemoComponent,
    ServiceDemo2Component,
    ServiceDemo3Component,
    ClassListComponent,
    ClassDetailsComponent,
    HeaderComponent,
    PersonalInfoComponent,
    BugInfoComponent,
    FooterComponent,
    BootstrapParentFormComponent,
    FormDesigningComponent,
    FirstComponent,
    SecondComponent,
    InvalidComponent,
    TechnologyComponent,
    BookListComponent,
    MaterialDesignDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [
    StringService,
    NumberService,
    ArithmeticServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
