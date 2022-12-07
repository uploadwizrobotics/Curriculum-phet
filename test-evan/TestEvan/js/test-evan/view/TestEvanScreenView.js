// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author evan
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
// import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
// import TestEvanConstants from '../../common/TestEvanConstants.js';
import testEvan from '../../testEvan.js';
import Property from '../../../../axon/js/Property.js';
// import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
// import TestEvanNode from './TestEvanNode.js';
// import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import { Font, Plane, Text } from '../../../../scenery/js/imports.js';
import Easing from '../../../../twixt/js/Easing.js';
// import dotRandom from '../../../../dot/js/dotRandom.js';
import Animation from '../../../../twixt/js/Animation.js';
import RoundPushButton from '../../../../sun/js/buttons/RoundPushButton.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import RoundToggleButton from '../../../../sun/js/buttons/RoundToggleButton.js';


class TestEvanScreenView extends ScreenView {

   constructor( model ) {


    super();


    this.addChild( new Plane() );

    // const durationProperty = new Property( 0.5 );
    const easingProperty = new Property( Easing.LINEAR );
    this.addChild( new Plane() );
    
    //Asteroid property's ( center vertically )8
    const asteroidPositionProperty = new Property( new Vector2( this.layoutBounds.left - 250, 0 ) );
    const asteroidTextProperty = new Property( new Vector2( this.layoutBounds.left - 288, -30 ) );

    //Comet property's ( above asteroid )
    const cometPositionProperty = new Property( new Vector2( this.layoutBounds.left - 250, this.layoutBounds.bottom ) );
    const cometTextProperty = new Property( new Vector2( this.layoutBounds.left - 280, this.layoutBounds.bottom - 30 ) );

    //Meteor property's ( below asteroid )
    const meteorPositionProperty = new Property( new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY ) );
    const meteorTextProperty = new Property( new Vector2( this.layoutBounds.left - 332, this.layoutBounds.centerY - 30 ) );

    function randomDelay( min, max ) {
      return Math.random() * ( max - min ) + min; //eslint-disable-line bad-sim-text 
    }
 
