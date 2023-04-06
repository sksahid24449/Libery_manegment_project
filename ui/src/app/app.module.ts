import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { PublishersComponent } from './publishers/publishers.component';
import { StudentComponent } from './students/students.component';
import { AuthorComponent } from './author/author.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddBooksComponent } from './add-books/add-books.component';
import { HttpClientModule} from '@angular/common/http';
import { AddStudentsComponent } from './add-students/add-students.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddPublishersComponent } from './add-publishers/add-publishers.component'

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AdminComponent,
    PublishersComponent,
    StudentComponent,
    AuthorComponent,
    SidenavComponent,
    HomeComponent,
    AddAdminComponent,
    AddBooksComponent,
    AddStudentsComponent,
    AddLoansComponent,
    AddAuthorsComponent,
    AddPublishersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
