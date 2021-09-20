import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  appDetail = {
    path: '/remoteEntry.js',
    name: 'mfe1',
    component: 'MoviesComponent',
  };
}
