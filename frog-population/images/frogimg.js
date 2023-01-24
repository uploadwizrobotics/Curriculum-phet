/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const frogimg = new Image();
const unlock = asyncLoader.createLock( frogimg );
frogimg.onload = unlock;
frogimg.src = 'https://clipartix.com/wp-content/uploads/2016/04/Frog-clip-art-for-teachers-free-clipart-images-2.png'
export default frogimg;