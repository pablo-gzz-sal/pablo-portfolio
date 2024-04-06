import { Component, OnInit, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
})
export class ContactComponent implements OnInit {
  formData: any = {
    name: '',
    email: '',
    message: '',
  };

  formDisabled: boolean = true;

  constructor(
    private router: Router,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.formDisabled = true;
    console.log(this.formDisabled);
    
    this.renderer.removeClass(document.body, 'menu-opened');
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        switchMap(() => timer(600))
      )
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  submitForm() {
    // this.contactService.addContact(this.formData).subscribe(
    //   (response) => {
    //     console.log('Contact added successfully:', response);
    //     this.resetForm();
    //     this.formDisabled = false;
    //   },
    //   (error) => {
    //     console.error('Error adding contact:', error);
    //   }
    // );
    console.log(this.formData);
    
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
