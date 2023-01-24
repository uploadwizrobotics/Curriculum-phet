// Copyright 2013-2021, University of Colorado Boulder

/**
 *
 * @author Avital
 */

import { DragListener, Image, Node } from '../../../../scenery/js/imports.js';
import frogPopulation from '../../frogPopulation.js';
import frogimg from '../../../images/frogimg.js';

class FrogPopulationNode extends Node {

    constructor( ModelImg, modelViewTransform ) {
    super( {
        cursor: 'pointer'
    } );

    this.addChild( new Image( frogimg, {
      centerX: 0,
      centerY: 0
  } ) );

    const scaleX = modelViewTransform.modelToViewDeltaX( ModelImg.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( ModelImg.size.height ) / this.height;
    this.scale( scaleX, scaleY );

    this.addInputListener( new DragListener( {
      allowTouchSnag: true,
      positionProperty: ModelImg.positionProperty,
      transform: modelViewTransform
    } ) );

    ModelImg.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    ModelImg.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );

    }
}

frogPopulation.register( 'FrogPopulationNode', FrogPopulationNode );
export default FrogPopulationNode;
