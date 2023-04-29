import PropTypes from 'prop-types';

export const ingredientPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
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
