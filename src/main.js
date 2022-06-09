import TripPresenter from './presenter/trip-presenter.js';
import { generateDestPoint } from './mock/destination-event.js';
import { reformPoint } from './tools/reformer';

const TRIP_EVENTS_COUNT = 10;
const tripEvents = Array.from({ length: TRIP_EVENTS_COUNT }, () => reformPoint(generateDestPoint()));

const tripPresenter = new TripPresenter();
tripPresenter.init(tripEvents);
