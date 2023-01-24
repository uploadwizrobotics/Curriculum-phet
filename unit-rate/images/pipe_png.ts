/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAHovAAB6LwEf/fvJAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAC1QTFRF////7YoZ7YoZ7YoZ7YoZ7YoZ3Gkd5Hgb6IAa5nwb43Uc4HEc5nwb3Gkd7YoZ5Ku06QAAAA10Uk5TAAoMGHCIoKKiq8DBwWW+LVgAAAKxSURBVHja7dsxDYNQGIXRN1UBFrBBQkJCZxIGtoqohFrABBZqoRY6saOh6y/gQd5rzifgDme/KZ3Y7ZulR6o1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAfwZo59CyZWmNm1PhAN1xcjsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACurBlC4ztLz7jZp4ryGwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIXWDKH7J0uvuNkXDtAdJ7cDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgyto5tGxZWuPmlCrKbxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAggB/lKadRX/t8zwAAAABJRU5ErkJggg==';
export default image;