 function randomDuration( min, max ) {
      return Math.random() * ( max - min ) + min; //eslint-disable-line bad-sim-text 
    }

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
      baseColor: 'white',
      stroke: 'lightgrey',
      radius: 20
    } );

    asteroidPositionProperty.linkAttribute( asteroidCircle, 'translation' );
    this.addChild( asteroidCircle );

    const asteroidTitle = new Text( 'Asteroid', {
      fill: 'white',
      fontSize: 20
    } );
    asteroidTextProperty.linkAttribute( asteroidTitle, 'translation' );
    this.addChild( asteroidTitle );


    const asteroidGoRight = () => {
      
      const asteroidDur = randomDuration( 0.1, 2 );

      const asteroidRight = new Vector2( this.layoutBounds.right + 200, this.layoutBounds.bottom );
      asteroidCircle.translation = asteroidRight;
      let asteroidCircleRight = null;
      asteroidCircleRight && asteroidCircleRight.stop();
      asteroidCircleRight = new Animation( {
        targets: [ {
          property: asteroidPositionProperty,
          easing: easingProperty.value,
          to: asteroidRight
        } ],
        duration: asteroidDur
 
      } ).start();

      const asteroidRightText = new Vector2( this.layoutBounds.right + 162, this.layoutBounds.bottom - 30 );
      asteroidTitle.translation = asteroidRightText;
      let asteroidTextRight = null;
      asteroidTextRight && asteroidTextRight.stop();
      asteroidTextRight = new Animation( {
          targets: [ {
            property: asteroidTextProperty,
            easing: easingProperty.value,
            to: asteroidRightText
          } ],
          duration: asteroidDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          asteroidGoLeft();
        }, randomDelay( 500, 5000 )
      );

    };

    const asteroidGoLeft = () => {

      const asteroidDur = randomDuration( 0.1, 2 );
     
      const asteroidLeft = new Vector2( this.layoutBounds.left - 250, 0 );
        asteroidCircle.translation = asteroidLeft;
        let asteroidCircleLeft = null;
        asteroidCircleLeft && asteroidCircleLeft.stop();
        asteroidCircleLeft = new Animation( {
          targets: [ {
            property: asteroidPositionProperty,
            easing: easingProperty.value,
            to: asteroidLeft
          } ],
          duration: asteroidDur
        } ).start();
        // console.log( 'destination:', '(', asteroidLeft.x, ', ', asteroidLeft.y, ')' );

        const asteroidLeftText = new Vector2( this.layoutBounds.left - 288, -30 );
        asteroidTitle.translation = asteroidLeftText;
        let asteroidTextLeft = null;
        asteroidTextLeft && asteroidTextLeft.stop();
        asteroidTextLeft = new Animation( {
            targets: [ {
              property: asteroidTextProperty,
              easing: easingProperty.value,
              to: asteroidLeftText
            } ],
            duration: asteroidDur
        } ).start();

        setTimeout( //eslint-disable-line bad-sim-text
        () => {
          asteroidGoRight();
        }, randomDelay( 500, 5000 )
      );

    };

    //

    //

    //

    //
    
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
      baseColor: 'white',
      stroke: 'lightgrey',
      radius: 20
    } );

    cometPositionProperty.linkAttribute( cometCircle, 'translation' );
    this.addChild( cometCircle );

    const cometTitle = new Text( 'Comet', {
      fill: 'white',
      fontSize: 20
    } );
    cometTextProperty.linkAttribute( cometTitle, 'translation' );
    this.addChild( cometTitle );


    const cometGoRight = () => {

      const cometDur = randomDuration( 0.1, 2 );

      //Move circle right
      const cometRight = new Vector2( this.layoutBounds.right + 200, this.layoutBounds.top );
      cometCircle.translation = cometRight;
      let cometCircleRight = null;
      cometCircleRight && cometCircleRight.stop();
      cometCircleRight = new Animation( {
        targets: [ {
          property: cometPositionProperty,
          easing: easingProperty.value,
          to: cometRight
        } ],
        duration: cometDur
      } ).start();


      const cometRightText = new Vector2( this.layoutBounds.right + 170, this.layoutBounds.top - 30 );
      cometTitle.translation = cometRightText;
      let cometTextRight = null;
      cometTextRight && cometTextRight.stop();
      cometTextRight = new Animation( {
        targets: [ {
            property: cometTextProperty,
            easing: easingProperty.value,
            to: cometRightText
        } ],
        duration: cometDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
      () => {
        cometGoLeft();
      }, randomDelay( 500, 5000 )
    );

    };

    const cometGoLeft = () => {

      const cometDur = randomDuration( 0.1, 2 );

      const cometLeft = new Vector2( this.layoutBounds.left - 250, this.layoutBounds.bottom );
      cometCircle.translation = cometLeft;
      let cometCircleLeft = null;
      cometCircleLeft && cometCircleLeft.stop();
      cometCircleLeft = new Animation( {
          targets: [ {
              property: cometPositionProperty,
              easing: easingProperty.value,
              to: cometLeft
          } ],
          duration: cometDur
      } ).start();

      const cometLeftText = new Vector2( this.layoutBounds.left - 280, this.layoutBounds.bottom - 30 );
      cometTitle.translation = cometLeftText;
      let cometTextLeft = null;
      cometTextLeft && cometTextLeft.stop();
      cometTextLeft = new Animation( {
          targets: [ {
            property: cometTextProperty,
            easing: easingProperty.value,
            to: cometLeftText
          } ],
          duration: cometDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          cometGoRight();
        }, randomDelay( 500, 5000 )
      );

    };
    
    //

    //

    //

    //

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
      fontSize: 18
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
      baseColor: 'white',
      stroke: 'lightgrey',
      radius: 20
    } );

    meteorPositionProperty.linkAttribute( meteorCircle, 'translation' );
    this.addChild( meteorCircle );

    const meteorTitle = new Text( 'Meteor', {
      fill: 'white',
      fontSize: 20
    } );
    meteorTextProperty.linkAttribute( meteorTitle, 'translation' );
    this.addChild( meteorTitle );

    const meteorGoRight = () => {

      const meteorDur = randomDuration( 0.1, 2 );
      //Move circle right
      const meteorRight = new Vector2( this.layoutBounds.right + 300, this.layoutBounds.centerY );
      meteorCircle.translation = meteorRight;
      let meteorCircleRight = null;
      meteorCircleRight && meteorCircleRight.stop();
      meteorCircleRight = new Animation( {
        targets: [ {
          property: meteorPositionProperty,
          easing: easingProperty.value,
          to: meteorRight
        } ],
        duration: meteorDur
      } ).start();


      const meteorRightText = new Vector2( this.layoutBounds.right + 270, this.layoutBounds.centerY - 30 );
      meteorTitle.translation = meteorRightText;
      let meteorTextRight = null;
      meteorTextRight && meteorTextRight.stop();
      meteorTextRight = new Animation( {
        targets: [ {
            property: meteorTextProperty,
            easing: easingProperty.value,
            to: meteorRightText
        } ],
        duration: meteorDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          meteorGoLeft();
        }, randomDelay( 500, 5000 )
      );

    };

    const meteorGoLeft = () => {

      const meteorDur = randomDuration( 0.1, 2 );

      const meteorLeft = new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY );
      meteorCircle.translation = meteorLeft;
      let meteorCircleLeft = null;
      meteorCircleLeft && meteorCircleLeft.stop();
      meteorCircleLeft = new Animation( {
          targets: [ {
              property: meteorPositionProperty,
              easing: easingProperty.value,
              to: meteorLeft
          } ],
          duration: meteorDur
      } ).start();
    
      const meteorLeftText = new Vector2( this.layoutBounds.left - 332, this.layoutBounds.centerY - 30 );
      meteorTitle.translation = meteorLeftText;
      let meteorTextLeft = null;
      meteorTextLeft && meteorTextLeft.stop();
      meteorTextLeft = new Animation( {
          targets: [ {
            property: meteorTextProperty,
            easing: easingProperty.value,
            to: meteorLeftText
          } ],
          duration: meteorDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          meteorGoRight();
        }, randomDelay( 500, 5000 )
      );

    };

    //

    //

    //

    //

    //

    //BUTTON 
    const playButton = new RoundPushButton( {
        content: new Text( '⏵ / ⏸', { font: new Font( { size: 20 } ) } ),
        x: this.layoutBounds.centerX,
        y: this.layoutBounds.centerY + 250,
      
        //ANIMATIONS
        listener: () => {

          if ( asteroidPositionProperty.value.x === this.layoutBounds.left - 250 ) {
              asteroidGoRight();
              cometGoRight();
              meteorGoRight();
          }
            //ORIGINAL POSITION 
        }
    } );
    this.addChild( playButton );


    const instructionText = new Text( 'Pause and press a space objet to learn more!', {
      x: this.layoutBounds.centerX - 450,
      y: this.layoutBounds.bottom - 50,
      fontSize: 18,
      fontFamily: 'verdana',
      fill: 'white'
    } );
    this.addChild( instructionText );
  
  }
}

testEvan.register( 'TestEvanScreenView', TestEvanScreenView );
export default TestEvanScreenView;