// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Avital
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
// import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
// import FrogPopulationConstants from '../../common/FrogPopulationConstants.js';
import frogPopulation from '../../frogPopulation.js';
import Property from '../../../../axon/js/Property.js';
import { Font, Plane, Text } from '../../../../scenery/js/imports.js';
import Easing from '../../../../twixt/js/Easing.js';
import { Image } from '../../../../scenery/js/imports.js';
import frogimg from '../../../images/frogimg.js';
import Animation from '../../../../twixt/js/Animation.js';
import RoundPushButton from '../../../../sun/js/buttons/RoundPushButton.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import RoundToggleButton from '../../../../sun/js/buttons/RoundToggleButton.js';
// import ModelImg from '../model/ModelImg.js';
// import { Rectangle } from '../../../../scenery/js/imports.js';

class FrogPopulationScreenView extends ScreenView {

  constructor( model ) {

    super( );

    const frogPicture = new Image( frogimg, {
      x: this.layoutBounds.centerX - 450,
      y: this.layoutBounds.centerY - 250,
      maxHeight: 450,
      maxWidth: 550
    } );
    this.addChild( frogPicture );

    this.addChild( new Plane() );

    const newText = new Text( 'then catch each fly to learn more!', {
      x: this.layoutBounds.centerX - 450,
      y: this.layoutBounds.bottom - 20,
      fontSize: 24,
      fontFamily: 'fangsong',
      fill: 'white'
    } );
    this.addChild( newText );

    // this.addChild( new Plane() );

    // const newRectangle = new Rectangle( 0, 0, 0, {
    //   fill: 'black',
    //   x: this.layoutBounds.center,
    //   y: this.layoutBounds.center,
    //   height: 100,
    //   width: 100
    // } );
    // this.addChild( newRectangle );

    this.addChild( new Plane() );

    const easingProperty = new Property( Easing.LINEAR );
    this.addChild( new Plane() );

    //greyFly properties ( center vertically )
    const greyFlyPositionProperty = new Property( new Vector2( this.layoutBounds.left - 250, 0 ) );
    const greyFlyTextProperty = new Property( new Vector2( this.layoutBounds.left - 288, -30 ) );

    
    //blueFly properties ( above greyFly )
    const blueFlyPositionProperty = new Property( new Vector2( this.layoutBounds.left - 250, this.layoutBounds.bottom ) );
    const blueFlyTextProperty = new Property( new Vector2( this.layoutBounds.left - 280, this.layoutBounds.bottom - 30 ) );

    //redFly properties ( below greyFly )
    const redFlyPositionProperty = new Property( new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY ) );
    const redFlyTextProperty = new Property( new Vector2( this.layoutBounds.left - 332, this.layoutBounds.centerY - 30 ) );

