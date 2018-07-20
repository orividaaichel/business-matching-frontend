import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './components/header/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponentFooter } from './components/footer/nav/nav.component';
import { MainComponent } from './components/body/main/main.component';
import { RegistrationComponent } from './components/body/registration/registration.component';
import { BuyerFormComponent } from './components/body/buyer-form/buyer-form.component';
import { SupplierFormComponent } from './components/body/supplier-form/supplier-form.component';
import { SearchResultComponent } from './components/body/search-result/search-result.component';
import { ViewProductsComponent } from './components/body/view-products/view-products.component';
import { SupplierPageComponent } from './components/body/supplier-page/supplier-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/admin/index/index.component';
import { RouterModule, Routes} from '@angular/router';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {SelectModule} from 'ng-select';
import { ChecklistModule } from 'angular-checklist';
import { AppRoutingModule } from './/app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

//Admin Business Matching
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavigationComponent } from './components/admin/admin-navigation/admin-navigation.component';
import { AdminSupplierProfileComponent } from './components/admin/admin-supplier-profile/admin-supplier-profile.component';
import { AdminSupplierProductsComponent } from './components/admin/admin-supplier-products/admin-supplier-products.component';
import { AdminBuyerProfileComponent } from './components/admin/admin-buyer-profile/admin-buyer-profile.component';
import { AdminBuyerTradeleadComponent } from './components/admin/admin-buyer-tradelead/admin-buyer-tradelead.component';
import { AdminGeoInternationalComponent } from './components/admin/admin-geo-international/admin-geo-international.component';
import { AdminGeoPhilippinesComponent } from './components/admin/admin-geo-philippines/admin-geo-philippines.component';
import { AdminProdgroupProductCategoryComponent } from './components/admin/admin-prodgroup-product-category/admin-prodgroup-product-category.component';
import { AdminProdgroupServicesCategoryComponent } from './components/admin/admin-prodgroup-services-category/admin-prodgroup-services-category.component';
import { AdminProdgroupHsCodesComponent } from './components/admin/admin-prodgroup-hs-codes/admin-prodgroup-hs-codes.component';
import { AdminUnitOfMeasureComponent } from './components/admin/admin-unit-of-measure/admin-unit-of-measure.component';
import { AdminAssociationsComponent } from './components/admin/admin-associations/admin-associations.component';
import { AdminMainFormElementsComponent } from './components/admin/admin-main-form-elements/admin-main-form-elements.component';
import { AdminSubFormElementsComponent } from './components/admin/admin-sub-form-elements/admin-sub-form-elements.component';
import { MiniWebsiteComponent } from './mini-website/mini-website.component';
import { MwCustomNavComponent } from './mw-custom-nav/mw-custom-nav.component';
import { MwCompanydescComponent } from './mw-companydesc/mw-companydesc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavComponentFooter,
    MainComponent,
    RegistrationComponent,
    BuyerFormComponent,
    SupplierFormComponent,
    BannerComponent,
    LoginComponent,
    IndexComponent,
    SearchResultComponent,
    ViewProductsComponent,
    SupplierPageComponent,
    AdminNavigationComponent,
    AdminSupplierProfileComponent,
    AdminSupplierProductsComponent,
    AdminBuyerProfileComponent,
    AdminBuyerTradeleadComponent,
    AdminGeoInternationalComponent,
    AdminGeoPhilippinesComponent,
    AdminProdgroupProductCategoryComponent,
    AdminProdgroupServicesCategoryComponent,
    AdminProdgroupHsCodesComponent,
    AdminUnitOfMeasureComponent,
    AdminAssociationsComponent,
    AdminMainFormElementsComponent,
    AdminSubFormElementsComponent,
    MiniWebsiteComponent,
    MwCustomNavComponent,
    MwCompanydescComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarRouterModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    ChecklistModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
