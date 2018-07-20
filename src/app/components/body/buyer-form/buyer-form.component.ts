import { Component, OnInit, NgModule } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.css'],
})

export class BuyerFormComponent implements OnInit {

  constructor() { }

  myOptions: Array<IOption> = [
    {value: "AM",label: "America"},
    {value: "PH",label: "Philippines"},
    {value: "FR",label: "France"},
    {value: "IT",label: "Italy"},
    {value: "GE",label: "Germany"}
  ];

  checkOptions: Array<any> = [
    {id: 1, value: 'Importer'},
    {id: 2, value: 'Wholesale'},
    {id: 3, value: 'Chain Store'},
    {id: 4, value: 'Buying Agent'},
    {id: 5, value: 'Mail Order'},
    {id: 6, value: 'Others'}
  ];

  checkOption: Array<any> = [
    {id: 1, value: 'Manufacturer'},
    {id: 2, value: 'Exporter'},
    {id: 3, value: 'Trader'},
    {id: 4, value: 'Consolidator'},
    {id: 5, value: 'Buyer'},
    {id: 6, value: 'Others'}
  ];

  status: Array<any> = [
    {id: 'Y' , label: 'Yes'},
    {id: 'N' , label: 'No'}
  ];
 
  buyerTypeIdList = [];
  typeOfSupplier = [];
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  selectedOtherCountries: Array<string>;

  // Form Controls
  myForm: FormGroup;
  firmName: FormControl;
  yearEstablished: FormControl;
  companyAddress: FormControl;
  country: FormControl;
  state: FormControl;
  city: FormControl;
  telNo: FormControl;
  fax: FormControl;
  website: FormControl;
  membership: FormControl;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  position: FormControl;
  product: FormControl;
  bankReference: FormControl;
  annualSales: FormControl;
  typeOfBuyer: FormControl;
  buyingChoice: FormControl;
  buyerYear:  FormControl;
  countries:  FormControl;
  buyerTypeSupplier:  FormControl;
  inquiryPreferences:  FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.firmName = new FormControl('', Validators.required);
    this.yearEstablished = new FormControl('1993', Validators.required);
    this.companyAddress = new FormControl('123 st',Validators.required);
    this.country = new FormControl('', Validators.required);
    this.state = new FormControl('', Validators.required);
    this.city =  new FormControl('', Validators.required);
    this.telNo =  new FormControl('123456789', Validators.required);
    this.fax =  new FormControl('');
    this.website = new FormControl('');
    this.membership = new FormControl('');
    this.email = new FormControl('test@gmail.com',[
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]),
    this.firstName = new FormControl('Juan',Validators.required),
    this.lastName = new FormControl('dela Cruz',Validators.required),
    this.position = new FormControl('Manager',Validators.required),
    this.product = new FormControl('',Validators.required),
    this.bankReference = new FormControl(''),
    this.annualSales = new FormControl('',Validators.required),
    this.typeOfBuyer = new FormControl('',Validators.required),
    this.buyingChoice = new FormControl('',Validators.required),
    this.buyerYear = new FormControl('',Validators.required),
    this.countries = new FormControl(''),
    this.buyerTypeSupplier = new FormControl('',Validators.required),
    this.inquiryPreferences = new FormControl('',Validators.required)
  }

  createForm(){
    this.myForm = new FormGroup({
      firmName: this.firmName,
      yearEstablished: this.yearEstablished,
      companyAddress: this.companyAddress,
      country: this.country,
      state: this.state,
      city: this.city,
      telNo: this.telNo,
      fax: this.fax,
      website: this.website,
      membership: this.membership,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      position: this.position,
      product: this.product,
      bankReference: this.bankReference,
      annualSales: this.annualSales,
      typeOfBuyer: this.typeOfBuyer,
      buyingChoice: this.buyingChoice,
      buyerYear: this.buyerYear,
      countries: this.countries,
      buyerTypeSupplier: this.buyerTypeSupplier,
      inquiryPreferences: this.inquiryPreferences
  })
  }

  isFinished(){
    $("#buyerBody ul li.active").addClass('done')
    $("#buyerBody ul li.active").removeClass('active')
    $("#buyerBody ul li.active").removeClass('not-valid')
    $('#buyerBody ul li.active.done i').removeClass('glyphicon glyphicon-record')
    $('#buyerBody ul li.active.done i').removeClass('far fa-times-circle')
    $("#buyerBody ul li.active.done i").addClass('glyphicon glyphicon-ok-circle')
  }

  isError(){
    $("#buyerBody ul li.active").removeClass('done')
    $("#buyerBody ul li.active").addClass('not-valid')
    $('#buyerBody ul li.active i').removeClass('glyphicon glyphicon-record')
    $("#buyerBody ul li.active.not-valid i").removeClass('glyphicon glyphicon-ok-circle')
    $('#buyerBody ul li.active i').addClass('far fa-times-circle')
  }


  
  isDone: boolean = false; // valid form
  isInvalid1: boolean = false; isInvalid2: boolean = false; // invalid form
  index: string = 'first';
  current: number = 0;
  submitted: boolean = false;

  next(){

    // $('#buyerBody ul').on('click', 'li', function() {
    //   $('#buyerBody ul li.active').removeClass('active');
    //   $(this).addClass('active');

    // });

    this.submitted = true;
    if (this.firmName.invalid || this.yearEstablished.invalid || this.companyAddress.invalid ||
      this.country.invalid || this.state.invalid || this.city.invalid || this.telNo.invalid || this.email.invalid ||
      this.firstName.invalid || this.lastName.invalid || this.position.invalid){
      // this.isError();
      this.isDone = false;
      this.isInvalid1 = true;
      
    }else{

      $("#buyerBody ul li.active").removeClass('active')
      this.isDone = true;
      this.isInvalid1 = false;
     
      this.current = 1 
      this.jumpToTab();
    }
  }

  prev(){
    this.current = 0
    this.jumpToTab();
  }

  jumpToFirst(){

    $('#buyerBody ul').on('click', 'li', function() {
      $('#buyerBody ul li.active').removeClass('active');
      $(this).addClass('active');

    });

    this.current = 0;
    this.jumpToTab();
  }

  jumpToSecond(){

    $('#buyerBody ul').on('click', 'li', function() {
      $('#buyerBody ul li.active').removeClass('active');
      $(this).addClass('active');

    });

    this.current = 1;
    this.jumpToTab();
  }



  jumpToTab(){
    switch(this.current){
      case 0:
        this.index = 'first';
        break;
      case 1:
        this.index = 'second';
        break;
      default: 
        this.index = 'error';
        break;
    }
  }

  others: boolean = false;
  onBuyerTypeSupplierChange(id: Array<number>){
    if (id.indexOf(6) > -1){
      this.others = true;
    }else{
      this.others = false;
    }
  }

  other: boolean = false;
  onBuyerTypeChange(id: Array<number>){
    if (id.indexOf(6) > -1){
      this.other = true;
    }else{
      this.other = false;
    }
  }

  submit: boolean = false;
  radio_error: boolean = false;
  checkValue(value){
    value.typeOfBuyer = this.buyerTypeIdList;
    value.buyerTypeSupplier = this.typeOfSupplier;

    if (this.product.invalid || this.annualSales.invalid || this.buyerTypeIdList == null ||
      this.buyerYear.invalid || this.typeOfSupplier == null || this.inquiryPreferences.invalid ){
        this.isInvalid2 = true;
        this.submit = true;
        this.radio_error = true;
    }else{
    console.log(value)
    }
  }
}
