// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author evan
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import testEvan from '../../testEvan.js';
import Property from '../../../../axon/js/Property.js';
import { Circle, Color, Plane, Text } from '../../../../scenery/js/imports.js';
import Easing from '../../../../twixt/js/Easing.js';
import Animation from '../../../../twixt/js/Animation.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import RoundToggleButton from '../../../../sun/js/buttons/RoundToggleButton.js';

class TestEvanScreenView extends ScreenView {

   constructor( model ) {


    super();


    this.addChild( new Plane() );
    // const durationProperty = new Property( 0.5 );
    const easingProperty = new Property( Easing.LINEAR );
    
    //Asteroid property's ( center vertically )8
    const asteroidPositionProperty = new Property( new Vector2( this.layoutBounds.left - 250, 0 ) );
    // const asteroidTextProperty = new Property( new Vector2( this.layoutBounds.left - 288, -30 ) );

    //Comet property's ( above asteroid )
    const cometPositionProperty = new Property( new Vector2( this.layoutBounds.left - 250, this.layoutBounds.bottom ) );
    // const cometTextProperty = new Property( new Vector2( this.layoutBounds.left - 280, this.layoutBounds.bottom - 30 ) );

    //Meteor property's ( below asteroid )
    const meteorPositionProperty = new Property( new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY ) );
    // const meteorTextProperty = new Property( new Vector2( this.layoutBounds.left - 332, this.layoutBounds.centerY - 30 ) );

    function randomSize( min, max ) {
      return Math.random() * ( max - min ) + min; //eslint-disable-line bad-sim-text 
    }
 
 function randomXY( min, max ) {
      return Math.random() * ( max - min ) + min; //eslint-disable-line bad-sim-text 
    }

//BACKGROUND

for ( let stars = 1; stars < 100; stars++ ) {
const star = new Circle( randomSize( 0.5, 4 ), {
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
      baseColor: new Color( 137, 137, 137 ),
      content: new Text( 'Asteroid', {
        fontSize: 17,
        fill: 'black',
        fontWeight: 'bold'
      } ),
      radius: 35
    } );

    asteroidPositionProperty.linkAttribute( asteroidCircle, 'translation' );
    this.addChild( asteroidCircle );

    // const asteroidTitle = new Text( 'Asteroid', {
    //   fill: 'white',
    //   fontSize: 20
    // } );
    // asteroidTextProperty.linkAttribute( asteroidTitle, 'translation' );
    // this.addChild( asteroidTitle );


    //ASTEROID ANIMATIONS

    const asteroidGoRight = new Animation( {
      object: asteroidCircle,
      targets: [ {
        property: asteroidPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.right + 200, this.layoutBounds.bottom )
      } ],
      duration: 4
    } );

    const asteroidGoLeft = new Animation( {
        object: asteroidCircle,
        targets: [ {
          property: asteroidPositionProperty,
          to: new Vector2( this.layoutBounds.left - 250, 0 ),
          easing: easingProperty.value
        } ],
        duration: asteroidGoRight.duration
    } );

    asteroidGoRight.then( asteroidGoLeft );
    asteroidGoLeft.then( asteroidGoRight );

  
    // const asteroidTextGoRight = new Animation( {
    //     object: asteroidTitle,
    //     targets: [ {
    //         property: asteroidTextProperty,
    //         to: new Vector2( this.layoutBounds.right + 162, this.layoutBounds.bottom - 30 ),
    //         easing: easingProperty.value
    //     } ],
    //     duration: asteroidGoRight.duration
    // } );

    // const asteroidTextGoLeft = new Animation( {
    //     object: asteroidTitle,
    //     targets: [ {
    //       property: asteroidTextProperty,
    //       to: new Vector2( this.layoutBounds.left - 288, -30 ),
    //       easing: easingProperty.value
    //     } ],
    //     duration: asteroidGoRight.duration
    // } );

