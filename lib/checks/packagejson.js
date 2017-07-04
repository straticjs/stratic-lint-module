/*

This file is part of stratic-lint-module.

stratic-lint-module is free software: you can redistribute it and/or
modify it under the terms of the GNU General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

stratic-lint-module is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public License
along with stratic-lint-module.  If not, see
<http://www.gnu.org/licenses/>.

*/

'use strict';

if (!Array.prototype.includes) require('es7-array.prototype.includes');

var packagejson = require('read-package-json');
var path = require('path');

module.exports.warnOnly = false;
module.exports.invoke = function packageJsonCheck(dir, opts, cb) {
	packagejson(path.join(dir, 'package.json'), function(err, data) {
		if (err) {
			cb(err);
		}
		
		var keywords = data.keywords;

		if (!data.keywords.includes('stratic')) {
			cb(new Error('package.json doesn\'t include the `stratic` keyword'));
		}
	});
};
