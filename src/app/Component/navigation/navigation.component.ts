import { Component, Input } from '@angular/core';
import { SharedService } from '../share/shared.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ width: '17rem' })),
      state('closed', style({ width: '0px' })),
      transition('open <=> closed', animate('0.3s')),
    ]),
  ],
})
export class NavigationComponent {
  isMenuOpen = true;


  username: string = 'Mureed Sultan';
  email: string = 'mureed@gmail.com';
  constructor(private sharedService: SharedService) {
    this.sharedService.toggleNavigationEvent.subscribe(() => {
      this.toggleMenu();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  navigation: any[] = [
    {
      id: 'dashboards',
      title: 'Dashboards',
      subtitle: 'Unique dashboard designs',
      type: 'group',
      icon: 'heroicons_outline:home',
      children: [
        {
          id: 'dashboards.project',
          title: 'Project',
          type: 'basic',
          icon: 'assignment_turned_in',
          link: '/project'
        },
        {
          id: 'dashboards.analytics',
          title: 'Analytics',
          type: 'basic',
          icon: 'pie_chart',
          link: 'designation'
        },
        {
          id: 'dashboards.finance',
          title: 'Finance',
          type: 'basic',
          icon: 'monetization_on',
          link: '/dashboards/finance'
        },
        {
          id: 'dashboards.crypto',
          title: 'Crypto',
          type: 'basic',
          icon: 'card_membership',
          link: '/dashboards/crypto'
        }
      ]
    }
  ];
}
