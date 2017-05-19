function flattenKeys () {

	var val = {};
	function set (obj, prevKey) {
		for (var key in obj) {
			var newKey= !prevKey ? key : prevKey+"."+key;
			if (Object.prototype.toString.call(obj[key]) !== '[object Object]' && typeof obj[key] !== 'null') {
				val[newKey]=obj[key];
			}
			else {
				val=set(obj[key],newKey)
			}
		}
		return val
	}
	return set
}

module.exports= flattenKeys();

