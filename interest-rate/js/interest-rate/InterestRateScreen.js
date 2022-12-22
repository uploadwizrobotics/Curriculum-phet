// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Evan
 */

import Screen from '../../../joist/js/Screen.js';
import interestRate from '../interestRate.js';
import InterestRateModel from './model/InterestRateModel.js';
import InterestRateScreenView from './view/InterestRateScreenView.js';
import InterestRateStrings from '../InterestRateStrings.js';


class InterestRateScreen extends Screen {

  constructor() {
    const options = {
      name: InterestRateStrings.screen.nameStringProperty
    };

    super(
      () => new InterestRateModel(),
      model => new InterestRateScreenView( model ),
      options
    );
  }
}

interestRate.register( 'InterestRateScreen', InterestRateScreen );
export default InterestRateScreen;