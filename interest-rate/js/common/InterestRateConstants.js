// Copyright 2022, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Evan
 */

import interestRate from '../interestRate.js';
import Range from '../../../dot/js/Range.js';

const InterestRateConstants = {

  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,
  RANGE_0_TO_1: new Range( 0, 1 ),
  RANGE_0_TO_100: new Range( 0, 100 )
  //TODO
};

interestRate.register( 'InterestRateConstants', InterestRateConstants );
export default InterestRateConstants;