// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Evan
 */

import interestRate from '../../interestRate.js';
import InterestRateConstants from '../../common/InterestRateConstants.js';
import Property from '../../../../axon/js/Property.js';

class InterestRateModel {
  
  constructor( ) {
    //TODO

    this.interestEstimationRangeProperty = new Property( InterestRateConstants.RANGE_0_TO_1 );
    this.interestOffsetIntoRangeProperty = new Property( 0 ); // Amount of offset into the current range
    this.interestEstimateProperty = new Property( 1 );
    this.interestOffsetIntoRangeProperty.value = 0;
    this.interestEstimationRangeProperty.link( range => {
      this.interestOffsetIntoRangeProperty.value = 0;
      this.interestEstimateProperty.value = range.min;
    } );

    this.interestOffsetIntoRangeProperty.link( offset => {
      this.interestEstimateProperty.value = Math.round( offset * 100 ) / 10; //eslint-disable-line bad-sim-text
    } );

    this.yearEstimationRangeProperty = new Property( InterestRateConstants.RANGE_0_TO_100 );
    this.yearsOffsetIntoRangeProperty = new Property( 0 ); // Amount of offset into the current range
    this.yearsEstimateProperty = new Property( 1 );
    this.yearsOffsetIntoRangeProperty.value = 0;
    this.yearEstimationRangeProperty.link( range => {
      this.yearsOffsetIntoRangeProperty.value = 0;
      this.yearsEstimateProperty.value = range.min;
    } );

    this.yearsOffsetIntoRangeProperty.link( offset => {
      this.yearsEstimateProperty.value = Math.round( offset ); //eslint-disable-line bad-sim-text
    } );
  }


}

interestRate.register( 'InterestRateModel', InterestRateModel );
export default InterestRateModel;