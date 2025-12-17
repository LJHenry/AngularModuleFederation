import { Component, signal } from '@angular/core';

// Borrowed geeksforgeeks code to create navigation tabs with Mat
interface ILink {
    path: string;
    label: string;
}

@Component({
  selector: 'app-cmd-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
})
export class AppComponent {
  protected readonly title = signal('host');

  constructor() {}

    links: ILink[] = [
        { path: '', label: 'Home'},
        { path: 'sim-controls/sim-controls', label: 'Sim Controls' },
        { path: 'typhoon-control/typhoon-control', label: 'Platform Controls' },
        { path: 'link-16/link-16', label: 'Communication' },
    ];

    activePath = this.links[0].path;

    onActivate(path: string) {
        this.activePath = path;
    }
}
