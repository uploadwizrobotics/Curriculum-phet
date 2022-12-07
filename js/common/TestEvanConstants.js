// Copyright 2022, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author evan
 */

import Property from '../../../axon/js/Property.js';
import testEvan from '../testEvan.js';

const TestEvanConstants = {

  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,

  SCREEN_OPTIONS: {

    backgroundColorProperty: new Property( 'black' )
  }

  //TODO
};

testEvan.register( 'TestEvanConstants', TestEvanConstants );
export default TestEvanConstants;