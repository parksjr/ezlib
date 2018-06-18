# EZLIB
Easy static methods wrapped around the zlib module.
## Install as a dependency in your express project
```sh
npm i -S ezlib
```
## Using
compress, and decompress with options

#### ES6
```javascript
import Ezlib from 'ezlib';

//  compress with default options (encoding: base64)
var textToDeflate = 'eeeeeeeeeeeeZZZZZZZZZZZZZZZ222222222222';
var deflatedString = Ezlib.compress(textToDeflate);
//  compress with gzip
var gzipString = Ezlib.compress(textToDeflate, { gzip: true });

// inflate default
var inflatedString = Ezlib.decompress(deflatedString);
//  gunzip
var gunzippedString = Ezlib.decompress(gzipString, { gzip: true });

//  working with a web app or api, we can do some parsing of specific options in the body
//  current options keys: 
//    'ezlib.options.gzip' (bool)
//    'ezlib.options.raw' (bool)
//    ezlib.options.encoding' (string)
var ezOptions = Ezlib.parseZlibOptionsFromBody(req.body);
var ezData = Ezlib.decompress(deflatedString, ezOptions);
```

## Contributing
clone the repo, ES6 source code is in the src directory, make your changes, test and build. `npm run build` will lint, test, and security check before transpiling into the lib directory.