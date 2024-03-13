import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { TitleSectionComponent } from "../title-section/title-section.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HeaderComponent, ProjectsComponent, SkillsComponent, FooterComponent, AboutComponent, TitleSectionComponent]
})
export class DashboardComponent {

}
