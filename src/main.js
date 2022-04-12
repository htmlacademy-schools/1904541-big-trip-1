import {renderTemplate, RenderPosition} from './render.js';
import {createTripTabsTemplate} from './view/trip-tabs-view.js';
import {createTripFiltersTemplate} from './view/trip-filters-view.js';
import {createTripSortTemplate} from './view/trip-sort-view.js';
import {createEventEditItemTemplate} from './view/event-edit-item-view.js';
import {createTripEventsItemTemplate} from './view/trip-events-item-view.js';
import {createFormCreateTemplate} from './view/event-create-item-view.js';
import {сreateEventListTemplate} from './view/event-list-view.js';
import { createTripInfoTemplate } from './view/trip-info-view.js';
import { generateDestPoint } from './mock/destination-event.js';
import { sortPointsByDate } from './tool.js';

const TRIP_EVENTS_COUNT = 10;

const tripEvents = sortPointsByDate(Array.from({length: TRIP_EVENTS_COUNT}, generateDestPoint));

const TripSiteMenuElement = document.querySelector('.trip-controls__navigation');
const TripFiltersElement = document.querySelector('.trip-controls__filters');
const TripEventsElement = document.querySelector('.trip-events');

renderTemplate(TripEventsElement, createTripInfoTemplate(tripEvents), RenderPosition.AFTERBEGIN);
renderTemplate(TripSiteMenuElement, createTripTabsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(TripFiltersElement, createTripFiltersTemplate(), RenderPosition.BEFOREEND);
renderTemplate(TripEventsElement, createTripSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(TripEventsElement, сreateEventListTemplate(), RenderPosition.BEFOREEND);

const TripEventsListElement = TripEventsElement.querySelector('.trip-events__list');

renderTemplate(TripEventsListElement, createFormCreateTemplate(tripEvents[0]), RenderPosition.BEFOREEND);
renderTemplate(TripEventsListElement, createEventEditItemTemplate(tripEvents[0]), RenderPosition.BEFOREEND);
for (let i = 1; i < TRIP_EVENTS_COUNT; i++) {
  renderTemplate(TripEventsListElement, createTripEventsItemTemplate(tripEvents[i]), RenderPosition.BEFOREEND);
}
