// Copyright 2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import interestRate from './interestRate.js';

type StringsType = {
  'interest-rate': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'nameStringProperty': LinkableProperty<string>;
  }
};

const InterestRateStrings = getStringModule( 'INTEREST_RATE' ) as StringsType;

interestRate.register( 'InterestRateStrings', InterestRateStrings );

export default InterestRateStrings;
