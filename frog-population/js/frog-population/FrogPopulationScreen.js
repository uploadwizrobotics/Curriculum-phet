// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Avital
 */

import Screen from '../../../joist/js/Screen.js';
import frogPopulation from '../frogPopulation.js';
import FrogPopulationModel from './model/FrogPopulationModel.js';
import FrogPopulationScreenView from './view/FrogPopulationScreenView.js';
import FrogPopulationStrings from '../FrogPopulationStrings.js';
import merge from '../../../phet-core/js/merge.js';
import FrogPopulationConstants from '../common/FrogPopulationConstants.js';


class FrogPopulationScreen extends Screen {

  constructor( ) {

    const options = merge( {
      name: FrogPopulationStrings.screen.nameStringProperty
    }, FrogPopulationConstants.SCREEN_OPTIONS );

    super(
      () => new FrogPopulationModel( ),
      model => new FrogPopulationScreenView( model ),
      options
    );
  }
}

frogPopulation.register( 'FrogPopulationScreen', FrogPopulationScreen );
export default FrogPopulationScreen;