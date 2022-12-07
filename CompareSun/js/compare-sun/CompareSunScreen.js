// Copyright 2022, University of Colorado Boulder

/**
 * 
 *
 * @author Kenny
 */

import Screen from '../../../joist/js/Screen.js';
import compareSun from '../compareSun.js';
import CompareSunModel from './model/CompareSunModel.js';
import CompareSunScreenView from './view/CompareSunScreenView.js';


class CompareSunScreen extends Screen {

 constructor( ) {

    super(
      () => new CompareSunModel( ),
      model => new CompareSunScreenView( model )
    );
  }
}

compareSun.register( 'CompareSunScreen', CompareSunScreen );
export default CompareSunScreen;