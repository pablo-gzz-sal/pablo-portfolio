import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSectionComponent } from "../title-section/title-section.component";

interface Skills {
  label: string;
  title: string;
  logo: string;
  color: string;
}

@Component({
    selector: 'app-skills',
    standalone: true,
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [CommonModule, TitleSectionComponent]
})
export class SkillsComponent {
  skills: Skills[] = [
    { label: 'Language', title: 'Javascript', logo: '../../../assets/js.png', color: '#fae04a' },
    { label: 'Language', title: 'Typescript', logo: '../../../assets/typescript.png', color: '#4476c0' },
    { label: 'Framework', title: 'Angular', logo: '../../../assets/angularpng.png', color: '#b42531' },
    { label: 'Framework', title: 'React', logo: '../../../assets/React.png', color: '#558599' },
    { label: 'Styling', title: 'Tailwind', logo: '../../../assets/Tailwind.png', color: '#62bcf3' },
    { label: 'Language', title: 'Python', logo: '../../../assets/python.png', color: '#fadf6e' },
    { label: 'Framework', title: 'Nest.js', logo: '../../../assets/NestJS.svg', color: '#ce3951' },
    { label: 'Framework', title: 'Node.js', logo: '../../../assets/nodejspng.png', color: '#669e4d' },
    { label: 'Cloud', title: 'Firebase', logo: '../../../assets/firebasepng.png', color: '#f7cd51' },
    { label: 'Cloud', title: 'Azure', logo: '../../../assets/azure.png', color: '#265397' },
    // { label: 'Blockchain', title: 'Chainalysis Reactor', logo: 'logo' },
    // { label: 'Linux', title: 'Ubuntu, Kali', logo: 'logo' },
    // { label: 'Cybersecurity', title: 'NMAP, Wireshark', logo: 'logo' },
    // { label: 'Cybersecurity', title: 'Metasploit, Meterpreter', logo: 'logo' },
    // { label: 'Cybersecurity', title: 'Volatility', logo: 'logo' },
  ];
item: any;
}
