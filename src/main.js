import TripPresenter from './presenter/trip-presenter.js';
import { generateDestPoint } from './mock/destination-event.js';
import { sortPointsByDate } from './tools/template-tools.js';
import { reformPoint } from './tools/reformer';

const TRIP_EVENTS_COUNT = 20;
const tripEvents = sortPointsByDate(Array.from({ length: TRIP_EVENTS_COUNT }, () => reformPoint(generateDestPoint())));

const tripPresenter = new TripPresenter();
tripPresenter.init(tripEvents);
