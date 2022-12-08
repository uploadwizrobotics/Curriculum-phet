// Copyright 2022, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Kenny
 */

import comparingSuns from '../comparingSuns.js';
import Property from '../../../axon/js/Property.js';

const ComparingSunsConstants = {

  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,

  SCREEN_OPTIONS: {
    backgroundColorProperty: new Property( 'black' )
  }
};

comparingSuns.register( 'ComparingSunsConstants', ComparingSunsConstants );
export default ComparingSunsConstants;