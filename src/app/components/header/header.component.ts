import { Component } from '@angular/core';
import {
  faBook,
  faChalkboardTeacher,
  faHome,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { routeName } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routeName = routeName;

  faIcons: { icon: IconDefinition; route: string }[] = [
    {
      icon: faHome,
      route: routeName.home,
    },
    {
      icon: faBook,
      route: routeName.library,
    },
    {
      icon: faChalkboardTeacher,
      route: routeName.learn,
    },
  ];
}
