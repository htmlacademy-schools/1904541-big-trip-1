import {renderTemplate, RenderPosition} from './render.js';
import {createTripTabsTemplate} from './view/trip-tabs-view.js';
import {createTripFiltersTemplate} from './view/trip-filters-view.js';
import {createTripSortTemplate} from './view/trip-sort-view.js';
import {createEventEditItemTemplate} from './view/event-edit-item-view.js';
import {createTripEventsItemTemplate} from './view/trip-events-item-view.js';
import {createFormCreateTemplate} from './view/event-create-item-view.js';
import {сreateEventListTemplate} from './view/event-list-view.js';

const TripSiteMenuElement = document.querySelector('.trip-controls__navigation');
const TripFiltersElement = document.querySelector('.trip-controls__filters');
const TripEventsElement = document.querySelector('.trip-events');


renderTemplate(TripSiteMenuElement, createTripTabsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(TripFiltersElement, createTripFiltersTemplate(), RenderPosition.BEFOREEND);
renderTemplate(TripEventsElement, createTripSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(TripEventsElement, сreateEventListTemplate(), RenderPosition.BEFOREEND);

const TripEventsListElement = TripEventsElement.querySelector('.trip-events__list');

renderTemplate(TripEventsListElement, createFormCreateTemplate(), RenderPosition.BEFOREEND);
renderTemplate(TripEventsListElement, createEventEditItemTemplate(), RenderPosition.BEFOREEND);
for (let i = 0; i < 3; i++) {
  renderTemplate(TripEventsListElement, createTripEventsItemTemplate(), RenderPosition.BEFOREEND);
}
