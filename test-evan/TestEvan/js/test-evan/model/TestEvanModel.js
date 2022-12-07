// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author evan
 */

import Property from '../../../../axon/js/Property.js';
import testEvan from '../../testEvan.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ModelImage from './ModelImage.js';

class TestEvanModel {

 constructor() {
    //TODO

  this.counter = new Property( 0 );
  this.modelImage = new ModelImage( new Dimension2( 250, 250 ), new Vector2( 0, 0 ), 0 );
 }

/**
   * Restores the initial state of all model elements.
   * This method is called when the simulation's "Reset All" button is pressed.
   * @public
   */
 reset() {
  this.modelImage.reset();
}

}

testEvan.register( 'TestEvanModel', TestEvanModel );
export default TestEvanModel;