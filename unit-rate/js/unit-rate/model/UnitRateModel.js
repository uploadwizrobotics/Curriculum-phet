// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Evan
 */

import unitRate from '../../unitRate.js';
import UnitRateConstants from '../../common/UnitRateConstants.js';
import Property from '../../../../axon/js/Property.js';

class UnitRateModel {

  constructor( ) {
    //TODO
  
    this.unitRateEstimationRangeproperty = new Property( UnitRateConstants.RANGE_0_TO_10 );
    this.unitRateOffsetIntoRangeProperty = new Property( 0 ); // Amount of offset into the current range
    this.unitRateEstimateProperty = new Property( 1 );
    this.unitRateOffsetIntoRangeProperty.value = 0;
    this.unitRateEstimationRangeproperty.link( range => {
      this.unitRateOffsetIntoRangeProperty.value = 0;
      this.unitRateEstimateProperty.value = range.min;
    } );

    this.unitRateOffsetIntoRangeProperty.link( offset => {
      this.unitRateEstimateProperty.value = Math.round( offset * 10 ) / 10; //eslint-disable-line bad-sim-text
    } );

  }
}

unitRate.register( 'UnitRateModel', UnitRateModel );
export default UnitRateModel;