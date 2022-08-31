import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading = false;

  constructor(private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  contactMeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    recaptcha: new FormControl(null, Validators.required),
  });
  sendMessage() {
    this.loading = true;
    this.http.post("https://us-central1-thanos-9b12c.cloudfunctions.net/webApi/api/v1/contact_me", this.contactMeForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.contactMeForm.reset();
        this.toastr.success(res["message"]);
      },
      (err) => {
        this.loading = false;
        this.contactMeForm.reset();
        this.toastr.error(err.error.message);
      }
    );
  }

}
