/* eslint-disable camelcase */

export const reformPoint = (point) => ({
    basePrice: point.base_price,
    dateFrom: point.date_from,
    dateTo: point.date_to,
    destination: point.destination,
    id: point.id,
    isFavorite: point.is_favorite,
    offers: point.offers,
    type: point.type,
  });
  