// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Evan
 */

import Screen from '../../../joist/js/Screen.js';
import unitRate from '../unitRate.js';
import UnitRateModel from './model/UnitRateModel.js';
import UnitRateScreenView from './view/UnitRateScreenView.js';
import UnitRateStrings from '../UnitRateStrings.js';

class UnitRateScreen extends Screen {

  constructor() {

    const options = {
      name: UnitRateStrings.screen.nameStringProperty
   };

    super(
      () => new UnitRateModel( ),
      model => new UnitRateScreenView( model ),
      options
    );
  }
}

unitRate.register( 'UnitRateScreen', UnitRateScreen );
export default UnitRateScreen;