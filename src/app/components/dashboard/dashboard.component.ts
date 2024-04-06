import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { TitleSectionComponent } from "../title-section/title-section.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HeaderComponent, ProjectsComponent, SkillsComponent, FooterComponent, AboutComponent, TitleSectionComponent, ContactComponent]
})
export class DashboardComponent {

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Element with ID '${sectionId}' not found.`);
        }
      }

}
