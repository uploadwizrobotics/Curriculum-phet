// Copyright 2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import compareSun from './compareSun.js';

type StringsType = {
  'compare-sun': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'nameStringProperty': LinkableProperty<string>;
  }
};

const CompareSunStrings = getStringModule( 'COMPARE_SUN' ) as StringsType;

compareSun.register( 'CompareSunStrings', CompareSunStrings );

export default CompareSunStrings;
