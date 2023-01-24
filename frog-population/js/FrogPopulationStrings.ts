// Copyright 2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import frogPopulation from './frogPopulation.js';

type StringsType = {
  'frog-population': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'nameStringProperty': LinkableProperty<string>;
  }
};

const FrogPopulationStrings = getStringModule( 'FROG_POPULATION' ) as StringsType;

frogPopulation.register( 'FrogPopulationStrings', FrogPopulationStrings );

export default FrogPopulationStrings;
