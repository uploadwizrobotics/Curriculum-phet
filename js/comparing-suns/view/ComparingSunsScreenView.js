// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kenny
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import ComparingSunsConstants from '../../common/ComparingSunsConstants.js';
import comparingSuns from '../../comparingSuns.js';
import sun_png from '../../../images/sun_png.js';
import { Text } from '../../../../scenery/js/imports.js';
import Property from '../../../../axon/js/Property.js';
import { Image } from '../../../../scenery/js/imports.js';
import { Node } from '../../../../scenery/js/imports.js';
import ComboBox from '../../../../sun/js/ComboBox.js';
import Easing from '../../../../twixt/js/Easing.js';
import Animation from '../../../../twixt/js/Animation.js';
import Vector2 from '../../../../dot/js/Vector2.js';
// import Earth_png from '../../../images/Earth_png.js';
import jupiter_png from '../../../images/jupiter_png.js';
import Moon_png from '../../../images/Moon_png.js';
import Neptune_png from '../../../images/Neptune_png.js';
import saturn_png from '../../../images/saturn_png.js';
import Uranus_png from '../../../images/Uranus_png.js';
import venus_png from '../../../images/venus_png.js';
import mercury_png from '../../../images/mercury_png.js';
import mars_png from '../../../images/mars_png.js';
import Timer from '../../../../axon/js/Timer.js';


class ComparingSunsScreenView extends ScreenView {

 constructor( model ) {

    super( );
    const comparingSpace = new Vector2( 500, 400 );

    const speedProperty = new Property( Easing.LINEAR );

    const startingSpace = new Vector2( 1500, 400 );

    // const earthImage = new Image( Earth_png, {
    //   maxWidth: 200,
    //   maxHeight: 200,
    //   x: 800,
    //   y: 400
    // } );

    const jupiterImage = new Image( jupiter_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );

    const marsImage = new Image( mars_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );

    const MercuryImage = new Image( mercury_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 134
    } );

    const moonImage = new Image( Moon_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );

    const neptuneImage = new Image( Neptune_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );

    const saturnImage = new Image( saturn_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );

    const uranusImage = new Image( Uranus_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );
    
    const venusImage = new Image( venus_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );

    const timerval = new Timer( 500 );

    console.log( timerval );

    const sunImage = new Image( sun_png, {
      maxWidth: 200,
      maxHeight: 200,
      x: -1000,
      y: 400
    } );

    // const imagePositionPropertyEarth = new Property( new Vector2( this.layoutBounds.left - 250, 0 ) );
    const imagePositionPropertyJupiter = new Property( new Vector2( -1000, 0 ) );
    const imagePositionPropertyMercury = new Property( new Vector2( -1000, 0 ) );
    const imagePositionPropertySun = new Property( new Vector2( -1000, 0 ) );
    const imagePositionPropertySaturn = new Property( new Vector2( -1000, 0 ) );
    const imagePositionPropertyNeptune = new Property( new Vector2( -1000, 0 ) );
    const imagePositionPropertyUranus = new Property( new Vector2( -1000, 0 ) );
    const imagePositionPropertyVenus = new Property( new Vector2( -1000, 0 ) );
    const imagePositionPropertyMars = new Property( new Vector2( -1000, 0 ) );


    imagePositionPropertyMercury.linkAttribute( MercuryImage, 'translation' );
    imagePositionPropertyJupiter.linkAttribute( jupiterImage, 'translation' );
    imagePositionPropertySun.linkAttribute( sunImage, 'translation' );
    imagePositionPropertySaturn.linkAttribute( saturnImage, 'translation' );
    imagePositionPropertyUranus.linkAttribute( uranusImage, 'translation' );
    imagePositionPropertyNeptune.linkAttribute( neptuneImage, 'translation' );
    imagePositionPropertyVenus.linkAttribute( venusImage, 'translation' );
    imagePositionPropertyMars.linkAttribute( marsImage, 'translation' );
    

    this.addChild( jupiterImage );
    this.addChild( sunImage );
    this.addChild( saturnImage );
    this.addChild( neptuneImage );
    this.addChild( uranusImage );
    this.addChild( venusImage );
    this.addChild( MercuryImage );
    this.addChild( moonImage );


    let animating = null;
    function movement( propertyvalue, imagevalue ) {
      console.log( 'banana' );

    imagevalue.translation = comparingSpace;
      
    
      animating && animating.stop();
      animating = new Animation( {
        targets: [ {
          property: propertyvalue,
          easing: speedProperty.value,
          to: comparingSpace
        } ], duration: 0.5
      } ).start();
}

    const values = [ 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ];

    const items = [];
    values.forEach( value => {
      items.push( {
        value: value,
        node: new Text( value )
      } );
    } );

    let returnanimation = null;
    function returningMovement( propertyvalue, imagevalue ) {
      imagevalue.translation = startingSpace;

      returnanimation && returnanimation.stop();

      returnanimation = new Animation( {
        targets: [ {
          property: propertyvalue,
          easing: speedProperty.value,
          to: startingSpace
        } ], duration: 0.5
      } ).start();
    }

    const selectedItemProperty = new Property( values[ 0 ] );

    const listParent = new Node();
    const comboBox = new ComboBox( selectedItemProperty, items, listParent, {
      highlightFill: 'yellow',
      listPosition: 'below'
    } );

    let lastValueProperty;
    let lastValueImage;
    selectedItemProperty.link( value => {
      if ( value === 'Mercury' ) {
        
        movement( imagePositionPropertyMercury, MercuryImage );
        lastValueProperty = imagePositionPropertyMercury;
        lastValueImage = MercuryImage;

      }
      else if ( value === 'Jupiter' ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyJupiter, jupiterImage );
            lastValueProperty = imagePositionPropertyJupiter;
            lastValueImage = jupiterImage;
}, 2000 );
    }
    else if ( value === 'Venus' ) {
      returningMovement( lastValueProperty, lastValueImage );
      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          movement( imagePositionPropertyVenus, venusImage );
          lastValueProperty = imagePositionPropertyVenus;
          lastValueImage = venusImage;
}, 2000 );
  }
  else if ( value === 'Mars' ) {
    returningMovement( lastValueProperty, lastValueImage );
    setTimeout( //eslint-disable-line bad-sim-text
      () => {
        movement( imagePositionPropertyMars, marsImage );
        lastValueProperty = imagePositionPropertyMars;
        lastValueImage = marsImage;
}, 2000 );
}
else if ( value === 'Uranus' ) {
  console.log( 'Jupiter' );
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertyUranus, uranusImage );
}, 2000 );
}
else if ( value === 'Sun' ) {
  console.log( 'Jupiter' );
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertySun, sunImage );
}, 2000 );
}
else if ( value === 'Saturn' ) {
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertySaturn, saturnImage );
}, 2000 );
}
else if ( value === 'Neptune' ) {
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertyNeptune, neptuneImage );
}, 2000 );
}
    
  } );
    this.addChild( comboBox );
    this.addChild( listParent );
    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - ComparingSunsConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - ComparingSunsConstants.SCREEN_VIEW_Y_MARGIN
    } );
    this.addChild( resetAllButton );
  }

}

comparingSuns.register( 'ComparingSunsScreenView', ComparingSunsScreenView );
export default ComparingSunsScreenView;