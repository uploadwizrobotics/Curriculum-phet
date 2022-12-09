// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author evan
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import testEvan from '../../testEvan.js';
import Property from '../../../../axon/js/Property.js';
import { Circle, Plane, Text } from '../../../../scenery/js/imports.js';
import Easing from '../../../../twixt/js/Easing.js';
import Animation from '../../../../twixt/js/Animation.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import RoundToggleButton from '../../../../sun/js/buttons/RoundToggleButton.js';
import comet_png from '../../../images/comet_png.js';
import { Image } from '../../../../scenery/js/imports.js';
import meteor_png from '../../../images/meteor_png.js';
import asteroid_png from '../../../images/asteroid_png.js';

class TestEvanScreenView extends ScreenView {

   constructor( model ) {

    super();


    this.addChild( new Plane() );
    
    const easingProperty = new Property( Easing.LINEAR );

    const asteroidPositionProperty = new Property( new Vector2( this.layoutBounds.left - 250, 0 ) );

    const cometPositionProperty = new Property( new Vector2( this.layoutBounds.left - 350, this.layoutBounds.bottom ) );
  
    const meteorPositionProperty = new Property( new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY ) );

 
 function randomXY( min, max ) {
      return Math.random() * ( max - min ) + min; //eslint-disable-line bad-sim-text 
    }

//BACKGROUND

for ( let stars = 1; stars < 100; stars++ ) {
const star = new Circle( randomXY( 0.5, 4 ), {
  fill: 'white',
  opacity: 0.6
} );

    star.setX( randomXY( this.layoutBounds.left - 150, this.layoutBounds.right + 150 ) );
    star.setY( randomXY( this.layoutBounds.top, this.layoutBounds.bottom ) );
    this.addChild( star );
}

//
//


    //COMPONENTS

    //Asteroid 

    const asteroidInfo = new Text( 'Asteroids are small rocky objects that orbit the Sun', {

      x: this.layoutBounds.centerX - 200,
      y: this.layoutBounds.centerY - 90,
      fontSize: 18,
      fill: 'white'

    } );

    const asteroidCircleProperty = new Property( false );
    asteroidCircleProperty.lazyLink( value => {
      if ( value === 'false' ) {
        this.removeChild( asteroidInfo );
      }
      else if ( value === 'true' ) {
        this.addChild( asteroidInfo );
      }
    } );
  
    const asteroidCircle = new RoundToggleButton( asteroidCircleProperty, 'true', 'false', {
      baseColor: 'transparent',
      content: new Image( asteroid_png ),
      radius: 40,
      rotation: -1.80
    } );

    asteroidPositionProperty.linkAttribute( asteroidCircle, 'translation' );
    this.addChild( asteroidCircle );


    //ASTEROID ANIMATIONS

