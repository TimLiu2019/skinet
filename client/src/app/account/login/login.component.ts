import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private accountService: AccountService, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.activateRoute.snapshot.queryParams.returnUrl || '/shop';
    this.createLoginForm();

  }
  createLoginForm(){
    this.loginForm = new FormGroup({
      // orignal is ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$, below add '\' escape
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe(()=>{
     this.router.navigateByUrl(this.returnUrl);
    },error =>{
      console.log(error);
    });
  //  console.log(this.loginForm.value);
  }
}
