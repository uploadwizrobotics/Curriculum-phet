// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Avital
 */

import Property from '../../../../axon/js/Property.js';
import frogPopulation from '../../frogPopulation.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import ModelImg from './ModelImg.js';
import Vector2 from '../../../../dot/js/Vector2.js';

class FrogPopulationModel {

  constructor( ) {
    this.counter = new Property( 0 );
    this.ModelImg = new ModelImg( new Dimension2( 50, 40 ), new Vector2( 0, 0 ), 0 );
  }

  // reset() {
  //   this.counter.reset();
  //   this.ModelImg.reset();
  //   this.SwampImgModel.reset();
  // }

}

frogPopulation.register( 'FrogPopulationModel', FrogPopulationModel );
export default FrogPopulationModel;