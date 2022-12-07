// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author evan
 */

import Screen from '../../../joist/js/Screen.js';

import testEvan from '../testEvan.js';
import TestEvanModel from './model/TestEvanModel.js';
import TestEvanScreenView from './view/TestEvanScreenView.js';
import TestEvanStrings from '../TestEvanStrings.js';
import TestEvanConstants from '../common/TestEvanConstants.js';
import merge from '../../../phet-core/js/merge.js';

class TestEvanScreen extends Screen {

   constructor() {

    const options = merge( {
      name: TestEvanStrings.screen.nameStringProperty

    }, TestEvanConstants.SCREEN_OPTIONS );

    super(
      () => new TestEvanModel( ),
      model => new TestEvanScreenView( model ),
      options
      
    );
  }
}

testEvan.register( 'TestEvanScreen', TestEvanScreen );
export default TestEvanScreen;