import {
  Component,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { TitleSectionComponent } from '../title-section/title-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [TitleSectionComponent],
})
export class AboutComponent {
  private observer: IntersectionObserver;
  @HostBinding('class.animate__animated') animateClass = true;

  constructor(private element: ElementRef) {
    this.observer = new IntersectionObserver(this.onIntersection.bind(this));
  }

  ngOnInit() {
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.element.nativeElement.classList.add(
          'animate__fadeInUp',
          'animate__slow'
        );
      }
    });
  }
}
