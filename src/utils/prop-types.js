import PropTypes from 'prop-types';

export const ingredientPropType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

export const ingredientConfigPropType = PropTypes.shape({
  bun: PropTypes.PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  sauce: PropTypes.PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  main: PropTypes.PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
});

export const refsPropType = PropTypes.shape({
  current: PropTypes.instanceOf(Element),
});
