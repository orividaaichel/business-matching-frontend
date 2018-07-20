import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/body/main/main.component';
import { RegistrationComponent } from './components/body/registration/registration.component';
import { BuyerFormComponent } from './components/body/buyer-form/buyer-form.component';
import { SupplierFormComponent } from './components/body/supplier-form/supplier-form.component';
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/admin/index/index.component';
import { SearchResultComponent } from './components/body/search-result/search-result.component';
import { ViewProductsComponent } from './components/body/view-products/view-products.component';
import { SupplierPageComponent } from './components/body/supplier-page/supplier-page.component';

//Admin Business Matching
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

const routes : Routes = [
  {path: ''             , component: MainComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: 'buyer-form'   , component: BuyerFormComponent},
  {path: 'supplier-form', component: SupplierFormComponent},
  {path: 'search-result', component: SearchResultComponent},
  {path: 'view-product' , component: ViewProductsComponent},
  {path: 'supplier-page', component: SupplierPageComponent},
  {path: 'user/login'   , component: LoginComponent},
  {path: 'admin'        , component: AdminNavigationComponent},
  {path: 'admin/admin-supplier-profile'  , component: AdminSupplierProfileComponent},
  {path: 'admin/admin-supplier-products' , component: AdminSupplierProductsComponent},
  {path: 'admin/admin-buyer-profile'     , component: AdminBuyerProfileComponent},
  {path: 'admin/admin-buyer-tradelead'   , component: AdminBuyerTradeleadComponent},
  {path: 'admin/admin-geo-international' , component: AdminGeoInternationalComponent},
  {path: 'admin/admin-geo-philippines'   , component: AdminGeoPhilippinesComponent},
  {path: 'admin/admin-prodgroup-product-category'  , component: AdminProdgroupProductCategoryComponent},
  {path: 'admin/admin-prodgroup-services-category' , component: AdminProdgroupServicesCategoryComponent},
  {path: 'admin/admin-prodgroup-hscodes'           , component: AdminProdgroupHsCodesComponent},
  {path: 'admin/admin-unit-of-measure'             , component: AdminUnitOfMeasureComponent},
  {path: 'admin/admin-associations'                , component: AdminAssociationsComponent},
  {path: 'admin/admin-main-form-elements'          , component: AdminMainFormElementsComponent},
  {path: 'admin/admin-sub-form-elements'           , component: AdminSubFormElementsComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
