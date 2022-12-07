// Copyright 2022, University of Colorado Boulder

/**
 * 
 *
 * @author Kenny
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import CompareSunConstants from '../../common/CompareSunConstants.js';
import compareSun from '../../compareSun.js';
import RoundPushButton from '../../../../sun/js/buttons/RoundPushButton.js';
import Property from '../../../../axon/js/Property.js';
import { Color, Text } from '../../../../scenery/js/imports.js';
import { Image } from '../../../../scenery/js/imports.js';
import sun_png from '../../../images/sun_png.js';

class CompareSunScreenView extends ScreenView {

   constructor( model ) {

    super( );

    const buttonsEnabledProperty = new Property( true );
    
    const Button1 = new RoundPushButton( {
      content: new Text( '--- A ---' ),
      listener: () => console.log( 'buttonA fired' ),
      enabledProperty: buttonsEnabledProperty,
      x: 900,
      y: 500
    } );


    this.addChild( new Image( sun_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: 400,
      y: 400,
      fill: new Color( 255, 255, 255 )
    } ) );

    this.addChild( Button1 );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - CompareSunConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - CompareSunConstants.SCREEN_VIEW_Y_MARGIN
    } );
    this.addChild( resetAllButton );
  }

}

compareSun.register( 'CompareSunScreenView', CompareSunScreenView );
export default CompareSunScreenView;