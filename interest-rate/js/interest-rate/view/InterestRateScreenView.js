// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Evan
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
// import InterestRateConstants from '../../common/InterestRateConstants.js';
import interestRate from '../../interestRate.js';
import { Color, FireListener, Text } from '../../../../scenery/js/imports.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import fifty_png from '../../../images/fifty_png.js';
import five_png from '../../../images/five_png.js';
import { Image } from '../../../../scenery/js/imports.js';
import hundred_png from '../../../images/hundred_png.js';
import bank_png from '../../../images/bank_png.js';
import ten_png from '../../../images/ten_png.js';
import twenty_png from '../../../images/twenty_png.js';
import minus_png from '../../../images/minus_png.js';
import plus_png from '../../../images/plus_png.js';
import rightarrow_png from '../../../images/rightarrow_png.js';
import Calculate_png from '../../../images/Calculate_png.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Property from '../../../../axon/js/Property.js';
import Range from '../../../../dot/js/Range.js';
import HSlider from '../../../../sun/js/HSlider.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import goldcoin_png from '../../../images/goldcoin_png.js';
import goldpile_png from '../../../images/goldpile_png.js';
import goldbars_png from '../../../images/goldbars_png.js';
import goldchest_png from '../../../images/goldchest_png.js';
import broke_png from '../../../images/broke_png.js';
import richguy_png from '../../../images/richguy_png.js';

class InterestRateScreenView extends ScreenView {

