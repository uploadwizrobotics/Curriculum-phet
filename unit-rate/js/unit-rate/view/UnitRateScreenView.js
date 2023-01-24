// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Evan
 */

import Property from '../../../../axon/js/Property.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import { Color, ColorProperty, Rectangle, Text } from '../../../../scenery/js/imports.js';
// import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import unitRate from '../../unitRate.js';
import Easing from '../../../../twixt/js/Easing.js';
import Animation from '../../../../twixt/js/Animation.js';
import RoundToggleButton from '../../../../sun/js/buttons/RoundToggleButton.js';
import pipe_png from '../../../images/pipe_png.js';
import { Image } from '../../../../scenery/js/imports.js';
import HSlider from '../../../../sun/js/HSlider.js';
import Range from '../../../../dot/js/Range.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import tub_png from '../../../images/tub_png.js';
import leverClosed_png from '../../../images/leverClosed_png.js';
import Vector2Property from '../../../../dot/js/Vector2Property.js';
import leverOpen_png from '../../../images/leverOpen_png.js';
import blank_png from '../../../images/blank_png.js';

class UnitRateScreenView extends ScreenView {

  constructor( model ) {

    super( );

    const waterHeightProperty = new Property( 0 );
    const waterWidthProperty = new Property( 20 );
    const waterLeftProperty = new Property( 735 );

    const tubWaterHeightProperty = new Property( 0 );
    const tubWaterYProperty = new Property( 337 );

    const easingProperty = new Property( Easing.LINEAR );
    const waterColorProperty = new ColorProperty( new Color( '#4179ff' ) );
    const leversImage = new Property( leverClosed_png );
    const leversWidth = new Property( 100 );
    const leversCenter = new Vector2Property( new Vector2( 565, this.layoutBounds.centerY - 10 ) );
    const leversCursor = new Property( 'pointer' );

    const levers = new Image( {
    } );
    leversImage.linkAttribute( levers, 'image' );
    leversWidth.linkAttribute( levers, 'maxWidth' );
    leversCenter.linkAttribute( levers, 'center' );
    leversCursor.linkAttribute( levers, 'cursor' );
    this.addChild( levers );


    const rateSlider = new HSlider( model.unitRateOffsetIntoRangeProperty, new Range( 1, 10 ), {
      thumbFill: 'lightgrey',
      thumbCenterLineStroke: 'black',
      thumbFillHighlighted: 'white',
      majorTickStroke: 'black',
      majorTickLineWidth: 1.5,
      fill: 'blue',
      trackLineWidth: 2,
      trackFill: 'black',
      trackFillEnabled: 'black',
      trackSize: new Dimension2( 400, 4 ),
      left: this.layoutBounds.left,
      y: this.layoutBounds.centerY + 30
    } );
    for ( let i = 0; i <= 10; i += 1 ) {
      rateSlider.addMinorTick( i );
    }
    rateSlider.addMajorTick( 0 );
    rateSlider.addMajorTick( 10 );
    this.addChild( rateSlider );


    const rateValue = new Text( '', {
      right: rateSlider.centerX - 7,
      y: rateSlider.y - 20,
      fontSize: 20
    } );
    this.addChild( rateValue );
    model.unitRateEstimateProperty.link( rate => {
        rateValue.text = rate.toString();
    } );

    const rateText = new Text( 'Litres per second', {
        center: new Vector2( rateSlider.centerX, rateSlider.bottom + 20 ),
        fontSize: 18,
        fontFamily: 'gill sans'
    } );
    this.addChild( rateText );

    const water = new Rectangle( {
      fill: waterColorProperty,
      top: 40,
      cornerRadius: 7
    } );
    waterWidthProperty.linkAttribute( water, 'rectWidth' );
    waterHeightProperty.linkAttribute( water, 'rectHeight' );
    waterLeftProperty.linkAttribute( water, 'left' );
    this.addChild( water );


    const pipeImage = new Image( pipe_png, {
      maxWidth: 100,
      center: new Vector2( this.layoutBounds.centerX + 233, this.layoutBounds.top )
    } );
    this.addChild( pipeImage );


    const tubImage = new Image( tub_png, {
      maxWidth: 300,
      // right: pipeImage.right - 70,
      right: this.layoutBounds.right,
      bottom: this.layoutBounds.centerY + 40
    } );
    this.addChild( tubImage );

    const tubWater = new Rectangle( {
      rectWidth: 277.5,
      fill: waterColorProperty,
      centerX: tubImage.centerX
    } );
    tubWaterHeightProperty.linkAttribute( tubWater, 'rectHeight' );
    tubWaterYProperty.linkAttribute( tubWater, 'top' );
    this.addChild( tubWater );

    const tubSize = new Text( '10 Litres', {
        center: new Vector2( tubImage.centerX, tubImage.bottom + 20 ),
        fontSize: 18,
        fontFamily: 'gill sans'
    } );
    this.addChild( tubSize );

    console.log( tubImage.bottom );

    const resultPrompt1 = new Text( '', {
      fontSize: 18,
      centerY: this.layoutBounds.centerY + 200,
      fontFamily: 'gill sans'
    } );
    this.addChild( resultPrompt1 );

    const resultSpeedValue = new Text( '', {
        fontSize: 18,
        centerY: resultPrompt1.centerY,
        fontWeight: 'bold',
        fontFamily: 'gill sans'
    } );
    this.addChild( resultSpeedValue );

    const resultSpeedValuePrompt = new Text( '', {
      fontSize: 18,
      centerY: resultPrompt1.centerY,
      fontFamily: 'gill sans'
    } );
    this.addChild( resultSpeedValuePrompt );

    const resultDuration = new Text( '', {
        fontSize: 18,
        centerY: resultPrompt1.centerY,
        fontWeight: 'bold',
        fontFamily: 'gill sans'
    } );
    this.addChild( resultDuration );

    const resultDurationPrompt = new Text( '', {
        fontSize: 18,
        left: resultSpeedValuePrompt.right,
        centerY: resultPrompt1.centerY,
        fontFamily: 'gill sans'
    } );
    this.addChild( resultDurationPrompt );

    const startButtonProperty = new Property( false );
    startButtonProperty.lazyLink( startValue => {
      console.log( startValue );

      function round( value, precision ) {
        const multiplier = Math.pow( 10, precision || 0 );
        return Math.round( value * multiplier ) / multiplier; //eslint-disable-line bad-sim-text
    }

      const speedValue = rateValue.text;

      const waterFillDurationProperty = new Property( 10 / parseFloat( speedValue ) );

      const roundedDuration = round( waterFillDurationProperty.value, 2 );

      this.removeChild( resultPrompt1 );
      resultPrompt1.text = 'With a speed of ';
      resultPrompt1.centerX = this.layoutBounds.centerX - 250;
      this.addChild( resultPrompt1 );

      this.removeChild( resultSpeedValue );
      resultSpeedValue.text = `${speedValue}`;
      resultSpeedValue.left = resultPrompt1.right;
      this.addChild( resultSpeedValue );

      this.removeChild( resultSpeedValuePrompt );
      if ( speedValue === '1' ) {
          resultSpeedValuePrompt.text = ' litre per second, it will take ';
      }
      else {
          resultSpeedValuePrompt.text = ' litres per second, it will take ';
      }
      resultSpeedValuePrompt.left = resultSpeedValue.right;
      this.addChild( resultSpeedValuePrompt );

      this.removeChild( resultDuration );
      resultDuration.text = `${roundedDuration}`;
      resultDuration.left = resultSpeedValuePrompt.right;
      this.addChild( resultDuration );

      this.removeChild( resultDurationPrompt );
      if ( roundedDuration === 1 ) {
          resultDurationPrompt.text = ' second to fill up a 10L container';
      }
      else {
          resultDurationPrompt.text = ' seconds to fill up a 10L container';
      }
      resultDurationPrompt.left = resultDuration.right;
      this.addChild( resultDurationPrompt );


      const switchLeverOn = new Animation( {
          object: levers,
          targets: [ {
              property: leversImage,
              to: leverOpen_png
          } ]
      } );
      
      const waterFill = new Animation( {
        object: water,
        delay: 0.2,
        targets: [ {
          property: waterHeightProperty,
          easing: easingProperty.value,
          to: 305
        } ],
        duration: 1.5
      } );

      const waterDone = new Animation( {
        object: water,
        delay: 0.2,
        targets: [ {
          property: waterWidthProperty,
          easing: easingProperty.value,
          to: 0
        },
        {
          property: waterLeftProperty,
          easing: easingProperty.value,
          to: 745
        } ],
        duration: 0.2
      } );

      const tubFill = new Animation( {
        object: tubWater,
        targets: [ {
          property: tubWaterHeightProperty,
          easing: easingProperty.value,
          to: 142
        },
        {
          property: tubWaterYProperty,
          easing: easingProperty.value,
          to: 195
        } ],
        duration: waterFillDurationProperty.value
      } );

      const switchLeverOff = new Animation( {
        object: levers,
        targets: [ {
            property: leversImage,
            to: leverClosed_png
        } ]
      } );

      switchLeverOn.then( waterFill );
      waterFill.then( tubFill );
      tubFill.then( switchLeverOff );
      switchLeverOff.then( waterDone );

      if ( waterHeightProperty.value === 0 && waterWidthProperty.value === 20 && waterLeftProperty.value === 735 && tubWaterHeightProperty.value === 0 && tubWaterYProperty.value === 337 ) {
          switchLeverOn.start();
      }
      else if ( waterHeightProperty.value === 305 && waterWidthProperty.value === 0 && waterLeftProperty.value === 745 && tubWaterHeightProperty.value === 142 && tubWaterYProperty.value === 195 ) {
        
          waterFill.stop();
          tubFill.stop();
          switchLeverOff.start();
          waterDone.stop();
          switchLeverOff.stop();

          waterHeightProperty.value = 0;
          waterWidthProperty.value = 20;
          waterLeftProperty.value = 735;
          tubWaterHeightProperty.value = 0;
          tubWaterYProperty.value = 337;

          switchLeverOn.start();

        }

    } );

    
    const startButton = new RoundToggleButton( startButtonProperty, 'true', 'false', {
      baseColor: 'transparent',
      content: new Image( blank_png, {
        maxWidth: 150
      } ),
      center: new Vector2( levers.centerX, this.layoutBounds.centerY ),
      cursor: 'pointer'
    } );
    this.addChild( startButton );


    const title = new Text( 'Unit Rate', {
      left: this.layoutBounds.left,
      centerY: this.layoutBounds.top + 50,
      fontSize: 35,
      fontWeight: 'bold',
      fontFamily: 'gill sans'
    } );
    this.addChild( title );


  }
}

unitRate.register( 'UnitRateScreenView', UnitRateScreenView );
export default UnitRateScreenView;