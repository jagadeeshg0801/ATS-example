import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PTreeTableComponent } from './p-tree-table/p-tree-table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeTableModule} from 'primeng/treetable';
import {HttpClientModule} from'@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';

import {FormsModule} from '@angular/forms';
import { TreeService } from './tree.service';
@NgModule({   
  declarations: [
    AppComponent,
    PTreeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
