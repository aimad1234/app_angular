import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent {
  title = 'Event List Component';
  event = {
    id: 1,
    name: 'Angular Workshop',
    date: new Date(2024, 11, 15), // December 15, 2024
    location: {
      address: '123 Angular Lane',
      city: 'Techville',
      country: 'Online',
    },
    image_url: './assets/angular-logo.png',
    description: 'A workshop on Angular best practices and new features.',
  };
}