   constructor( model ) {

    super( );

    const totalPositionProperty = new Property( new Vector2( this.layoutBounds.centerX, this.layoutBounds.centerY + 130 ) );

    // COMPONENTS ON THE LEFT


    const interestSlider = new HSlider( model.interestOffsetIntoRangeProperty, new Range( 0, 1 ),
        {
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
          center: new Vector2( this.layoutBounds.left + 60, this.layoutBounds.centerY - 150 )
        } );
      for ( let i = 0; i <= 1; i += 0.1 ) {
        interestSlider.addMinorTick( i );
      }
      interestSlider.addMajorTick( 0 );
      interestSlider.addMajorTick( 10 );
      this.addChild( interestSlider );


      const interestValue = new Text( '0%', {
        center: new Vector2( interestSlider.center.x + 223, this.layoutBounds.centerY - 163 ),
        fontSize: 18,
        fontFamily: 'baskerville'
      } );
      this.addChild( interestValue );
      model.interestEstimateProperty.link( interest => {
          interestValue.text = interest.toString() + '%';
      } );

      const interestLabel = new Text( 'Interest Rate', {
          center: new Vector2( interestSlider.center.x, this.layoutBounds.centerY - 120 ),
          fontSize: 16
      } );
      this.addChild( interestLabel );

      const yearsSlider = new HSlider( model.yearsOffsetIntoRangeProperty, new Range( 0, 100 ), {
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
        center: new Vector2( this.layoutBounds.left + 60, this.layoutBounds.centerY )
      } );
      for ( let i = 0; i <= 100; i += 10 ) {
        yearsSlider.addMinorTick( i );
      }
    yearsSlider.addMajorTick( 0 );
    yearsSlider.addMajorTick( 100 );
    this.addChild( yearsSlider );

    const yearsValue = new Text( '0%', {
      center: new Vector2( yearsSlider.center.x + 223, this.layoutBounds.centerY - 13 ),
      fontSize: 18,
      fontFamily: 'baskerville'
    } );
    this.addChild( yearsValue );
    model.yearsEstimateProperty.link( years => {
        yearsValue.text = years.toString() + ' years';
    } );

    const yearsLabel = new Text( 'Years', {
        center: new Vector2( yearsSlider.center.x, yearsSlider.center.y + 35 ),
        fontSize: 16
    } );
    this.addChild( yearsLabel );

    const times = [ 'Annually', 'Semi-Annually', 'Quarterly', 'Monthly' ];

    let timesIndex = 0;

    const timesLabel = new Text( times[ timesIndex ], {
          left: yearsSlider.center.x,
          centerY: this.layoutBounds.centerY + 150,
          fontSize: 18,
          fontWeight: 'bold'
    } );
    this.addChild( timesLabel );

    const nextTimes = new Image( rightarrow_png, {
      maxWidth: 40,
      center: new Vector2( timesLabel.left, timesLabel.center.y + 35 ),
      cursor: 'pointer'
    } );
    nextTimes.addInputListener( new FireListener( {
      fire: () => {
        
        timesIndex += 1;
        if ( timesIndex < 4 ) {
        timesLabel.text = times[ timesIndex ];
        }
        else {
          timesIndex = 0;
          timesLabel.text = times[ timesIndex ];
        }
      }
    } ) );
    this.addChild( nextTimes );

    const initialTimesPrompt = new Text( 'Deposit: ', {
      fontSize: 18,
      right: timesLabel.left - 3,
      y: timesLabel.y
    } );
    this.addChild( initialTimesPrompt );

    //

    //


    const bankImage = new Image( bank_png, {
      center: new Vector2( this.layoutBounds.centerX, this.layoutBounds.centerY ),
      maxWidth: 180
    } );
    this.addChild( bankImage );

     let total = 0;
     let totalText;
     totalText = new Text( `$${total}`, {
      fontSize: 32,
      fontFamily: 'baskerville',
      fill: new Color( 30, 125, 19 )
    } );
    totalPositionProperty.linkAttribute( totalText, 'center' );
    this.addChild( totalText );


    const title = new Text( 'Interest Earnings', {
      fontSize: 40,
      fontFamily: 'tahoma',
      fill: 'black',

      center: new Vector2( this.layoutBounds.centerX, this.layoutBounds.top + 50 )
    } );
    this.addChild( title );


    const calculateImage = new Image( Calculate_png, {
      maxWidth: 200,
      center: new Vector2( this.layoutBounds.centerX, this.layoutBounds.bottom - 50 ),
      cursor: 'pointer'
    } );
    calculateImage.addInputListener( new FireListener( {
      fire: () => {

        let interestPercent = interestValue.text.slice( 0, -1 );
          interestPercent = parseFloat( interestPercent );


          let yearsNumber = yearsValue.text.slice( 0, -6 );
          yearsNumber = parseFloat( yearsNumber );


          let initialAmount = totalText.text.slice( 1 );
          initialAmount = parseFloat( initialAmount );

          const timesValue = timesLabel.text;

          let calculateTotal;

          let time;

          let avsan;
       
        if ( timesValue === 'Annually' ) {
          
          console.log( 'Annually' );

          time = 'annual';
          avsan = 'an';

          calculateTotal = initialAmount * ( Math.pow( ( 1 + ( interestPercent / 100 ) ), ( yearsNumber ) ) );
          calculateTotal = calculateTotal - initialAmount;
          calculateTotal = calculateTotal.toString();
          calculateTotal = calculateTotal.slice( 0, ( calculateTotal.indexOf( '.' ) ) + 3 );
          calculateTotal = Number( calculateTotal );
          console.log( interestPercent, yearsNumber, initialAmount, calculateTotal );
          
          this.removeAllChildren();
        
        }
        else if ( timesValue === 'Semi-Annually' ) {

          console.log( 'Semi-Annually' );

          time = 'semi annual';

          avsan = 'a';

          calculateTotal = initialAmount * ( Math.pow( ( 1 + ( interestPercent / 100 ) / 2 ), ( yearsNumber ) * 2 ) );
          calculateTotal = calculateTotal - initialAmount;
          calculateTotal = calculateTotal.toString();
          calculateTotal = calculateTotal.slice( 0, ( calculateTotal.indexOf( '.' ) ) + 3 );
          calculateTotal = Number( calculateTotal );
          console.log( interestPercent, yearsNumber, initialAmount, calculateTotal );

          this.removeAllChildren();

        }
        else if ( timesValue === 'Quarterly' ) {

          console.log( 'Quarterly' );

          time = 'quarterly';

          avsan = 'a';

          calculateTotal = initialAmount * ( Math.pow( ( 1 + ( interestPercent / 100 ) / 4 ), ( yearsNumber ) * 4 ) );
          calculateTotal = calculateTotal - initialAmount;
          calculateTotal = calculateTotal.toString();
          calculateTotal = calculateTotal.slice( 0, ( calculateTotal.indexOf( '.' ) ) + 3 );
          calculateTotal = Number( calculateTotal );
          console.log( interestPercent, yearsNumber, initialAmount, calculateTotal );
  
          this.removeAllChildren();

        }
        else if ( timesValue === 'Monthly' ) {

          console.log( 'Monthly' );

          time = 'monthly';

          avsan = 'a';

          calculateTotal = initialAmount * ( Math.pow( ( 1 + ( interestPercent / 100 ) / 12 ), ( yearsNumber ) * 12 ) );
          calculateTotal = calculateTotal - initialAmount;
          calculateTotal = calculateTotal.toString();
          calculateTotal = calculateTotal.slice( 0, ( calculateTotal.indexOf( '.' ) ) + 3 );
          calculateTotal = Number( calculateTotal );
          console.log( interestPercent, yearsNumber, initialAmount, calculateTotal );

          this.removeAllChildren();
        }


        const firstLine = new Text( `With a deposit of $${initialAmount} and ${avsan} ${time} interest rate of ${interestPercent}%`, {
          fontSize: 28,
          right: this.layoutBounds.right,
          centerY: this.layoutBounds.centerY - 30
        } );
        this.addChild( firstLine );

        const secondLine = new Text( `The accumulated total after ${yearsNumber} years is $${calculateTotal + initialAmount}`, {
          fontSize: 28,
          right: this.layoutBounds.right,
          centerY: this.layoutBounds.centerY + 30
        } );
        this.addChild( secondLine );

        if ( ( calculateTotal + initialAmount ) === 0 ) {
          this.addChild( new Image( broke_png, {
            maxWidth: 200,
            center: new Vector2( this.layoutBounds.left + 100, this.layoutBounds.centerY )
          } ) );
        }

        else if ( ( calculateTotal + initialAmount ) >= 1 && ( calculateTotal + initialAmount ) <= 49 ) {

            this.addChild( new Image( goldcoin_png, {
                  maxWidth: 200,
                  center: new Vector2( this.layoutBounds.left + 100, this.layoutBounds.centerY )
            } ) );

        }

        else if ( ( calculateTotal + initialAmount ) >= 50 && ( calculateTotal + initialAmount ) <= 499 ) {
         
          this.addChild( new Image( goldpile_png, {
                  maxWidth: 200,
                  center: new Vector2( this.layoutBounds.left + 100, this.layoutBounds.centerY )
          } ) );

        }

        else if ( ( calculateTotal + initialAmount ) >= 500 && ( calculateTotal + initialAmount ) <= 999 ) {

          this.addChild( new Image( goldbars_png, {
                  maxWidth: 200,
                  center: new Vector2( this.layoutBounds.left + 100, this.layoutBounds.centerY )
          } ) );

        }

        else if ( ( calculateTotal + initialAmount ) >= 1000 && ( calculateTotal + initialAmount ) <= 4999 ) {
          this.addChild( new Image( goldchest_png, {
                  maxWidth: 200,
                  center: new Vector2( this.layoutBounds.left + 100, this.layoutBounds.centerY )
          } ) );
        }

        else {
          this.addChild( new Image( richguy_png, {
            maxWidth: 200,
            center: new Vector2( this.layoutBounds.left + 100, this.layoutBounds.centerY )
          } ) );
        }
        const resetAllButton = new ResetAllButton( {
            listener: () => {

            location.reload();

            },
            x: this.layoutBounds.right,
            y: this.layoutBounds.bottom - 30
          } );
          this.addChild( resetAllButton );
        
      }
    } ) );
    this.addChild( calculateImage );


     //BILLS 

    //$5 

    const plusFive = new RectangularPushButton( {
        content: new Image( plus_png ),
        maxWidth: 30,
        x: this.layoutBounds.right - 85,
        y: this.layoutBounds.centerY - 220,
        baseColor: 'transparent',
        listener: () => {
          if ( totalText === undefined ) {
    
            total += 5;
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );

          }
            else if ( totalText !== undefined ) {
    
              this.removeChild( totalText );
    
              total += 5;
      
              totalText = new Text( `$${total}`, {
                fontSize: 32,
                fontFamily: 'baskerville',
                fill: new Color( 30, 125, 19 )
              } );
              totalPositionProperty.linkAttribute( totalText, 'center' );
              this.addChild( totalText );
            
            }
        }
    } );
    this.addChild( plusFive );

