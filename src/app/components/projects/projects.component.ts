import { Component } from '@angular/core';
import { TitleSectionComponent } from "../title-section/title-section.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [TitleSectionComponent]
})
export class ProjectsComponent {

}
