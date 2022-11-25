import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oppoSuits: any = ['Suresh', 'Akhil', 'Manu', 'Kiran']
  constructor(public fb: FormBuilder) { }
  oppoSuitsForm = this.fb.group({
    name: ['']
  })
  onSubmit() {
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }
}