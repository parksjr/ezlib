import zlib from 'zlib';

class Ezlib {
  constructor() {
    
  }
  static compress(data, options) {
    if (!data) {
      throw new Error('Must provide string data to be deflated.');
    }
    options = options || {};
    options.encoding = options.encoding || 'base64';
    if (options.gzip) {
      return zlib.gzipSync(data).toString(options.encoding);
    }
    else {
      if (options.raw) {
        return zlib.deflateRawSync(data).toString(options.encoding);
      }
      else {
        return zlib.deflateSync(data).toString(options.encoding);
      }
    }
  }
  static decompress(data, options) {
    if (!data) {
      throw new Error('Must provide data to be inflated.');
    }
    options = options || {};
    options.encoding = options.encoding || 'base64';
    if (options.raw) {
      if (options.gzip) {
        return zlib.gunzipSync(new Buffer(data, options.encoding)).toString();
      }
      else return zlib.inflateRawSync(new Buffer(data, options.encoding)).toString();
    }
    //  unzip auto detects which method based on header
    else return zlib.unzipSync(new Buffer(data, options.encoding)).toString();
  }
  static parseZlibOptionsFromBody(body) {
    return {
      gzip: body['ezlib.options.gzip'] || false,
      raw: body['ezlib.options.raw'] || false,
      encoding: body['ezlib.options.encoding'] || 'base64'
    };
  }
}

export default Ezlib;