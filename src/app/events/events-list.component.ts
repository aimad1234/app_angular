import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h2>Composant Parent</h2>
      <event-thumbnail [event]="event1"></event-thumbnail>
      <hr />
    </div>
  `,
})
export class EventsListComponent {
  title = 'Event List Component';
  event1 = {
    id: 1,
    name: 'Angular Workshop 1',
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
