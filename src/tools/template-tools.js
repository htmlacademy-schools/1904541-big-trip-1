export const sortPointsByDay = (p1, p2) => p1.dateFrom - p2.dateFrom;

export const sortPointsByTime = (p1, p2) =>
  (p2.dateTo - p2.dateFrom) - (p1.dateTo - p1.dateFrom);

export const sortPointsByPrice = (p1, p2) => p2.basePrice - p1.basePrice;

export const createFormOffersTemplate = (offerArray, isCreation = false) => {
  const getOffersTemplate = (offers) => {  
    const getListItemTemplate = (offer) => {
      const { title, price, isActive, type, id } = offer;
      const isChecked = isActive && !isCreation ? ' checked=""' : '';
      return `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${id}" type="checkbox" name="event-offer-${type}" ${isChecked}>
        <label class="event__offer-label" for="event-offer-${type}-${id}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>
`;
    };

    return offers.map((offer) => getListItemTemplate(offer)).join('\n');
  };

  //const typeOffers = offerArray.filter((offerStruct) => offerStruct.type === type);

  if (offerArray.length > 0) {
    // const offersTemplate = getOffersTemplate(typeOffers[0].offers);

    // if (offersTemplate !== ''){
      return `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${getOffersTemplate(offerArray)}
        </div>
      </section>`;
    // }
  }

  return '';
};

export const createOffersTemplate = (offerArray) => {

    const getListItemTemplate = (offer) => {
      const { title, price, isActive } = offer;
      if(isActive){
      return `<li class="event__offer">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
        </li>`;
      }
    };

  return offerArray.map(getListItemTemplate).join('');


  // const typeOffers = offerArray.filter((offerStruct) => offerStruct.type === type);
  // const offersTemplate = getOffersTemplate(typeOffers[0].offers);
  // console.log(offersTemplate);

  // // if (typeOffers.length > 0) {
  // //   const offersTemplate = getOffersTemplate(typeOffers[0].offers);

  // //   if (offersTemplate !== '')
  // // {return `<section class="event__section  event__section--offers">
  // //     <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  // //     <div class="event__available-offers">
  // //     ${offersTemplate}
  // //     </div>
  // //   </section>`;}
  // // }

  // return offersTemplate;
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
