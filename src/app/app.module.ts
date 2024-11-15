import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AccountCreationComponent } from "./accounts/account-creation/account-creation.component";

@NgModule({
  imports: [BrowserModule, CommonModule, ReactiveFormsModule],
  declarations: [AppComponent, AccountCreationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }