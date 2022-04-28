import EmptyListView from './view/empty-list-view.js';
import {renderTemplate, RenderPosition} from './render.js';
import TripTabsView from './view/trip-tabs-view.js';
import TripFilterView from './view/trip-filters-view.js';
import TripSortView from './view/trip-sort-view.js';
import EventEditItemView from './view/event-edit-item-view.js';
import EventCreateItemView from './view/event-create-item-view.js';
import EventListView from './view/event-list-view.js';
import TripInfoView from './view/trip-info-view.js';
import { generateDestPoint } from './mock/destination-event.js';
import { sortPointsByDate } from './tool.js';
import TemplateView from './view/template-view.js';
import { reformPoint } from './reformer';

const TRIP_EVENTS_COUNT = 20;
const tripEvents = sortPointsByDate(Array.from({ length: TRIP_EVENTS_COUNT }, () => reformPoint(generateDestPoint())));

const tripMainElement = document.querySelector('.trip-main');
const siteMenuElement = tripMainElement.querySelector('.trip-controls__navigation');
const filterElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

renderTemplate(tripMainElement, new TripInfoView(tripEvents).element, RenderPosition.AFTERBEGIN);
renderTemplate(siteMenuElement, new TripTabsView().element, RenderPosition.BEFOREEND);
renderTemplate(filterElement, new TripFilterView().element, RenderPosition.BEFOREEND);

if (tripEvents?.length > 0) {
  renderTemplate(tripEventsElement, new TripSortView().element, RenderPosition.BEFOREEND);
  renderTemplate(tripEventsElement, new EventListView().element, RenderPosition.BEFOREEND);
}
else {
  const message = 'Click New Event to create your first point';
  renderTemplate(tripEventsElement, new EmptyListView(message).element, RenderPosition.BEFOREEND);
}

const eventListElement = tripEventsElement.querySelector('.trip-events__list');

if (tripEvents?.length > 0) { renderTemplate(eventListElement, new EventCreateItemView(tripEvents[0]).element, RenderPosition.BEFOREEND); }

const renderPoint = (listElement, point) => {
  const pointComponent = new TemplateView(point);
  const formEditComponent = new EventEditItemView(point);

  const replacePointToForm = () => {
    listElement.replaceChild(formEditComponent.element, pointComponent.element);
  };

  const replaceFormToPoint = () => {
    listElement.replaceChild(pointComponent.element, formEditComponent.element);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  formEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  formEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  renderTemplate(listElement, pointComponent.element, RenderPosition.BEFOREEND);
};

for (let i = 0; i < TRIP_EVENTS_COUNT; i++) {
  renderPoint(eventListElement, tripEvents[i]);
}
