import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css'],
})
export class AngularFormsComponent {
  
  models = ['Lambogini', 'Ferrari', 'BMW'];
  colors = ['Red', 'Black', 'Blue'];
Form: any;
}

onsubmit() {
console.warn(this.form.value);
}







