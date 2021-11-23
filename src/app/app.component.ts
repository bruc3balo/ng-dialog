import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { MultiSelectComponent, CheckBoxSelectionService } from '@syncfusion/ej2-ng-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-ng-buttons';
import {
  SelectEventArgs,
  RemoveEventArgs, 
  DropDownList,
  MultiSelect,
  ComboBoxComponent,
  DropDownListComponent
} from '@syncfusion/ej2-ng-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import {QuestionList} from './questionlist';
import {ResultList} from './resultlist';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [CheckBoxSelectionService]
})
export class AppComponent  {
   @ViewChild('modaldialog')
    public modaldialog: DialogComponent;
  private static appObj: AppComponent = null;
  public static questionList: any[] = [];
  public multiselectdata: Object[];
  public dataFields: Object = { text: 'Name', value: 'Id' };
  public databox = 'CheckBox';
  public selectAllText = 'Select All';

  public dropdowndata: Object[];
  public itemFields: Object = { text: 'Name', value: 'Id' };
  public selectedItem: any = {};
  public showModal:boolean = false;
  public showEditModal: boolean = false;
  public modalbuttons: Object[];
  public editbtns: Object[];
  public _name;
  public _editName;
  public multiselectvalue;
  public dropval;
  public resultArray: any[] = [];

  public resultObj = <ResultList>{};
 
  
  ngOnInit() {
    AppComponent.appObj = this;
    this.modalbuttons = [
          { click: AppComponent.appObj.closeModal.bind(this), buttonModel: { content: 'Cancel', cssClass: 'cancelBtn' } },
          { click: AppComponent.appObj.saveData.bind(this), buttonModel: { content: 'Save', cssClass: 'confirmBtn' } }
        ];

this.editbtns = [
          { click: AppComponent.appObj.CloseNew.bind(this), buttonModel: { content: 'Cancel', cssClass: 'cancelBtn' } },
          { click: AppComponent.appObj.SaveNew.bind(this), buttonModel: { content: 'Save', cssClass: 'confirmBtn' } }
        ];

        this.multiselectdata = [
      {Id:1, Name: "question 1", Abbr: "ques1"}, 
      {Id:2, Name: "question 2", Abbr: "ques2"},
      {Id:3, Name: "question 3", Abbr: "ques3"},
      {Id:4, Name: "question 4", Abbr: "ques4"},
      {Id:5, Name: "question 5", Abbr: "ques5"}
    ]
    this.dropdowndata = [
      {Id:1, Name: "item 1", Abbr: "item 1"}, 
      {Id:2, Name: "item 2", Abbr: "item 2"}, 
      {Id:3, Name: "item 3", Abbr: "item 3"},
      {Id:4, Name: "item 4", Abbr: "item 4"},
      {Id:5, Name: "item 5", Abbr: "item 5"}
    ]

  }

  ngAfterViewInit(): void {
        document.getElementById('modalbtn').focus();
  }

   public modalBtnClick: EmitType<object> = () => {
        this.showModal = true;
    }
  
  // question selection
  questionSelect(selectEventArgs: SelectEventArgs) {
    let seldata: any;
    seldata = selectEventArgs.itemData.Id;
    AppComponent.questionList.push(seldata);
    console.log(AppComponent.questionList)
  }

  // question deselection
  questionDeselect(removeEventArgs: RemoveEventArgs) {
    let itemDeselected: any;
    itemDeselected = removeEventArgs.itemData.Id;
    let objInedx: any;
    objInedx = AppComponent.questionList.indexOf(itemDeselected);
    AppComponent.questionList.splice(objInedx, 1);
    console.log(AppComponent.questionList)
  }

  itemSelect(event) {
    this.selectedItem = event.itemData.Id;
    console.log(this.selectedItem);
  }  
  public saveData: EmitType<object> = () =>{
    this.resultObj.employeeName = this._name;
    this.resultObj.items = this.selectedItem;
    this.resultObj.questions = AppComponent.questionList;
    console.log(this.resultObj);
    this.closeModal();
  }

 

   // Close the Dialog, while clicking "OK" Button of Dialog
    public closeModal: EmitType<object> = () => {
        this.modaldialog.hide(); 
    } 

    openEdit() {
      console.log(this.resultObj);
      var text;
      this.showEditModal = true;
      this._editName = this.resultObj.employeeName;
      this.multiselectvalue = this.resultObj.questions;
      this.dropval = this.resultObj.items;
    } 
    public SaveNew: EmitType<object> = () =>{

    }

    public CloseNew: EmitType<object> = () =>{
      this.modaldialog.hide();
    }
}
