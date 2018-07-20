import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  supplierToInclude = [];
  mainBusiness = [];
  typeofBusiness: Array<string> = [];
  lineBusiness: Array<string> = [];
  trade_association = [];
  standard_specfification = [];
  selectedProvinceAddress: string = "";
  selectedCityAddress: string = "";
  selectedProvince: string = "";
  selectedCity: string = "";

  myOptions: Array<IOption> = [
    {value: "AM",label: "America"},
    {value: "PH",label: "Philippines"},
    {value: "FR",label: "France"},
    {value: "IT",label: "Italy"},
    {value: "GE",label: "Germany"}
  ];

  trade_assoc: Array<IOption> = [
    {value: "AM",label: "CHRISTMAS DÉCOR PRODUCERS AND EXPORTERS ASSOCIATION OF THE PHILIPPINES"},
    {value: "PH",label: "CONFEDERATION OF PHILIPPINE JEWELERS, INC."},
    {value: "FR",label: "GUILD OF THE PHILIPPINE JEWELLERS, INC."},
    {value: "IT",label: "FASHION ACCESSORIES MANUFACTURERS AND EXPORTERS. FOUNDATION PHILS."},
    {value: "GE",label: "PHILIPPINE ASSOCIATION OF PEARL PRODUCERS AND EXPORTERS"}
  ];

  checkOption: Array<any> = [
    {id: 1, value: 'Philippine Exporters Directory'},
    {id: 2, value: "EMB's Mailing List"},
    {id: 3, value: 'Business Matching '},
    {id: 4, value: 'Outbound Business Mission'}
  ];

  lineOfBusiness: Array<any> = [
    {id: 1, value: 'Agriculture'},
    {id: 2, value: 'Manufacturing'},
    {id: 3, value: 'Merchandising'},
    {id: 4, value: 'Services'},
    {id: 5, value: 'Direct Exporter'},
    {id: 6, value: 'Indirect Exporter (Subcon/Supplier)'},
    {id: 7, value: 'Importer'},
    {id: 8, value: 'Trader'},
    {id: 9, value: 'Consolidator'},
    {id: 10, value: 'Others'}
  ];

  typesOfBusinessOrg: Array<any> = [
    {id: 1, value: 'Multinational Company'},
    {id: 2, value: 'Joint Venture'},
    {id: 3, value: 'Others'},

  ];

  standardAccreditation: Array<any> = [
    {id: 1, value: 'CMMI'},
    {id: 2, value: 'GAP'},
    {id: 3, value: 'FAIRTRADE'},
    {id: 4, value: 'COSMOS'},
    {id: 5, value: 'GMP'},
    {id: 6, value: 'HALAL'},
    {id: 7, value: 'CPR/NN'},
    {id: 8, value: 'HACCP'},
    {id: 9, value: 'KOSHER'},
    {id: 10, value: 'DOH'},
    {id: 11, value: 'ISO'},
    {id: 12, value: 'ORGANIC'},
    {id: 13, value: 'DOT'},
    {id: 14, value: 'LTO'},
    {id: 15, value: 'Others'},
    {id: 16, value: 'FDA'},
    {id: 17, value: 'TESDA'},
  ];

  capitalization: Array<any> = [
    {id: 1, value: 'Micro (Up to P 3M)'},
    {id: 2, value: 'Small (Up to P 15M)'},
    {id: 3, value: 'Medium (Up to P 100M)'},
    {id: 4, value: 'Large (Above P 100M)'}
  ]

  employeesNumber: Array<any> = [
    {id: 1, value: '(1-9 employees)'},
    {id: 2, value: '(10-99 employees)'},
    {id: 3, value: '(100-199 employees)'},
    {id: 4, value: '(200 employees and above)'}
  ]

  constructor(private fb: FormBuilder) { }

  /**
   * Form controls
   * Business Information
   */
  supplierForm: FormGroup;
    businessName: FormControl;

  address: FormGroup;
    officeAddress: FormControl;
    province: FormControl;
    city: FormControl;
    zipCode: FormControl;
    factoryAddress: FormControl;
    factoryProvince: FormControl;
    factoryCity: FormControl;

  contactDetails: FormGroup;
    telNo: FormControl;
    faxNo: FormControl;
    website: FormControl;
    email: FormControl;
    alternateEmail: FormControl;
    supplierInclude: FormControl;

  contactPersonInfo: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    position: FormControl;

  /**
   * Form controls
   * Products Services
   */
  productServices: FormGroup;
    productLines: FormControl;
    brandNames: FormControl;
  
  productCapacity: FormGroup;
    maxCapacity: FormControl;
    actualCapacity: FormControl;

  /**
   * Form controls
   * Raw Material
   */
  rawMaterials: FormGroup;
    rawMaterial: FormControl;
    localSource: FormControl;
    foreignSource: FormControl;

  /**
   * Form controls
   * Market Profile
   */
  marketProfile: FormGroup;
    domesticSales: FormControl;
    exportSales: FormControl;
    countriesExportedTo: FormControl;
    yearExportedStarted: FormControl;

  /**
   * Form controls
   * Business Profile
   */
  businessProfile: FormGroup;
    businessOwnership: FormControl;
    specifyOwnership: FormControl;
    localOwnership: FormControl;
    foreignOwnership: FormControl;
    foreignNationality: FormControl;
    yearEstablished: FormControl;
    mainlineOfBusiness: FormControl;
    specifyBusinessLine: FormControl;
    typeOfBusiness: FormControl;
    specifyBusinessOrgType: FormControl;
    standardCertification: FormControl;
    specifyCertification: FormControl;
    tradeAssoc: FormControl;
    internationalAwards: FormControl;
    capitalizaion: FormControl;
    employeeNumber: FormControl;
    genderDistributionM: FormControl;
    genderDistributionF: FormControl;
    IPORegistrationNo: FormControl;
    ownerFirstName: FormControl;
    ownerLastName: FormControl;
    ownerDesignation: FormControl;
    ownerGender: FormControl;
    mainCompany: FormControl;
    
  /**
   * Form controls
   * Requested Assistance
   */
  requestedAssistance: FormControl;


  createFormControls(){
    // Business Information
    this.businessName = new FormControl('asd',Validators.required),
    this.officeAddress = new FormControl('ads',Validators.required),
    this.province = new FormControl(this.selectedProvinceAddress,Validators.required),
    this.city = new FormControl(this.selectedCityAddress,Validators.required),
    this.zipCode = new FormControl('asd'),
    this.factoryAddress = new FormControl('address 123'),
    this.factoryProvince = new FormControl(this.selectedProvince),
    this.factoryCity = new FormControl(this.selectedCity),
    this.telNo = new FormControl('asd',Validators.required),
    this.faxNo = new FormControl('asd',Validators.required),
    this.website = new FormControl(''),
    this.email = new FormControl('asd',Validators.required),
    this.alternateEmail = new FormControl('asd',Validators.required),
    this.supplierInclude = new FormControl('asd',Validators.required),
    this.firstName = new FormControl('asd',Validators.required),
    this.lastName = new FormControl('asd',Validators.required),
    this.position = new FormControl('asd',Validators.required)

    // Products Services
    this.productLines = new FormControl('productlines',Validators.required),
    this.brandNames = new FormControl('brand names'),
    this.maxCapacity = new FormControl('100'),
    this.actualCapacity = new FormControl('43')

    // Raw Material
    this.rawMaterial = new FormControl('test'),
    this.localSource = new FormControl([]),
    this.foreignSource = new FormControl([])

    // Market Profile
    this.domesticSales = new FormControl('sales'),
    this.exportSales = new FormControl('sales'),
    this.countriesExportedTo = new FormControl([]),
    this.yearExportedStarted = new FormControl('1993')

    // Business Profile
    this.businessOwnership = new FormControl('',Validators.required),
    this.specifyOwnership = new FormControl('spec ownership',Validators.required),
    this.localOwnership = new FormControl('test 321'),
    this.foreignOwnership = new FormControl('test 123'),
    this.foreignNationality = new FormControl('test nationality'),
    this.yearEstablished = new FormControl('1993'),
    this.mainlineOfBusiness = new FormControl(this.lineBusiness,Validators.required),
    this.specifyBusinessLine = new FormControl('business line'),
    this.typeOfBusiness = new FormControl(this.typeofBusiness,Validators.required),
    this.specifyBusinessOrgType = new FormControl('type of org',Validators.required),
    this.standardCertification = new FormControl(this.standard_specfification),
    this.specifyCertification = new FormControl('spec cert',Validators.required),
    this.tradeAssoc = new FormControl(this.trade_association),
    this.internationalAwards = new FormControl('intl award',Validators.required),
    this.capitalizaion = new FormControl('',Validators.required),
    this.employeeNumber = new FormControl('',Validators.required),
    this.genderDistributionM = new FormControl('13'),
    this.genderDistributionF = new FormControl('14'),
    this.IPORegistrationNo = new FormControl('12345'),
    this.ownerFirstName = new FormControl('juan',Validators.required),
    this.ownerLastName = new FormControl('dela cruz',Validators.required),
    this.ownerDesignation = new FormControl('manager',Validators.required),
    this.ownerGender = new FormControl('',Validators.required),
    this.mainCompany = new FormControl('company')

    // Requested Assistance
    this.requestedAssistance = new FormControl('')
  }

  createForm(){

  this.supplierForm = this.fb.group({
      // Business Information
      businessName: this.businessName,
      address: this.fb.group({
        officeAddress: this.officeAddress,
        province: this.province,
        city: this.city,
        zipCode: this.zipCode,
        factoryAddress: this.factoryAddress,
        factoryProvince: this.factoryProvince,
        factoryCity: this.factoryCity
      }),
      contactDetails: this.fb.group({
        telNo: this.telNo,
        faxNo: this.faxNo,
        website: this.website,
        email: this.email,
        alternateEmail: this.alternateEmail,
        supplierInclude: this.supplierInclude
      }),
      contactPersonInfo: this.fb.group({
        firstName: this.firstName,
        lastName: this.lastName,
        position: this.position
      }),
      // Products Services
      productServices: this.fb.group({
        productLines: this.productLines,
        brandNames: this.brandNames
      }),
      productCapacity: this.fb.group({
        maxCapacity: this.maxCapacity,
        actualCapacity: this.actualCapacity
      }),
      // Raw Materials
      rawMaterials: this.fb.group({
        rawMaterial: this.rawMaterial,
        localSource: this.localSource,
        foreignSource: this.foreignSource
      }),
      // Market Profile
      marketProfile: this.fb.group({
        domesticSales: this.domesticSales,
        exportSales: this.exportSales,
        countriesExportedTo: this.countriesExportedTo,
        yearExportedStarted: this.yearExportedStarted
      }),
      // Business Profile
      businessProfile: this.fb.group({
        businessOwnership: this.businessOwnership,
        specifyOwnership: this.specifyOwnership,
        localOwnership: this.localOwnership,
        foreignOwnership: this.foreignOwnership,
        foreignNationality: this.foreignNationality,
        yearEstablished: this.yearEstablished,
        mainlineOfBusiness: this.mainlineOfBusiness,
        specifyBusinessLine: this.specifyBusinessLine,
        typeOfBusiness: this.typeOfBusiness,
        specifyBusinessOrgType: this.specifyBusinessOrgType,
        standardCertification: this.standardCertification,
        specifyCertification: this.specifyCertification,
        tradeAssoc: this.tradeAssoc,
        internationalAwards: this.internationalAwards,
        capitalizaion: this.capitalizaion,
        employeeNumber: this.employeeNumber,
        genderDistributionM: this.genderDistributionM,
        genderDistributionF: this.genderDistributionF,
        IPORegistrationNo: this.IPORegistrationNo,
        ownerFirstName: this.ownerFirstName,
        ownerLastName: this.ownerLastName,
        ownerDesignation: this.ownerDesignation,
        ownerGender: this.ownerGender,
        mainCompany: this.mainCompany

      }),
      // Requested Assistance
      requestedAssistance: this.requestedAssistance
    
    })
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

  }

  onErrorScroll(): void{
    $('html, body').animate({
      scrollTop: $('.has-error').offset().top
    }, 500)
  }
  

  /* variables */
  current: number = 0;
  index: string = 'first'
  submitted: boolean = false;
  radio_error: boolean = false;

  next(){
    switch(this.index){
      case 'first':
      this.submitted = true;
        if (this.supplierForm.controls['address'].invalid || this.supplierForm.controls['businessName'].invalid || 
          this.supplierForm.controls['contactDetails'].invalid || this.supplierForm.controls['contactPersonInfo'].invalid || 
          this.supplierToInclude === null){
          $('li#_page1.active').addClass('has-error');
          // $('#supplierBody ul #_page1.active i').removeAttr('class').addClass('not-valid')

          this.onErrorScroll();
        }else{
          $('li#_page1.active').removeClass('has-error');
          // $('#supplierBody ul #_page1.active i').removeAttr('class').addClass('fa fa-check-circle-o')
          $(window).scrollTop(0);

          this.submitted = false;
          this.current += 1 
          this.changeContent();
        }
      break;
      case 'second':
      this.submitted = true;
        if (this.supplierForm.controls['productServices'].invalid || this.supplierForm.controls['productCapacity'].invalid){
          $('li#_page2.active').addClass('has-error');
          // $('#supplierBody ul #_page2.active i').removeAttr('class').addClass('not-valid')

          this.onErrorScroll();
        }else{
          
          $('li#_page2.active').removeClass('has-error');
          // $('#supplierBody ul #_page2.active i').removeAttr('class').addClass('fa fa-check-circle-o')
          $(window).scrollTop(0);

          this.submitted = false;
          this.current += 1
          this.changeContent();
        }
      break;
      case 'third':
      this.submitted = true;
        // $('#supplierBody ul li.active i').removeAttr('class').addClass('fa fa-check-circle-o')
        $(window).scrollTop(0);

        this.current += 1
        this.changeContent();
      break;
      case 'fourth':
        // $('#supplierBody ul li.active i').removeAttr('class').addClass('fa fa-check-circle-o')
        $(window).scrollTop(0);

        this.submitted = false;
        this.current += 1
        this.changeContent();
      break;
      case 'fifth':
      this.submitted = true;
        if (this.supplierForm.controls['businessProfile'].invalid){
          $('li#_page5.active').addClass('has-error');
          // $('#supplierBody ul #_page5.active i').removeAttr('class').addClass('not-valid')
          this.radio_error = true;

          this.onErrorScroll();
        }else{
          $('li#_page5.active').removeClass('has-error');
          // $('#supplierBody ul #_page5.active i').removeAttr('class').addClass('fa fa-check-circle-o')
          $(window).scrollTop(0);

          this.radio_error = false;
          this.submitted = false;
          this.current += 1
          this.changeContent();
        }
      break;
      // case 'sixth':
      //   $('#supplierBody ul li.active i').removeAttr('class').addClass('fa fa-check-circle-o')
      //   this.current += 1
      //   this.changeContent();
      // break
    }
    
  }
  
  previous() {

    this.current -= 1;
    this.changeContent();
  }

  jumpToFirst(){
    $('li#_page2.active').removeClass('has-error');
    this.current = 0;
    this.changeContent();

  }

  jumpToSecond(){
    this.submitted = true;

    if (this.supplierForm.controls['address'].invalid || this.supplierForm.controls['businessName'].invalid || 
    this.supplierForm.controls['contactDetails'].invalid || this.supplierForm.controls['contactPersonInfo'].invalid || 
    this.supplierToInclude === null){
      $('li#_page1.active').addClass('has-error');
      // $('#supplierBody ul #_page1.active i').removeAttr('class').addClass('fa fa-id-card')
    }else{
      $('li#_page1.active').removeClass('has-error');
      // $('#supplierBody ul #_page1.active i').removeAttr('class').addClass('fa fa-check-circle-o')
    
      this.submitted = false;
      this.current = 1 
      this.changeContent();
    }
  }

  jumpToThird(){
    this.submitted = true;

    if (this.supplierForm.controls['productServices'].invalid || this.supplierForm.controls['productCapacity'].invalid){
      $('li#_page2.active').addClass('has-error');
      // $('#supplierBody ul #_page2.active i').removeAttr('class').addClass('not-valid')
    }else{
      $('li#_page2.active').removeClass('has-error');
      // $('#supplierBody ul #_page2.active i').removeAttr('class').addClass('fa fa-check-circle-o')

      this.submitted = false;
      this.current = 2
      this.changeContent();
    }
   
  }

  jumpToFourth(){
    $('li#_page5.active').removeClass('has-error');
    // $('#supplierBody ul #_page3.active i').removeAttr('class').addClass('fa fa-check-circle-o')
    this.current = 3;
    this.changeContent();

  }

  jumpToFifth(){
    // $('#supplierBody ul #_page4.active i').removeAttr('class').addClass('fa fa-check-circle-o')
    this.current = 4;
    this.changeContent();

  }

  jumpToSixth(){
    this.submitted = true;
    if (this.supplierForm.controls['businessProfile'].invalid){
      $('li#_page5.active').addClass('has-error');
      // $('#supplierBody ul #_page5.active i').removeAttr('class').addClass('not-valid')
      this.radio_error = true;
    }else{
      $('li#_page5.active').removeClass('has-error');
      // $('#supplierBody ul #_page5.active i').removeAttr('class').addClass('fa fa-check-circle-o')
      
      this.radio_error = false;
      this.submitted = false;
      this.current = 5
      this.changeContent();
    }
  }

  submit(value){
    value.supplierInclude = this.supplierToInclude;
    value.mainlineOfBusiness = this.lineBusiness;
    value.typeOfBusiness= this.typeofBusiness;
    value.standardCertification = this.standard_specfification

    console.log(value)
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'first';
        break;
      }
      case 1: {
        this.index = 'second';
        break;
      }
      case 2: {
        this.index = 'third';
        break;
      }
      case 3: {
        this.index = 'fourth';
        break;
      }
      case 4: {
        this.index = 'fifth';
        break;
      }
      case 5: {
        this.index = 'sixth';
        break;
      }
      default: {
        this.index = 'error';
      }
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

  specify_ownership: boolean = false;
  onRadioChange(){
    this.specify_ownership = true;
  }

  business_line_other: boolean = false;
  onLineBusinessChanged(label: Array<string>){
    if (label.indexOf("Others") > -1){
      this.business_line_other = true;
    }else{
      this.business_line_other = false;
    }
  }

  type_business_other: boolean = false;
  onTypeBusinessChanged(label: Array<string>){
    if (label.indexOf("Others") > -1){
      this.type_business_other = true;
    }else{
      this.type_business_other = false;
    }
  }

  standardspecification: boolean = false;
  onStandardSpecChanged(label: Array<string>){
    if (label.indexOf("Others") > -1){
      this.standardspecification = true;
    }else{
      this.standardspecification = false;
    }
  }
  
}
