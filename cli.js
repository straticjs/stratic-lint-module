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

require('./index')('.', function(err) {
	// TODO print the error instead of throwing
	throw err;
});