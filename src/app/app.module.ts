import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { DialogModule } from '@syncfusion/ej2-ng-popups';
import { MultiSelectModule, DropDownListModule } from '@syncfusion/ej2-ng-dropdowns';


@NgModule({
  imports:      [ BrowserModule, FormsModule, DialogModule, ButtonModule,ReactiveFormsModule,MultiSelectModule, DropDownListModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
