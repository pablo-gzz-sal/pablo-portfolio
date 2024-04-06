import { Component, Input,  HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss'
})
export class TitleSectionComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input()
  title!: string;

  @Input()
  subtitle!: string;

  @Input()
  img!: string;

  isClicked = false;

  animationTriggered = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.animationTriggered) {
      const offsetTop = this.el.nativeElement.offsetTop;
      const windowHeight = window.innerHeight;
  
      // Check if the image is in the viewport
      if (window.scrollY >= offsetTop - windowHeight / 2) {
        this.animateImage();
      }
    }
  }

  rotateImage() {
    this.isClicked = !this.isClicked;
  }

  animateImage() {
    this.renderer.addClass(this.el.nativeElement.querySelector('img'), 'clicked');
    this.renderer.addClass(this.el.nativeElement.querySelector('h2'), 'ani');
    this.renderer.addClass(this.el.nativeElement.querySelector('h4'), 'ani');
    this.animationTriggered = true;
  }
  

}