    const five = new Image( five_png, {
      maxWidth: 100,
      x: this.layoutBounds.right - 50,
      y: this.layoutBounds.centerY - 250,
      baseColor: 'transparent',
      listener: () => {
        
        if ( totalText === undefined ) {

          total += 5;
          

          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 ),
            x: this.layoutBounds.left - 60,
            y: this.layoutBounds.bottom - 50
          } );
          this.addChild( totalText );

          }
          else if ( totalText !== undefined ) {

            this.removeChild( totalText );

            total += 5;
            
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 ),
              x: this.layoutBounds.left - 60,
              y: this.layoutBounds.bottom - 50
            } );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( five );

    const fiveLabel = new Text( '$5', {
      fontSize: 16,
      center: new Vector2( five.center.x, five.y + 10 ),
      fontFamily: 'baskerville'
    } );
    this.addChild( fiveLabel );

    const minusFive = new RectangularPushButton( {
      content: new Image( minus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right + 55,
      y: this.layoutBounds.centerY - 220,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {
          
          if ( total <= 5 ) {
            total = 0;
          }
          else {
          total -= 5;
          }
          

          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );

          }
          else if ( totalText !== undefined ) {

            this.removeChild( totalText );

          
            if ( total <= 5 ) {
                total = 0;
            }
            else {
            total -= 5;
            }
          
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( minusFive );

    //


    //$10

    const plusTen = new RectangularPushButton( {
      content: new Image( plus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right - 85,
      y: this.layoutBounds.centerY - 120,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {
  
          total += 10;
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
  
            total += 10;
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( plusTen );

    const ten = new Image( ten_png, {
      maxWidth: 100,
      x: this.layoutBounds.right - 50,
      y: this.layoutBounds.centerY - 150,
      baseColor: 'transparent',
      listener: () => {

        if ( totalText === undefined ) {
  
          total += 10;

  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 ),
            x: this.layoutBounds.left - 60,
            y: this.layoutBounds.bottom - 50
          } );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
            total += 10;

    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 ),
              x: this.layoutBounds.left - 60,
              y: this.layoutBounds.bottom - 50
            } );
            this.addChild( totalText );
          }

      }
    } );
    this.addChild( ten );

    const tenLabel = new Text( '$10', {
      fontSize: 16,
      fontFamily: 'baskerville',
      center: new Vector2( ten.center.x, ten.y + 10 )
    } );
    this.addChild( tenLabel );

    const minusTen = new RectangularPushButton( {
      content: new Image( minus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right + 55,
      y: this.layoutBounds.centerY - 120,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {

          
          if ( total <= 10 ) {
            total = 0;
          }
          else {
          total -= 10;
          }

  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
           
            if ( total <= 10 ) {
                total = 0;
            }
            else {
            total -= 10;
            }
            
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( minusTen );

    //


    //$20 

    const plusTwenty = new RectangularPushButton( {
      content: new Image( plus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right - 85,
      y: this.layoutBounds.centerY - 20,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {
  
          total += 20;
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
            total += 20;

    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( plusTwenty );

    const twenty = new Image( twenty_png, {
      baseColor: 'transparent',
      maxWidth: 100,
      x: this.layoutBounds.right - 50,
      y: this.layoutBounds.centerY - 50,
      listener: () => {

        if ( totalText === undefined ) {
  
          total += 20;
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 ),
            x: this.layoutBounds.left - 60,
            y: this.layoutBounds.bottom - 50
          } );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
  
            total += 20;

    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 ),
              x: this.layoutBounds.left - 60,
              y: this.layoutBounds.bottom - 50
            } );
            this.addChild( totalText );
          }

      }
    } );
    this.addChild( twenty );

    const twentyLabel = new Text( '$20', {
      fontSize: 16,
      fontFamily: 'baskerville',
      center: new Vector2( twenty.center.x, twenty.y + 10 )
    } );
    this.addChild( twentyLabel );

    const minusTwenty = new RectangularPushButton( {
      content: new Image( minus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right + 55,
      y: this.layoutBounds.centerY - 20,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {
          
          if ( total <= 20 ) {
            total = 0;
          }
          else {
          total -= 20;
          }
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
           
            if ( total <= 20 ) {
                total = 0;
            }
            else {
            total -= 20;
            }
            
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( minusTwenty );

    //


    //$50 

    const plusFifty = new RectangularPushButton( {
      content: new Image( plus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right - 85,
      y: this.layoutBounds.centerY + 80,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {

  
          total += 50;
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
  
            total += 50;
          
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( plusFifty );

    const fifty = new Image( fifty_png, {
      maxWidth: 100,
      x: this.layoutBounds.right - 50,
      y: this.layoutBounds.centerY + 50,
      baseColor: 'transparent',
      listener: () => {

        if ( totalText === undefined ) {

        total += 50;


        totalText = new Text( `$${total}`, {
          fontSize: 32,
          fontFamily: 'baskerville',
          fill: new Color( 30, 125, 19 ),
          x: this.layoutBounds.left - 60,
          y: this.layoutBounds.bottom - 50
        } );
        this.addChild( totalText );

        }
        else if ( totalText !== undefined ) {

          this.removeChild( totalText );


          total += 50;
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 ),
            x: this.layoutBounds.left - 60,
            y: this.layoutBounds.bottom - 50
          } );
          this.addChild( totalText );
        }
    }
    } );
    this.addChild( fifty );

    const fiftyLabel = new Text( '$50', {
      fontSize: 16,
      fontFamily: 'baskerville',
      center: new Vector2( fifty.center.x, fifty.y + 10 )
    } );
    this.addChild( fiftyLabel );

    const minusFifty = new RectangularPushButton( {
      content: new Image( minus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right + 55,
      y: this.layoutBounds.centerY + 80,
      baseColor: 'transparent',
      
      listener: () => {

        if ( totalText === undefined ) {

          
          if ( total <= 50 ) {
            total = 0;
          }
          else {
          total -= 50;
          }
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
           
            if ( total <= 50 ) {
                total = 0;
            }
            else {
            total -= 50;
            }
            
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( minusFifty );

    //


    //$100

    const plusHundred = new RectangularPushButton( {
      content: new Image( plus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right - 85,
      y: this.layoutBounds.centerY + 180,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {

  
          total += 100;
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
            total += 100;
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }

    } );
    this.addChild( plusHundred );

    const hundred = new Image( hundred_png, {
      maxWidth: 100,
      x: this.layoutBounds.right - 50,
      y: this.layoutBounds.centerY + 150,
      baseColor: 'transparent',
      listener: () => {

        if ( totalText === undefined ) {

  
          total += 100;
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 ),
            x: this.layoutBounds.left - 60,
            y: this.layoutBounds.bottom - 50
          } );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
  
            total += 100;
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 ),
              x: this.layoutBounds.left - 60,
              y: this.layoutBounds.bottom - 50
            } );
            this.addChild( totalText );
          }

      }
    } );
    this.addChild( hundred );

    const hundredLabel = new Text( '$100', {
      fontSize: 16,
      fontFamily: 'baskerville',
      center: new Vector2( hundred.center.x, hundred.y + 10 )
    } );
    this.addChild( hundredLabel );

    const minusHundred = new RectangularPushButton( {
      content: new Image( minus_png ),
      maxWidth: 30,
      x: this.layoutBounds.right + 55,
      y: this.layoutBounds.centerY + 180,
      baseColor: 'transparent',
      listener: () => {
        if ( totalText === undefined ) {
          
          if ( total <= 100 ) {
            total = 0;
          }
          else {
          total -= 100;
          }
  
          totalText = new Text( `$${total}`, {
            fontSize: 32,
            fontFamily: 'baskerville',
            fill: new Color( 30, 125, 19 )
          } );
          totalPositionProperty.linkAttribute( totalText, 'center' );
          this.addChild( totalText );
  
          }
          else if ( totalText !== undefined ) {
  
            this.removeChild( totalText );
  
           
            if ( total <= 100 ) {
                total = 0;
            }
            else {
            total -= 100;
            }
            
    
            totalText = new Text( `$${total}`, {
              fontSize: 32,
              fontFamily: 'baskerville',
              fill: new Color( 30, 125, 19 )
            } );
            totalPositionProperty.linkAttribute( totalText, 'center' );
            this.addChild( totalText );
          }
      }
    } );
    this.addChild( minusHundred );
 
    //
  }

}

interestRate.register( 'InterestRateScreenView', InterestRateScreenView );
export default InterestRateScreenView;