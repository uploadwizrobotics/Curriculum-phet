// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Kenny
 */

import Screen from '../../../joist/js/Screen.js';
import comparingSuns from '../comparingSuns.js';
import ComparingSunsModel from './model/ComparingSunsModel.js';
import ComparingSunsScreenView from './view/ComparingSunsScreenView.js';
import ComparingSunsStrings from '../ComparingSunsStrings.js';
import ComparingSunsConstants from '../common/ComparingSunsConstants.js';


class ComparingSunsScreen extends Screen {

   constructor( ) {

    const options = ( {
      name: ComparingSunsStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: ComparingSunsConstants.SCREEN_OPTIONS.backgroundColorProperty
    } );

    super(
      () => new ComparingSunsModel( ),
      model => new ComparingSunsScreenView( model ),
      options
    );
  }
}

comparingSuns.register( 'ComparingSunsScreen', ComparingSunsScreen );
export default ComparingSunsScreen;