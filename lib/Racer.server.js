import Backend from './Backend';
import Racer from './Racer';
import packageJson from '../package.json';

Racer.prototype.Backend = Backend;
Racer.prototype.version = packageJson.version;

Racer.prototype.createBackend = function(options) {
  return new Backend(this, options);
};
