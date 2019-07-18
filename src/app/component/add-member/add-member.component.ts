import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,FormControl ,Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AddMember } from "../../model/add-member";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  member : AddMember = new AddMember();
  addForm : FormGroup;
  constructor(
     private formBuilder : FormBuilder,
     private router : Router,
    ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        'name' : new FormControl(this.member.name , [Validators.required]),
        'desg' : new FormControl(this.member.desg , [Validators.required]),
        'mobile' : new FormControl(this.member.mobile , [Validators.required]),
        'email' : new FormControl(this.member.email , [Validators.required]),
        'password': new FormControl(this.member.password , [Validators.required , Validators.minLength(6)]),

      }
    )
  }

}