    const asteroidGoRight = new Animation( {
      object: asteroidCircle,
      targets: [ {
        property: asteroidPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.right + 350, this.layoutBounds.bottom )
      } ],
      duration: 4
      
    } );

    const asteroidGoHalfRight = new Animation( {
      object: asteroidCircle,
      targets: [ {
        property: asteroidPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.left - 350, this.layoutBounds.top )
      },
    {
      object: asteroidCircle,
      attribute: 'rotation',
      to: -1.80
    } ]
    } );

    const asteroidGoLeft = new Animation( {
        object: asteroidCircle,
        targets: [ {
          property: asteroidPositionProperty,
          to: new Vector2( this.layoutBounds.left - 350, this.layoutBounds.top ),
          easing: easingProperty.value
        } ],
        duration: asteroidGoRight.duration
    } );

    const asteroidGoHalfLeft = new Animation( {
      object: asteroidCircle,
      targets: [ {
        property: asteroidPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.right + 350, this.layoutBounds.bottom )
      },
    {
      object: asteroidCircle,
      attribute: 'rotation',
      to: 1.40
    } ]
    } );

    asteroidGoRight.then( asteroidGoHalfLeft );
    asteroidGoHalfLeft.then( asteroidGoLeft );
    asteroidGoLeft.then( asteroidGoHalfRight );
    asteroidGoHalfRight.then( asteroidGoRight );

    //
    //

    // Comet
    
    const cometInfo = new Text( 'Comets are large objects made of dust and ice that orbit the sun and have a "tail" of gas', {
      x: this.layoutBounds.centerX - 350,
      y: this.layoutBounds.centerY + 120,
      fontSize: 18,
      fill: 'white'
    } );
    
    const cometCircleProperty = new Property( false );
    cometCircleProperty.lazyLink( cometValue => {
      if ( cometValue === 'false' ) {
        this.removeChild( cometInfo );
      }
      else if ( cometValue === 'true' ) {
        this.addChild( cometInfo );
      }
    } );
  
    const cometCircle = new RoundToggleButton( cometCircleProperty, 'true', 'false', {
      baseColor: 'transparent',
      content: new Image( comet_png, {
          maxHeight: 20,
          maxWidth: 20
      } ),
      rotation: -1.15,
      radius: 60
      
    } );
    cometPositionProperty.linkAttribute( cometCircle, 'translation' );
    this.addChild( cometCircle );


    //COMET ANIMATIONS

    const cometGoRight = new Animation( {
        object: cometCircle,
        delay: 1,
        targets: [ {
          property: cometPositionProperty,
          easing: easingProperty.value,
          to: new Vector2( this.layoutBounds.right + 350, this.layoutBounds.top )
        },
        {
          object: cometCircle,
          attribute: 'rotation',
          to: -1.15
        } ],
        duration: 0.8
    } );

    const cometGoHalfRight = new Animation( {
      object: cometCircle,
      delay: 0.5,
      targets: [ {
        property: cometPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.left - 350, this.layoutBounds.bottom )
      },
    {
      object: cometCircle,
      attribute: 'rotation',
      to: -1.15
    } ]
    } );

    const cometGoHalfLeft = new Animation( {
      object: cometCircle,
      delay: 0.5,
      targets: [ {
        property: cometPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.right + 350, this.layoutBounds.top )
      },
      {
        object: cometCircle,
        attribute: 'rotation',
        to: 2
      } ]
    } );

    const cometGoLeft = new Animation( {
      object: cometCircle,
      delay: 0.5,
      targets: [
        {
        property: cometPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.left - 350, this.layoutBounds.bottom )
      }
    ],

      duration: cometGoRight.duration
    } );


    cometGoRight.then( cometGoHalfLeft );
    cometGoHalfLeft.then( cometGoLeft );
    cometGoLeft.then( cometGoHalfRight );
    cometGoHalfRight.then( cometGoRight );


    //Meteor 
    const meteorInfo = new Text( 'Meteoroids are small chunks of rocks that travel through space.', {
      
      x: this.layoutBounds.centerX - 230,
      y: this.layoutBounds.centerY,
      fontSize: 18,
      fill: 'white'

    } );

    const meteorInfo2 = new Text( 'When a Meteoroid enters a planets atmosphere and burn up, they are now known as Meteors', {
      x: this.layoutBounds.centerX - 360,
      y: this.layoutBounds.centerY + 30,
      fontSize: 18,
      fill: 'white'
    } );
    
    const meteorCircleProperty = new Property( false );
    meteorCircleProperty.lazyLink( meteorValue => {
      if ( meteorValue === 'false' ) {
        this.removeChild( meteorInfo );
        this.removeChild( meteorInfo2 );
      }
      else if ( meteorValue === 'true' ) {
        this.addChild( meteorInfo );
        this.addChild( meteorInfo2 );
      }
    } );
  
    const meteorCircle = new RoundToggleButton( meteorCircleProperty, 'true', 'false', {
      baseColor: 'transparent',
      // content: new Text( 'Meteoroid', {
      //   fontSize: 16,
      //   fill: 'black',
      //   fontWeight: 'bold'
      // } ),
      content: new Image( meteor_png ),
      radius: 27,
      rotation: -2.25
    } );

    meteorPositionProperty.linkAttribute( meteorCircle, 'translation' );
    this.addChild( meteorCircle );

    // const meteorTitle = new Text( 'Meteor', {
    //   fill: 'white',
    //   fontSize: 20
    // } );
    // meteorTextProperty.linkAttribute( meteorTitle, 'translation' );
    // this.addChild( meteorTitle );

    //METEOR ANIMATIONS

    const meteorGoRight = new Animation( {
      object: meteorCircle,
      targets: [ {
        property: meteorPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.right + 350, this.layoutBounds.centerY )
      } ],
      duration: 2
    } );

    const meteorGoHalfRight = new Animation( {
      object: meteorCircle,
      targets: [ {
        property: meteorPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY )
      },
    {
      object: meteorCircle,
      attribute: 'rotation',
      to: -2.25
    } ]
    } );

    const meteorGoLeft = new Animation( {
      object: meteorCircle,
      targets: [ {
        property: meteorPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.left - 350, this.layoutBounds.centerY )
      } ],
      duration: meteorGoRight.duration
    } );

    const meteorGoHalfLeft = new Animation( {
      object: meteorCircle,
      targets: [ {
        property: meteorPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.right + 300, this.layoutBounds.centerY )
      },
    {
      object: meteorCircle,
      attribute: 'rotation',
      to: 0.8
    } ]
    } );

      meteorGoRight.then( meteorGoHalfLeft );
      meteorGoHalfLeft.then( meteorGoLeft );
      meteorGoLeft.then( meteorGoHalfRight );
      meteorGoHalfRight.then( meteorGoRight );


    //
    //
    const playingProperty = new Property( false );
    playingProperty.lazyLink( value => {
      if ( value === 'false' ) {
        asteroidGoLeft.stop();
        asteroidGoRight.stop();
        asteroidGoHalfLeft.stop();
        asteroidGoHalfRight.stop();

        cometGoRight.stop();
        cometGoLeft.stop();
        cometGoHalfLeft.stop();
        cometGoHalfRight.stop();

        meteorGoRight.stop();
        meteorGoLeft.stop();
        meteorGoHalfLeft.stop();
        meteorGoHalfRight.stop();
      }
      else if ( value === 'true' ) {
        
        asteroidGoRight.start();
        
        cometGoRight.start();
        
        meteorGoRight.start();

      }
    } );
  

    const playButton = new RoundToggleButton( playingProperty, 'true', 'false', {
      content: new Text( '⏵ / ⏸', {
        fontSize: 18
      } ),
      baseColor: 'white',
      stroke: 'lightgrey',
      radius: 25,
      x: this.layoutBounds.centerX,
      y: this.layoutBounds.bottom - 50
    } );
    this.addChild( playButton );


    const instructionText = new Text( 'Pause and press a space rock to learn more!', {
      x: this.layoutBounds.centerX - 450,
      y: this.layoutBounds.bottom - 40,
      fontSize: 18,
      fontFamily: 'verdana',
      fill: 'white'
    } );
    this.addChild( instructionText );

  }
}

testEvan.register( 'TestEvanScreenView', TestEvanScreenView );
export default TestEvanScreenView;