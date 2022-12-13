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
import { Color, Text } from '../../../../scenery/js/imports.js';
import Property from '../../../../axon/js/Property.js';
import { Image } from '../../../../scenery/js/imports.js';
import { Node } from '../../../../scenery/js/imports.js';
import ComboBox from '../../../../sun/js/ComboBox.js';
import Easing from '../../../../twixt/js/Easing.js';
import Animation from '../../../../twixt/js/Animation.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Earth_png from '../../../images/Earth_png.js';
import jupiter_png from '../../../images/jupiter_png.js';
import Moon_png from '../../../images/Moon_png.js';
import Neptune_png from '../../../images/Neptune_png.js';
import saturn_png from '../../../images/saturn_png.js';
import Uranus_png from '../../../images/Uranus_png.js';
import venus_png from '../../../images/venus_png.js';
import mercury_png from '../../../images/mercury_png.js';
import mars_png from '../../../images/mars_png.js';
import RoundPushButton from '../../../../sun/js/buttons/RoundPushButton.js';
class ComparingSunsScreenView extends ScreenView {

 constructor( model ) {

    super( );
    const comparingSpace = new Vector2( 300, 200 );

    const comparingSpaceBig = new Vector2( 300, 10 );

    const speedProperty = new Property( Easing.LINEAR );

    const startingSpace = new Vector2( 1500, 400 );

    const earthImage = new Image( Earth_png, {
      maxWidth: 80,
      maxHeight: 80,
      x: 200,
      y: 200
    } );

    const jupiterImage = new Image( jupiter_png, {
      maxWidth: 100 * 11,
      maxHeight: 100 * 5,
      x: -1000,
      y: 400
    } );

    const marsImage = new Image( mars_png, {
      maxWidth: 100 / 2,
      maxHeight: 100 / 2,
      x: -1000,
      y: 400
    } );

    const MercuryImage = new Image( mercury_png, {
      maxWidth: 100 / 3,
      maxHeight: 100 / 3,
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
      maxWidth: 100 * 3.5,
      maxHeight: 100 * 3.5,
      x: -1000,
      y: 400
    } );

    const saturnImage = new Image( saturn_png, {
      maxWidth: 100 * 9,
      maxHeight: 100 * 9,
      x: -1000,
      y: 400
    } );

    const uranusImage = new Image( Uranus_png, {
      maxWidth: 100 * 4,
      maxHeight: 100 * 4,
      x: -1000,
      y: 400
    } );
    
    const venusImage = new Image( venus_png, {
      maxWidth: 60,
      maxHeight: 60,
      x: -1000,
      y: 400
    } );


    const sunImage = new Image( sun_png, {
      maxWidth: 11500,
      maxHeight: 11500,
      x: -1000,
      y: 400
    } );


    this.addChild( earthImage );
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
    this.addChild( marsImage );
    this.addChild( venusImage );
    this.addChild( MercuryImage );
    this.addChild( moonImage );
    const informationText = new Text( 'Mercury is 1/3 the size of Earth!', {
      x: 50,
      y: 600,
      fontSize: 25,
      fill: new Color( 255, 255, 255 )
    } );
    this.addChild( informationText );


    let animating = null;
    function movement( propertyvalue, imagevalue ) {

    imagevalue.translation = comparingSpace;

      
    if ( imagevalue === jupiterImage || imagevalue === saturnImage || imagevalue === neptuneImage || imagevalue === uranusImage || imagevalue === sunImage ) {
      animating && animating.stop();
      animating = new Animation( {
        targets: [ {
          property: propertyvalue,
          easing: speedProperty.value,
          to: comparingSpaceBig
        } ], duration: 0.5
      } ).start();
    }
    else {
      animating && animating.stop();
      animating = new Animation( {
        targets: [ {
          property: propertyvalue,
          easing: speedProperty.value,
          to: comparingSpace
        } ], duration: 0.5
      } ).start();
      
    }
}

    const values = [ 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Sun' ];

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
      listPosition: 'below',
      x: 800,
      y: 150
    } );

    let lastValueProperty = null;
    let lastValueImage = null;
    let counter = 1;


