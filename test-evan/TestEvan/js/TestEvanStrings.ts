// Copyright 2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import testEvan from './testEvan.js';

type StringsType = {
  'test-evan': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'nameStringProperty': LinkableProperty<string>;
  }
};

const TestEvanStrings = getStringModule( 'TEST_EVAN' ) as StringsType;

testEvan.register( 'TestEvanStrings', TestEvanStrings );

export default TestEvanStrings;
