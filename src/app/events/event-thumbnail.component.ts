import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        class="w-32 h-32 rounded-full"
        [src]="event.image_url"
        alt="{{ event.name }}"
      />
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-2">{{ event.name }}</h2>
        <p class="text-gray-600 mb-4">{{ event.description }}</p>
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-700">
              <strong>Date:</strong> {{ event.date | date : 'fullDate' }}
            </p>
            <p class="text-gray-700">
              <strong>Location:</strong> {{ event.location.address }},
              {{ event.location.city }}, {{ event.location.country }}
            </p>
          </div>
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  `,
})
export class EventThumbnailComponent {
  @Input() event: any;
}
