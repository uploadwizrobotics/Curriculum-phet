// Copyright 2023, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Avital
 */

import Property from '../../../../axon/js/Property.js';
import frogPopulation from '../../frogPopulation.js';

class ModelImg {

    constructor( size, position, orientation ) {

        this.size = size;

        this.positionProperty = new Property( position );

        this.orientation = new Property( orientation );
    }

    // reset() {
    //     this.positionProperty.reset();
    //     this.orientationProperty.reset();
    //   }
}

frogPopulation.register( 'ModelImg', ModelImg );
export default ModelImg;