// Copyright 2023, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Avital
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import FrogPopulationScreen from './frog-population/FrogPopulationScreen.js';
import FrogPopulationStrings from './FrogPopulationStrings.js';

// Launch the sim. Beware that scenery Image nodes created outside simLauncher.launch() will have zero bounds
// until the images are fully loaded. See https://github.com/phetsims/coulombs-law/issues/70#issuecomment-429037461
simLauncher.launch( () => {

  const titleStringProperty = FrogPopulationStrings[ 'frog-population' ].titleStringProperty;

  const screens = [
    new FrogPopulationScreen( { tandem: Tandem.ROOT.createTandem( 'frogPopulationScreen' ) } )
  ];

  const SimOptions = {

    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    credits: {
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      contributors: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  const sim = new Sim( titleStringProperty, screens, SimOptions );
  sim.start();
} );