    //purpleFly's properties
    const purpleFlyPositionProperty = new Property( new Vector2( this.layoutBounds.left - 270, this.layoutBounds.centerY ) );
    const purpleFlyTextProperty = new Property( new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY - 30 ) );

    //orangeFly's properties
    const orangeFlyPositionProperty = new Property( new Vector2( this.layoutBounds.left - 230, this.layoutBounds.centerY ) );
    const orangeFlyTextProperty = new Property( new Vector2( this.layoutBounds.left - 260, this.layoutBounds.centerY - 30 ) );

    //Fly Counter property
    // Let fliesCaughtProperty = false, to keep track of whether a button was pressed or not
    let flyCount = 0;
    let temp = ' ';
    temp = flyCount.toString( );
    const flyCountStr = new Text( temp, {
      x: this.layoutBounds.left + 167,
      y: this.layoutBounds.top + 40,
      fontSize: 20,
      fill: 'white',
      fontFamily: 'fangsong'
    } );
    this.addChild( flyCountStr );
    this.moveChildToIndex( flyCountStr, 0 );

    
    // // All flies caught/keep going messages
    const allFliesCaught1 = new Text( 'Congratulations! You', {
      x: this.layoutBounds.centerX + 40,
      y: this.layoutBounds.centerY - 40,
      fontSize: 40,
      fontFamily: 'fangsong',
      fill: '#FFE84C'
    } );
    const allFliesCaught2 = new Text( 'caught all of the flies!', {
      x: this.layoutBounds.centerX + 40,
      y: this.layoutBounds.centerY + 5,
      fontSize: 40,
      fontFamily: 'fangsong',
      fill: '#FFE84C'
    } );

    function randomDelay( min, max ) {
      return Math.random() * ( max - min ) + min; //eslint-disable-line bad-sim-text 
    }
 
 function randomDuration( min, max ) {
      return Math.random() * ( max - min ) + min; //eslint-disable-line bad-sim-text 
    }

    //COMPONENTS

    //greyFly 

    const greyFlyInfo = new Text( 'This fly is an invasive species! The frogs have more food', {

      x: this.layoutBounds.centerX - 30,
      y: this.layoutBounds.centerY + 250,
      fontSize: 15,
      fill: '#b6babf',
      fontFamily: 'verdana'
    } );

    const greyFlyInfo2 = new Text( 'than they should, and now their population is taking over the ecosystem!', {

      x: this.layoutBounds.centerX - 30,
      y: this.layoutBounds.centerY + 275,
      fontSize: 15,
      fill: '#b6babf',
      fontFamily: 'verdana'
    } );

    const greyFlyCircleProperty = new Property( false );
    greyFlyCircleProperty.lazyLink( value => {
      if ( value === 'false' ) {
        this.removeChild( greyFlyInfo );
        this.removeChild( greyFlyInfo2 );
        // fliesCaughtProperty = false;
      }
      else if ( value === 'true' ) {
        this.addChild( greyFlyInfo );
        this.addChild( greyFlyInfo2 );
        flyCount += 1;
        console.log( flyCount );
        temp = flyCount.toString( );
        const flyCountStr = new Text( temp, {
          x: this.layoutBounds.left + 167,
          y: this.layoutBounds.top + 40,
          fontSize: 20,
          fill: 'white',
          fontFamily: 'fangsong'
        } );
        this.removeChildAt( 0, false );
        this.addChild( flyCountStr );
        this.moveChildToIndex( flyCountStr, 0 );
        if ( flyCount === 1 ) {
          console.log( 'You have some flies left, keep going to catch them!' );
        }
        else if ( flyCount === 5 ) {
          this.addChild( allFliesCaught1 );
          this.addChild( allFliesCaught2 );
          console.log( 'Congratulations! You caught all of the flies!' );
        }
      }
    } );
  
    const greyFlyCircle = new RoundToggleButton( greyFlyCircleProperty, 'true', 'false', {
      baseColor: 'grey',
      stroke: 'darkgrey',
      radius: 15
    } );

    greyFlyPositionProperty.linkAttribute( greyFlyCircle, 'translation' );
    this.addChild( greyFlyCircle );

    const greyFlyTitle = new Text( 'Grey Fly', {
      fill: 'white',
      fontSize: 20,
      fontFamily: 'verdana'
    } );
    greyFlyTextProperty.linkAttribute( greyFlyTitle, 'translation' );
    this.addChild( greyFlyTitle );


    const greyFlyGoRight = () => {
      
      const greyFlyDur = randomDuration( 5, 10 );

      const greyFlyRight = new Vector2( this.layoutBounds.right + 200, this.layoutBounds.bottom );
      greyFlyCircle.translation = greyFlyRight;
      let greyFlyCircleRight = null;
      greyFlyCircleRight && greyFlyCircleRight.stop();
      greyFlyCircleRight = new Animation( {
        targets: [ {
          property: greyFlyPositionProperty,
          easing: easingProperty.value,
          to: greyFlyRight
        } ],
        duration: greyFlyDur
 
      } ).start();

      const greyFlyRightText = new Vector2( this.layoutBounds.right + 162, this.layoutBounds.bottom - 30 );
      greyFlyTitle.translation = greyFlyRightText;
      let greyFlyTextRight = null;
      greyFlyTextRight && greyFlyTextRight.stop();
      greyFlyTextRight = new Animation( {
          targets: [ {
            property: greyFlyTextProperty,
            easing: easingProperty.value,
            to: greyFlyRightText
          } ],
          duration: greyFlyDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          greyFlyGoLeft();
        }, randomDelay( 500, 5000 )
      );

    };

    const greyFlyGoLeft = () => {

      const greyFlyDur = randomDuration( 5, 10 );
     
      const greyFlyLeft = new Vector2( this.layoutBounds.left - 250, 0 );
        greyFlyCircle.translation = greyFlyLeft;
        let greyFlyCircleLeft = null;
        greyFlyCircleLeft && greyFlyCircleLeft.stop();
        greyFlyCircleLeft = new Animation( {
          targets: [ {
            property: greyFlyPositionProperty,
            easing: easingProperty.value,
            to: greyFlyLeft
          } ],
          duration: greyFlyDur
        } ).start();
        // console.log( 'destination:', '(', greyFlyLeft.x, ', ', greyFlyLeft.y, ')' );

        const greyFlyLeftText = new Vector2( this.layoutBounds.left - 288, -30 );
        greyFlyTitle.translation = greyFlyLeftText;
        let greyFlyTextLeft = null;
        greyFlyTextLeft && greyFlyTextLeft.stop();
        greyFlyTextLeft = new Animation( {
            targets: [ {
              property: greyFlyTextProperty,
              easing: easingProperty.value,
              to: greyFlyLeftText
            } ],
            duration: greyFlyDur
        } ).start();

        setTimeout( //eslint-disable-line bad-sim-text
        () => {
          greyFlyGoRight();
        }, randomDelay( 500, 5000 )
      );

    };

    // blueFly
    
    const blueFlyInfo = new Text( 'The blue flies are a frog favourite!', {
      x: this.layoutBounds.centerX + 76,
      y: this.layoutBounds.centerY + 130,
      fontSize: 15,
      fill: '#8aaee6',
      fontFamily: 'verdana'
    } );

    const blueFlyInfo2 = new Text( 'They have a predator-prey relationship to maintain balance.', {
      x: this.layoutBounds.centerX + 76,
      y: this.layoutBounds.centerY + 155,
      fontSize: 15,
      fill: '#8aaee6',
      fontFamily: 'verdana'
    } );
    
    const blueFlyCircleProperty = new Property( false );
    blueFlyCircleProperty.lazyLink( blueFlyValue => {
      if ( blueFlyValue === 'false' ) {
        this.removeChild( blueFlyInfo );
        this.removeChild( blueFlyInfo2 );
        // fliesCaughtProperty = false;
      }
      else if ( blueFlyValue === 'true' ) {
        this.addChild( blueFlyInfo );
        this.addChild( blueFlyInfo2 );
        // fliesCaughtProperty = true;
        flyCount += 1;
        console.log( flyCount );
        temp = flyCount.toString( );
        const flyCountStr = new Text( temp, {
          x: this.layoutBounds.left + 167,
          y: this.layoutBounds.top + 40,
          fontSize: 20,
          fill: 'white',
          fontFamily: 'fangsong'
        } );
        this.removeChildAt( 0, false );
        this.addChild( flyCountStr );
        this.moveChildToIndex( flyCountStr, 0 );
        if ( flyCount === 1 ) {
          console.log( 'You have some flies left, keep going to catch them!' );
        }
        else if ( flyCount === 5 ) {
          this.addChild( allFliesCaught1 );
          this.addChild( allFliesCaught2 );
          console.log( 'Congratulations! You caught all of the flies!' );
        }
      }
    } );
  
    const blueFlyCircle = new RoundToggleButton( blueFlyCircleProperty, 'true', 'false', {
      baseColor: 'blue',
      stroke: 'darkgrey',
      radius: 20
    } );

    blueFlyPositionProperty.linkAttribute( blueFlyCircle, 'translation' );
    this.addChild( blueFlyCircle );

    const blueFlyTitle = new Text( 'Blue Fly', {
      fill: 'white',
      fontFamily: 'verdana',
      fontSize: 20
    } );
    blueFlyTextProperty.linkAttribute( blueFlyTitle, 'translation' );
    this.addChild( blueFlyTitle );


    const blueFlyGoRight = () => {

      const blueFlyDur = randomDuration( 5, 10 );

      //Move circle right
      const blueFlyRight = new Vector2( this.layoutBounds.right + 200, this.layoutBounds.top );
      blueFlyCircle.translation = blueFlyRight;
      let blueFlyCircleRight = null;
      blueFlyCircleRight && blueFlyCircleRight.stop();
      blueFlyCircleRight = new Animation( {
        targets: [ {
          property: blueFlyPositionProperty,
          easing: easingProperty.value,
          to: blueFlyRight
        } ],
        duration: blueFlyDur
      } ).start();


      const blueFlyRightText = new Vector2( this.layoutBounds.right + 170, this.layoutBounds.top - 30 );
      blueFlyTitle.translation = blueFlyRightText;
      let blueFlyTextRight = null;
      blueFlyTextRight && blueFlyTextRight.stop();
      blueFlyTextRight = new Animation( {
        targets: [ {
            property: blueFlyTextProperty,
            easing: easingProperty.value,
            to: blueFlyRightText
        } ],
        duration: blueFlyDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
      () => {
        blueFlyGoLeft();
      }, randomDelay( 500, 5000 )
    );

    };

    const blueFlyGoLeft = () => {

      const blueFlyDur = randomDuration( 5, 10 );

      const blueFlyLeft = new Vector2( this.layoutBounds.left - 250, this.layoutBounds.bottom );
      blueFlyCircle.translation = blueFlyLeft;
      let blueFlyCircleLeft = null;
      blueFlyCircleLeft && blueFlyCircleLeft.stop();
      blueFlyCircleLeft = new Animation( {
          targets: [ {
              property: blueFlyPositionProperty,
              easing: easingProperty.value,
              to: blueFlyLeft
          } ],
          duration: blueFlyDur
      } ).start();

      const blueFlyLeftText = new Vector2( this.layoutBounds.left - 280, this.layoutBounds.bottom - 30 );
      blueFlyTitle.translation = blueFlyLeftText;
      let blueFlyTextLeft = null;
      blueFlyTextLeft && blueFlyTextLeft.stop();
      blueFlyTextLeft = new Animation( {
          targets: [ {
            property: blueFlyTextProperty,
            easing: easingProperty.value,
            to: blueFlyLeftText
          } ],
          duration: blueFlyDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          blueFlyGoRight();
        }, randomDelay( 500, 5000 )
      );

    };

    //redFly

    const redFlyInfo = new Text( 'Red flies will eat other flies in the area.', {
      x: this.layoutBounds.centerX + 50,
      y: this.layoutBounds.centerY - 265,
      fontSize: 15,
      fill: '#F9A7A7',
      fontFamily: 'verdana'
    } );

    const redFlyInfo2 = new Text( 'If there are too many, the frogs will starve from competition!', {
      x: this.layoutBounds.centerX + 50,
      y: this.layoutBounds.centerY - 240,
      fontSize: 15,
      fill: '#F9A7A7',
      fontFamily: 'verdana'
    } );

    const redFlyInfo3 = new Text( 'Red flies are still necessary though: they attack insects that eat', {
      x: this.layoutBounds.centerX + 50,
      y: this.layoutBounds.centerY - 215,
      fontSize: 15,
      fill: '#F9A7A7',
      fontFamily: 'verdana'
    } );

    const redFlyInfo4 = new Text( 'local autotrophs, which saves plants and helps with the carbon cycle!', {
      x: this.layoutBounds.centerX + 50,
      y: this.layoutBounds.centerY - 190,
      fontSize: 15,
      fill: '#F9A7A7',
      fontFamily: 'verdana'
    } );
    
    const redFlyCircleProperty = new Property( false );
    redFlyCircleProperty.lazyLink( redFlyValue => {
      if ( redFlyValue === 'false' ) {
        this.removeChild( redFlyInfo );
        this.removeChild( redFlyInfo2 );
        this.removeChild( redFlyInfo3 );
        this.removeChild( redFlyInfo4 );
        // fliesCaughtProperty = false;
      }
      else if ( redFlyValue === 'true' ) {
        this.addChild( redFlyInfo );
        this.addChild( redFlyInfo2 );
        this.addChild( redFlyInfo3 );
        this.addChild( redFlyInfo4 );
        // fliesCaughtProperty = true;
        flyCount += 1;
        console.log( flyCount );
        temp = flyCount.toString( );
        const flyCountStr = new Text( temp, {
          x: this.layoutBounds.left + 167,
          y: this.layoutBounds.top + 40,
          fontSize: 20,
          fill: 'white',
          fontFamily: 'fangsong'
        } );
        this.removeChildAt( 0, false );
        this.addChild( flyCountStr );
        this.moveChildToIndex( flyCountStr, 0 );
        if ( flyCount === 1 ) {
          console.log( 'You have some flies left, keep going to catch them!' );
        }
        else if ( flyCount === 5 ) {
          this.addChild( allFliesCaught1 );
          this.addChild( allFliesCaught2 );
          console.log( 'Congratulations! You caught all of the flies!' );
        }
      }
    } );
  
    const redFlyCircle = new RoundToggleButton( redFlyCircleProperty, 'true', 'false', {
      baseColor: 'red',
      stroke: 'darkgrey',
      radius: 10
    } );

    redFlyPositionProperty.linkAttribute( redFlyCircle, 'translation' );
    this.addChild( redFlyCircle );

    const redFlyTitle = new Text( 'Red Fly', {
      fill: 'white',
      fontFamily: 'verdana',
      fontSize: 20
    } );
    redFlyTextProperty.linkAttribute( redFlyTitle, 'translation' );
    this.addChild( redFlyTitle );

    const redFlyGoRight = () => {

      const redFlyDur = randomDuration( 5, 10 );
      //Move circle right
      const redFlyRight = new Vector2( this.layoutBounds.right + 300, this.layoutBounds.centerY );
      redFlyCircle.translation = redFlyRight;
      let redFlyCircleRight = null;
      redFlyCircleRight && redFlyCircleRight.stop();
      redFlyCircleRight = new Animation( {
        targets: [ {
          property: redFlyPositionProperty,
          easing: easingProperty.value,
          to: redFlyRight
        } ],
        duration: redFlyDur
      } ).start();


      const redFlyRightText = new Vector2( this.layoutBounds.right + 270, this.layoutBounds.centerY - 30 );
      redFlyTitle.translation = redFlyRightText;
      let redFlyTextRight = null;
      redFlyTextRight && redFlyTextRight.stop();
      redFlyTextRight = new Animation( {
        targets: [ {
            property: redFlyTextProperty,
            easing: easingProperty.value,
            to: redFlyRightText
        } ],
        duration: redFlyDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          redFlyGoLeft();
        }, randomDelay( 500, 5000 )
      );

    };

    const redFlyGoLeft = () => {

      const redFlyDur = randomDuration( 5, 10 );

      const redFlyLeft = new Vector2( this.layoutBounds.left - 300, this.layoutBounds.centerY );
      redFlyCircle.translation = redFlyLeft;
      let redFlyCircleLeft = null;
      redFlyCircleLeft && redFlyCircleLeft.stop();
      redFlyCircleLeft = new Animation( {
          targets: [ {
              property: redFlyPositionProperty,
              easing: easingProperty.value,
              to: redFlyLeft
          } ],
          duration: redFlyDur
      } ).start();
    
      const redFlyLeftText = new Vector2( this.layoutBounds.left - 332, this.layoutBounds.centerY - 30 );
      redFlyTitle.translation = redFlyLeftText;
      let redFlyTextLeft = null;
      redFlyTextLeft && redFlyTextLeft.stop();
      redFlyTextLeft = new Animation( {
          targets: [ {
            property: redFlyTextProperty,
            easing: easingProperty.value,
            to: redFlyLeftText
          } ],
          duration: redFlyDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          redFlyGoRight();
        }, randomDelay( 500, 5000 )
      );

    };

    
    //purpleFly 

    const purpleFlyInfo = new Text( 'Purple flies are currently endangered because of human activities:', {

      x: this.layoutBounds.centerX - 25,
      y: this.layoutBounds.centerY + 190,
      fontSize: 15,
      fill: '#DCB5DF',
      fontFamily: 'verdana'
    } );

    const purpleFlyInfo2 = new Text( 'increased carbon dioxide in the air has been killing the plants they eat.', {

      x: this.layoutBounds.centerX - 25,
      y: this.layoutBounds.centerY + 215,
      fontSize: 15,
      fill: '#DCB5DF',
      fontFamily: 'verdana'
    } );

    const purpleFlyCircleProperty = new Property( false );
    purpleFlyCircleProperty.lazyLink( value => {
      if ( value === 'false' ) {
        this.removeChild( purpleFlyInfo );
        this.removeChild( purpleFlyInfo2 );
        // fliesCaughtProperty = false;
      }
      else if ( value === 'true' ) {
        this.addChild( purpleFlyInfo );
        this.addChild( purpleFlyInfo2 );
        flyCount += 1;
        console.log( flyCount );
        temp = flyCount.toString( );
        const flyCountStr = new Text( temp, {
          x: this.layoutBounds.left + 167,
          y: this.layoutBounds.top + 40,
          fontSize: 20,
          fill: 'white',
          fontFamily: 'fangsong'
        } );
        this.removeChildAt( 0, false );
        this.addChild( flyCountStr );
        this.moveChildToIndex( flyCountStr, 0 );
        if ( flyCount === 1 ) {
          console.log( 'You have some flies left, keep going to catch them!' );
        }
        else if ( flyCount === 5 ) {
          this.addChild( allFliesCaught1 );
          this.addChild( allFliesCaught2 );
          console.log( 'Congratulations! You caught all of the flies!' );
        }
      }
    } );
  
    const purpleFlyCircle = new RoundToggleButton( purpleFlyCircleProperty, 'true', 'false', {
      baseColor: 'purple',
      stroke: 'darkgrey',
      radius: 20
    } );

    purpleFlyPositionProperty.linkAttribute( purpleFlyCircle, 'translation' );
    this.addChild( purpleFlyCircle );

    const purpleFlyTitle = new Text( 'Purple Fly', {
      fill: 'white',
      fontSize: 20,
      fontFamily: 'verdana'
    } );
    purpleFlyTextProperty.linkAttribute( purpleFlyTitle, 'translation' );
    this.addChild( purpleFlyTitle );


    const purpleFlyGoRight = () => {
      
      const purpleFlyDur = randomDuration( 5, 10 );

      const purpleFlyRight = new Vector2( this.layoutBounds.right + 200, this.layoutBounds.bottom );
      purpleFlyCircle.translation = purpleFlyRight;
      let purpleFlyCircleRight = null;
      purpleFlyCircleRight && purpleFlyCircleRight.stop();
      purpleFlyCircleRight = new Animation( {
        targets: [ {
          property: purpleFlyPositionProperty,
          easing: easingProperty.value,
          to: purpleFlyRight
        } ],
        duration: purpleFlyDur
 
      } ).start();

      const purpleFlyRightText = new Vector2( this.layoutBounds.right + 162, this.layoutBounds.bottom - 30 );
      purpleFlyTitle.translation = purpleFlyRightText;
      let purpleFlyTextRight = null;
      purpleFlyTextRight && purpleFlyTextRight.stop();
      purpleFlyTextRight = new Animation( {
          targets: [ {
            property: purpleFlyTextProperty,
            easing: easingProperty.value,
            to: purpleFlyRightText
          } ],
          duration: purpleFlyDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          purpleFlyGoLeft();
        }, randomDelay( 500, 5000 )
      );

    };

    const purpleFlyGoLeft = () => {

      const purpleFlyDur = randomDuration( 5, 10 );
     
      const purpleFlyLeft = new Vector2( this.layoutBounds.left - 300, 0 );
        purpleFlyCircle.translation = purpleFlyLeft;
        let purpleFlyCircleLeft = null;
        purpleFlyCircleLeft && purpleFlyCircleLeft.stop();
        purpleFlyCircleLeft = new Animation( {
          targets: [ {
            property: purpleFlyPositionProperty,
            easing: easingProperty.value,
            to: purpleFlyLeft
          } ],
          duration: purpleFlyDur
        } ).start();
        // console.log( 'destination:', '(', purpleFlyLeft.x, ', ', purpleFlyLeft.y, ')' );

        const purpleFlyLeftText = new Vector2( this.layoutBounds.left - 388, -30 );
        purpleFlyTitle.translation = purpleFlyLeftText;
        let purpleFlyTextLeft = null;
        purpleFlyTextLeft && purpleFlyTextLeft.stop();
        purpleFlyTextLeft = new Animation( {
            targets: [ {
              property: purpleFlyTextProperty,
              easing: easingProperty.value,
              to: purpleFlyLeftText
            } ],
            duration: purpleFlyDur
        } ).start();

        setTimeout( //eslint-disable-line bad-sim-text
        () => {
          purpleFlyGoRight();
        }, randomDelay( 500, 5000 )
      );

    };

    
    //orangeFly 

    const orangeFlyInfo = new Text( 'Orange flies are known for being scavengers.', {

      x: this.layoutBounds.centerX + 40,
      y: this.layoutBounds.centerY - 155,
      fontSize: 15,
      fill: '#F6CF96',
      fontFamily: 'verdana'
    } );

    const orangeFlyInfo2 = new Text( 'Scavengers eat rotting organic matter, which cleans the biome!', {

      x: this.layoutBounds.centerX + 40,
      y: this.layoutBounds.centerY - 130,
      fontSize: 15,
      fill: '#F6CF96',
      fontFamily: 'verdana'
    } );

    const orangeFlyCircleProperty = new Property( false );
    orangeFlyCircleProperty.lazyLink( value => {
      if ( value === 'false' ) {
        this.removeChild( orangeFlyInfo );
        this.removeChild( orangeFlyInfo2 );
        // fliesCaughtProperty = false;
      }
      else if ( value === 'true' ) {
        this.addChild( orangeFlyInfo );
        this.addChild( orangeFlyInfo2 );
        flyCount += 1;
        console.log( flyCount );
        temp = flyCount.toString( );
        const flyCountStr = new Text( temp, {
          x: this.layoutBounds.left + 167,
          y: this.layoutBounds.top + 40,
          fontSize: 20,
          fill: 'white',
          fontFamily: 'fangsong'
        } );
        this.removeChildAt( 0, false );
        this.addChild( flyCountStr );
        this.moveChildToIndex( flyCountStr, 0 );
        if ( flyCount === 1 ) {
          console.log( 'You have some flies left, keep going to catch them!' );
        }
        else if ( flyCount === 5 ) {
          this.addChild( allFliesCaught1 );
          this.addChild( allFliesCaught2 );
          console.log( 'Congratulations! You caught all of the flies!' );
        }
      }
    } );
  
    const orangeFlyCircle = new RoundToggleButton( orangeFlyCircleProperty, 'true', 'false', {
      baseColor: 'orange',
      stroke: 'darkgrey',
      radius: 13
    } );

    orangeFlyPositionProperty.linkAttribute( orangeFlyCircle, 'translation' );
    this.addChild( orangeFlyCircle );

    const orangeFlyTitle = new Text( 'Orange Fly', {
      fill: 'white',
      fontSize: 20,
      fontFamily: 'verdana'
    } );
    orangeFlyTextProperty.linkAttribute( orangeFlyTitle, 'translation' );
    this.addChild( orangeFlyTitle );


    const orangeFlyGoRight = () => {
      
      const orangeFlyDur = randomDuration( 5, 10 );

      const orangeFlyRight = new Vector2( this.layoutBounds.right + 200, this.layoutBounds.bottom );
      orangeFlyCircle.translation = orangeFlyRight;
      let orangeFlyCircleRight = null;
      orangeFlyCircleRight && orangeFlyCircleRight.stop();
      orangeFlyCircleRight = new Animation( {
        targets: [ {
          property: orangeFlyPositionProperty,
          easing: easingProperty.value,
          to: orangeFlyRight
        } ],
        duration: orangeFlyDur
 
      } ).start();

      const orangeFlyRightText = new Vector2( this.layoutBounds.right + 162, this.layoutBounds.bottom - 30 );
      orangeFlyTitle.translation = orangeFlyRightText;
      let orangeFlyTextRight = null;
      orangeFlyTextRight && orangeFlyTextRight.stop();
      orangeFlyTextRight = new Animation( {
          targets: [ {
            property: orangeFlyTextProperty,
            easing: easingProperty.value,
            to: orangeFlyRightText
          } ],
          duration: orangeFlyDur
      } ).start();

      setTimeout( //eslint-disable-line bad-sim-text
        () => {
          orangeFlyGoLeft();
        }, randomDelay( 500, 5000 )
      );

    };

    const orangeFlyGoLeft = () => {

      const orangeFlyDur = randomDuration( 5, 10 );
     
      const orangeFlyLeft = new Vector2( this.layoutBounds.left - 300, 0 );
        orangeFlyCircle.translation = orangeFlyLeft;
        let orangeFlyCircleLeft = null;
        orangeFlyCircleLeft && orangeFlyCircleLeft.stop();
        orangeFlyCircleLeft = new Animation( {
          targets: [ {
            property: orangeFlyPositionProperty,
            easing: easingProperty.value,
            to: orangeFlyLeft
          } ],
          duration: orangeFlyDur
        } ).start();
        // console.log( 'destination:', '(', orangeFlyLeft.x, ', ', orangeFlyLeft.y, ')' );

        const orangeFlyLeftText = new Vector2( this.layoutBounds.left - 388, -30 );
        orangeFlyTitle.translation = orangeFlyLeftText;
        let orangeFlyTextLeft = null;
        orangeFlyTextLeft && orangeFlyTextLeft.stop();
        orangeFlyTextLeft = new Animation( {
            targets: [ {
              property: orangeFlyTextProperty,
              easing: easingProperty.value,
              to: orangeFlyLeftText
            } ],
            duration: orangeFlyDur
        } ).start();

        setTimeout( //eslint-disable-line bad-sim-text
        () => {
          orangeFlyGoRight();
        }, randomDelay( 500, 5000 )
      );

    };

    //BUTTON 
    const playButton = new RoundPushButton( {
        content: new Text( '⏵', { font: new Font( { size: 20 } ) } ),
        x: this.layoutBounds.centerX - 100,
        y: this.layoutBounds.centerY + 250,
      
        //ANIMATIONS
        listener: () => {

          if ( greyFlyPositionProperty.value.x === this.layoutBounds.left - 250 ) {
              greyFlyGoRight();
              blueFlyGoRight();
              redFlyGoRight();
              purpleFlyGoRight();
              orangeFlyGoRight();
          }
            //ORIGINAL POSITION 
        }
    } );
    this.addChild( playButton );


    const instructionText = new Text( 'Click play to feed the frog flies,', {
      x: this.layoutBounds.centerX - 475,
      y: this.layoutBounds.bottom - 50,
      fontSize: 24,
      fontFamily: 'fangsong',
      fill: 'white'
    } );
    this.addChild( instructionText );

    // Flies-caught counter:

    const fliesCaughtText = new Text( 'Flies caught: ', {
      x: this.layoutBounds.left + 60,
      y: this.layoutBounds.top + 40,
      fontSize: 20,
      fill: 'white',
      fontFamily: 'fangsong'
    } );
    this.addChild( fliesCaughtText );
  }
}

frogPopulation.register( 'FrogPopulationScreenView', FrogPopulationScreenView );
export default FrogPopulationScreenView;