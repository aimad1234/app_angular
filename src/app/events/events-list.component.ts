import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <!-- <header class="bg-white-500 text-white p-4">
      <h2 class="text-3xl font-semibold text-gray-500 text-center">
        Parent Composant
      </h2>
      <hr />
    </header> -->
    <header class="bg-gray-500">
      <nav class="max-w-screen-sm mx-auto p-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="text-white text-xl font-semibold">
            <a href="#">Logo</a>
          </div>
          <!-- Navigation Links -->
          <div class="hidden sm:flex space-x-4">
            <a
              href="#"
              class="text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 rounded"
              >Home</a
            >
            <a
              href="#"
              class="text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 rounded"
              >About</a
            >
            <a
              href="#"
              class="text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 rounded"
              >Services</a
            >
            <a
              href="#"
              class="text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 rounded"
              >Contact</a
            >
          </div>
        </div>
      </nav>
    </header>
    <!-- <event-thumbnail
        [event]="event1"
        (eventClick)="handleEventClicked($event)"
      ></event-thumbnail> -->
    <!-- <h4 class="text-1xl font-semibold text-gray-600 text-center">
      {{ thumbnail.props
      }}
    </h4> -->
    <event-thumbnail
      [event]="event1"
      #thumbnail
      (eventClick)="handleEventClicked($event)"
    ></event-thumbnail>
  `,
})
export class EventsListComponent {
  title = 'Event List Component';
  event1 = {
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
  handleEventClicked(data: any) {
    console.log('receveid', data);
  }
}
