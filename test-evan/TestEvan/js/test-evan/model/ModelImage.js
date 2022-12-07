// Copyright 2013-2021, University of Colorado Boulder

/**
 * BarMagnet is the model of a simple bar magnet. The magnet has fixed size, and mutable position and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import testEvan from '../../testEvan.js';
import Property from '../../../../axon/js/Property.js';

class ModelImage {
    constructor( size, position, orientation ) {
        this.size = size;

        this.positionProperty = new Property( position );
    
        this.orientationProperty = new Property( orientation );
    }

/**
   * Restores the initial state of the BarMagnet. This method is called when the simulation's "Reset All" button is
   * pressed. Note that BarMagnet.size is constant and does not need to be reset.
   * @public
   */
    reset() {
        this.positionProperty.reset();
        this.orientationProperty.reset();
    }
}

testEvan.register( 'ModelImage', ModelImage );
export default ModelImage;