// Copyright 2013-2021, University of Colorado Boulder

/**
 * BarMagnet is the model of a simple bar magnet. The magnet has fixed size, and mutable position and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import { DragListener, Image, Node } from '../../../../scenery/js/imports.js';
import clock_png from '../../../images/clock_png.js';
import testEvan from '../../testEvan.js';

class TestEvanNode extends Node {

    constructor( modelImage, modelViewTransform ) {
    super( {
        cursor: 'pointer'
    } );

    this.addChild( new Image( clock_png, {
        centerX: 0,
        centerY: 0
    } ) );

    const scaleX = modelViewTransform.modelToViewDeltaX( modelImage.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( modelImage.size.height ) / this.height;
    this.scale( scaleX, scaleY );


    this.addInputListener( new DragListener( {
      allowTouchSnag: true,
      positionProperty: modelImage.positionProperty,
      transform: modelViewTransform
    } ) );

    modelImage.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    modelImage.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );

    }
}

testEvan.register( 'TestEvanNode', TestEvanNode );
export default TestEvanNode;
