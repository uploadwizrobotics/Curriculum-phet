// Copyright 2023, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Avital
 */

import frogPopulation from '../frogPopulation.js';
import Property from '../../../axon/js/Property.js';

const FrogPopulationConstants = {

  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,

  SCREEN_OPTIONS: {

    backgroundColorProperty: new Property( '#2C863C' )
  }
};

frogPopulation.register( 'FrogPopulationConstants', FrogPopulationConstants );
export default FrogPopulationConstants;