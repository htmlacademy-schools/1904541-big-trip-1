export const sortPointsByDay = (p1, p2) => p1.dateFrom - p2.dateFrom;

export const sortPointsByTime = (p1, p2) =>
  (p2.dateTo - p2.dateFrom) - (p1.dateTo - p1.dateFrom);

export const sortPointsByPrice = (p1, p2) => p2.basePrice - p1.basePrice;

export const createFormOffersTemplate = (offerArray, type) => {
  const getOffersTemplate = (offers) => {
    const offersToRender = offers.filter((offer) => offer.isActive);
    if (offersToRender.length === 0) { return ''; }

    const getListItemTemplate = (offer) => {
      const { title, price } = offer;
      return `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>`;
    };

    return offersToRender.map((offer) => getListItemTemplate(offer)).join('\n');
  };

  const typeOffers = offerArray.filter((offerStruct) => offerStruct.type === type);

  if (typeOffers.length > 0) {
    const offersTemplate = getOffersTemplate(typeOffers[0].offers);

    if (offersTemplate !== '')
    {return `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${offersTemplate}
        </div>
      </section>`;}
  }

  return '';
};

export const createOffersTemplate = (offerArray, type) => {
  const getOffersTemplate = (offers) => {
    if (offers.length === 0) { return ''; }

    const getListItemTemplate = (offer) => {
      const { id, title, price, isActive } = offer;

      return `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${id}" type="checkbox" name="event-offer-${type}" ${isActive ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${type}-${id}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>`;
    };

    return offers.map((offer) => getListItemTemplate(offer)).join('\n');
  };

  const typeOffers = offerArray.filter((offerStruct) => offerStruct.type === type);

  if (typeOffers.length > 0) {
    const offersTemplate = getOffersTemplate(typeOffers[0].offers);

    if (offersTemplate !== '')
    {return `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${offersTemplate}
        </div>
      </section>`;}
  }

  return '';
};

export const createFormDescription = (description, pictures) => {
  if (!description?.length && !pictures?.length) { return ''; }

  if (!description) { description = ''; }

  const picturesTemplate = pictures
    ?.map((pic) => `<img class="event__photo" src="${pic.src}" alt="${pic.description}">`)
    ?.join('\n');

  const picturesContainer = !picturesTemplate
    ? ''
    : `<div class="event__photos-container">
      <div class="event__photos-tape">
        ${picturesTemplate}
      </div>
    </div>` ;

  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>
    ${picturesContainer}
  </section>`;
};