    selectedItemProperty.link( value => {
    
      if ( value === 'Mercury' ) {
        // console.log( lastValueImage === null );
        // console.log( lastValueProperty === null );
        if ( lastValueImage === null && lastValueProperty === null ) {
          movement( imagePositionPropertyMercury, MercuryImage );
          lastValueProperty = imagePositionPropertyMercury;
          lastValueImage = MercuryImage;
          counter = 1;
        }
        else {
          returningMovement( lastValueProperty, lastValueImage );

          setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyMercury, MercuryImage );
            lastValueProperty = imagePositionPropertyMercury;
            lastValueImage = MercuryImage;
            }, 1500 );
            counter = 1;
            informationText.setText( 'Mercury`s radius is about 1/3 times the size of the Earth' );
        }
      }
      else if ( value === 'Jupiter' ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyJupiter, jupiterImage );
            lastValueProperty = imagePositionPropertyJupiter;
            lastValueImage = jupiterImage;
            informationText.setText( 'Jupiter`s radius is about 11 times the size of Earth!' );
}, 1500 );
counter = 4;
    }
    else if ( value === 'Venus' ) {
      returningMovement( lastValueProperty, lastValueImage );
      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          movement( imagePositionPropertyVenus, venusImage );
          lastValueProperty = imagePositionPropertyVenus;
          lastValueImage = venusImage;
          informationText.setText( 'Venus`s radius is only 300 km smaller than Earth, only a slight bit!' );
}, 1500 );
  counter = 2;
  }
  else if ( value === 'Mars' ) {
    returningMovement( lastValueProperty, lastValueImage );
    setTimeout( //eslint-disable-line bad-sim-text
      () => {
        movement( imagePositionPropertyMars, marsImage );
        lastValueProperty = imagePositionPropertyMars;
        lastValueImage = marsImage;
        informationText.setText( 'Mar`s radius is 1/2 the size of Earth!' );
}, 1500 );
counter = 3;
}
else if ( value === 'Uranus' ) {
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertyUranus, uranusImage );
      lastValueProperty = imagePositionPropertyUranus;
      lastValueImage = uranusImage;
      informationText.setText( 'Uranus` radius is about 4 times the size of the Earth!' );
}, 1500 );
counter = 6;
}
else if ( value === 'Sun' ) {
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertySun, sunImage );
      lastValueProperty = imagePositionPropertySun;
      lastValueImage = sunImage;
      informationText.setText( 'The sun`s radius is 109 times the size of the Earth!' );
}, 1500 );
counter = 8;
}
else if ( value === 'Saturn' ) {
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertySaturn, saturnImage );
      lastValueProperty = imagePositionPropertySaturn;
      lastValueImage = saturnImage;
      informationText.setText( 'Saturn`s radius is 9 times the size of the Earth!' );
}, 1500 );
counter = 5;
}
else if ( value === 'Neptune' ) {
  returningMovement( lastValueProperty, lastValueImage );
  setTimeout( //eslint-disable-line bad-sim-text
    () => {
      movement( imagePositionPropertyNeptune, neptuneImage );
      lastValueProperty = imagePositionPropertyNeptune;
      lastValueImage = neptuneImage;
      informationText.setText( 'Neptune`s radius is about 3.9 times the size of the Earth!' );
}, 1500 );
counter = 7;
}

    
  } );

  const buttonD = new RoundPushButton( {
    content: new Text( 'Change planets' ),
    listener: () => {
      counter += 1;

      if ( counter === 1 ) {

          returningMovement( lastValueProperty, lastValueImage );
          setTimeout(  //eslint-disable-line bad-sim-text
            () => {
            movement( imagePositionPropertyMercury, MercuryImage );
            lastValueProperty = imagePositionPropertyMercury;
            lastValueImage = MercuryImage;
            informationText.setText( 'Mercury`s radius is about 1/3 times the size of the Earth' );
          }, 1500 );
        
      }
      else if ( counter === 2 ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyVenus, venusImage );
            lastValueProperty = imagePositionPropertyVenus;
            lastValueImage = venusImage;
            informationText.setText( 'Venus`s radius is only 300 km smaller than Earth, only a slight bit!' );
  }, 1500 );
      }
      else if ( counter === 3 ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyMars, marsImage );
            lastValueProperty = imagePositionPropertyMars;
            lastValueImage = marsImage;
            informationText.setText( 'Mar`s radius is 1/2 the size of Earth!' );
    }, 1500 );
      }
      else if ( counter === 4 ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyJupiter, jupiterImage );
            lastValueProperty = imagePositionPropertyJupiter;
            lastValueImage = jupiterImage;
            informationText.setText( 'Jupiter`s radius is about 11 times the size of Earth!' );
}, 1500 );
      }
      else if ( counter === 5 ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertySaturn, saturnImage );
            lastValueProperty = imagePositionPropertySaturn;
            lastValueImage = saturnImage;
            informationText.setText( 'Saturn`s radius is 9 times the size of the Earth!' );
      }, 1500 );
      }
      else if ( counter === 6 ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyUranus, uranusImage );
            lastValueProperty = imagePositionPropertyUranus;
            lastValueImage = uranusImage;
            informationText.setText( 'Uranus` radius is about 4 times the size of the Earth!' );
      }, 1500 );
      }
      else if ( counter === 7 ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertyNeptune, neptuneImage );
            lastValueProperty = imagePositionPropertyNeptune;
            lastValueImage = neptuneImage;
            informationText.setText( 'Neptune`s radius is about 3.9 times the size of the Earth!' );
      }, 1500 );
      }
      else if ( counter === 8 ) {
        returningMovement( lastValueProperty, lastValueImage );
        setTimeout( //eslint-disable-line bad-sim-text
          () => {
            movement( imagePositionPropertySun, sunImage );
            lastValueProperty = imagePositionPropertySun;
            lastValueImage = sunImage;
            informationText.setText( 'The sun`s radius is 109 times the size of the Earth!' );
      }, 1500 );
      }
      else {
        counter = 1;
      }
    },
    x: 700,
    y: 520
  } );
  
    this.addChild( buttonD );

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