    // asteroidTextGoRight.then( asteroidTextGoLeft );
    // asteroidTextGoLeft.then( asteroidTextGoRight );

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
      baseColor: new Color( 111, 176, 223, 255 ),
      content: new Text( 'Comet', {
          fontFamily: 'arial',
          fontWeight: 'bold',
          fill: 'black',
          fontSize: 18
      } ),
      radius: 40
    } );
    cometPositionProperty.linkAttribute( cometCircle, 'translation' );
    this.addChild( cometCircle );

    // const cometTitle = new Text( 'Comet', {
    //   fill: 'white',
    //   fontSize: 20
    // } );
    // cometTextProperty.linkAttribute( cometTitle, 'translation' );
    // this.addChild( cometTitle );


    //COMET ANIMATIONS

    const cometGoRight = new Animation( {
        object: cometCircle,
        targets: [ {
          property: cometPositionProperty,
          easing: easingProperty.value,
          to: new Vector2( this.layoutBounds.right + 200, this.layoutBounds.top )
        } ],
        duration: 0.8
    } );

    const cometGoLeft = new Animation( {
      object: cometCircle,
      targets: [ {
        property: cometPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.left - 250, this.layoutBounds.bottom )
      } ],
      duration: cometGoRight.duration
    } );

    cometGoRight.then( cometGoLeft );
    cometGoLeft.then( cometGoRight );

    // const cometTextGoRight = new Animation( {
    //   object: cometTitle,
    //   targets: [ {
    //     property: cometTextProperty,
    //     to: new Vector2( this.layoutBounds.right + 170, this.layoutBounds.top - 30 ),
    //     easing: easingProperty.value
    //   } ],
    //   duration: cometGoRight.duration
    // } );

    // const cometTextGoLeft = new Animation( {
    //   object: cometTitle,
    //   targets: [ {
    //       property: cometTextProperty,
    //       to: new Vector2( this.layoutBounds.left - 280, this.layoutBounds.bottom - 30 ),
    //       easing: easingProperty.value
    //   } ],
    //   duration: cometGoRight.duration
    // } );

    // cometTextGoRight.then( cometTextGoLeft );
    // cometTextGoLeft.then( cometTextGoRight );

    //
    //

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
      baseColor: new Color( 135, 113, 81 ),
      content: new Text( 'Meteoroid', {
        fontSize: 16,
        fill: 'black',
        fontWeight: 'bold'
      } ),
      radius: 27
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
        to: new Vector2( this.layoutBounds.right + 300, this.layoutBounds.centerY )
      } ],
      duration: 2
    } );

    const meteorGoLeft = new Animation( {
      object: meteorCircle,
      targets: [ {
        property: meteorPositionProperty,
        easing: easingProperty.value,
        to: new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY )
      } ],
      duration: meteorGoRight.duration
    } );

      meteorGoRight.then( meteorGoLeft );
      meteorGoLeft.then( meteorGoRight );

      // const meteorTextGoRight = new Animation( {
      //   object: meteorTitle,
      //   targets: [ {
      //     property: meteorTextProperty,
      //     to: new Vector2( this.layoutBounds.right + 270, this.layoutBounds.centerY - 30 ),
      //     easing: easingProperty.value
      //   } ],
      //   duration: meteorGoRight.duration
      // } );


      // const meteorTextGoLeft = new Animation( {
      //   object: meteorTitle,
      //   targets: [ {
      //     property: meteorTextProperty,
      //     to: new Vector2( this.layoutBounds.left - 332, this.layoutBounds.centerY - 30 ),
      //     easing: easingProperty.value
      //   } ],
      //   duration: meteorGoRight.duration
      // } );

      // meteorTextGoRight.then( meteorTextGoLeft );
      // meteorTextGoLeft.then( meteorTextGoRight );

    //
    //
    const playingProperty = new Property( false );
    playingProperty.lazyLink( value => {
      if ( value === 'false' ) {
        asteroidGoLeft.stop();
        asteroidGoRight.stop();
        cometGoRight.stop();
        cometGoLeft.stop();
        meteorGoRight.stop();
        meteorGoLeft.stop();
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


    const instructionText = new Text( 'Pause and press a space objet to learn more!', {
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