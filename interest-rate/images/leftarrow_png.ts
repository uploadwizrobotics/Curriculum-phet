/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;