// Copyright 2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import unitRate from './unitRate.js';

type StringsType = {
  'unit-rate': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'nameStringProperty': LinkableProperty<string>;
  }
};

const UnitRateStrings = getStringModule( 'UNIT_RATE' ) as StringsType;

unitRate.register( 'UnitRateStrings', UnitRateStrings );

export default UnitRateStrings;
