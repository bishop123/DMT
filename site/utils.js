function isArray(obj) {
	return Array.isArray(obj);
	//return Object.prototype.toString.call(obj) === "[object Array]";

}

function s2o(o) {
    var x = JSON.parse(o)
    return {
        id : x[0],
        ptr : x[1],
        index : x[2]
    } 	
}

function o2s() {
	return JSON.stringify ( [e.id , e.ptr , e.index] ); 
}
function copyArray(a) {
	var g= [];
	for (var i=0; i < a.length; i++) {
		g.push(a[i]);
	}
	return g;
}
function ptrJoin(a) {
	return '['+a.join('][')+']'
}

function ptrSplit(ptrs) {
	var rcarray = [];
	ptrs = ptrs.substr(1,ptrs.length);
	ptrs = ptrs.substr(0,ptrs.length-1);
	rcarray = ptrs.split('][');
	return rcarray;
}

function getObject(ptrList, o, debug) {
	var j = ptrList.length;
//	console.log(ptrList);
//	console.log("___ptrlist___");
//	console.log(o);
	for (var i = 0; i < j; i++) {
		if (typeof ptrList[i] === 'string')
			var pi = ptrList[i].replace(/\"/g, "");
		else 
			var pi = ptrList[i];
	//	console.log(pi);
		var z = o; 
	//console.log(o);
		if (debug) {
		console.log(pi+"____"+i);
		console.log(o[pi]);
		}
		if (o[pi] === undefined) {
			console.log("pi: "+pi);
			console.log(o);
			throw('match object error with '+ptrList.join());
			//console.log("OH SHIT! NO!!!!");	
			return z;
		}		
		o = o[pi]
//		console.log(o);
	}
	return o;
}

function getPos(e) { 
	if (!document.body) return;
	return {x:e.clientX+document.body.scrollLeft, y:e.clientY+document.body.scrollTop}
	/*
	var pos = {};
	pos.x = e.hasOwnProperty('offsetX') ? e.offsetX : e.layerX;
	pos.y = e.hasOwnProperty('offsetY') ? e.offsetY : e.layerY;
	return pos;
	*/

}

function mixin(from, to) {
	var oc = Object.create(from)
	for (var g in oc) {
	//	if (to[g] == undefined)
			to[g] = oc[g];
	}
}

function setObject(ptrList, o, val) {
	var j = ptrList.length;
	for (var i =0; i < j-1; i++) {
		if (!o[ptrList[i]])
			o[ptrList[i]] = {};

		o = o[ptrList[i]];
		
	}
	o[ptrList[j-1]] = val;
}
function cloneObj(obj) {
	return JSON.parse(JSON.stringify(obj));

}
var cloneObject = cloneObj;

/*
function clonePt(pt) {
	return {"index":pt.index, "ptr":pt.ptr, "index":pt.index
}
*/

function obj2ptr(item, gid, id, il) {
	pos = 0;
	for (var i in item) {
		if (typeof item[i] !== 'function') {
			if (typeof item === 'object') {
		//		if (typeof item[i] === 'string') {
		 		il.push(i)
				var ptrstring = '['+il.join('][')+']';

				models[gid]["id"][id]["ptr"][ptrString] = {};
				var r = models[this.gid]["id"][this.id];
				r["ptr"][ptr] = {};
				var rr = r["ptr"][ptr];
				rr["index"]["0"] = {"children":[], "parents":[]};
				r["props"] = {};
				r["props"]["index"] = pos;
				pos++;
				obj2ptr(item, gid, id, ptrSplit(ptrstring))
				//ar.push(ptrstring);
				//
			}
		}
	}
}
function _contains(a,i,k,v) {

	for (i; i < i < a.length; i++) {
		for (var b in k) {
			if (b == 'vals') {
				for (var p=0; p < k['vals'].length; p++) {
					if (k['vals'][p] == a[i]) {
						if (k['contains']){
							_contains(a, i, k['contains']);
							v.push(a[i]);
						}
						else return v;
					}
				}
			}
			//var m = k[j]
			//if (a[i] == k[j]) return {'value':k[j], 'index':i};
		}
	}
	return -1;
}
function contains(a,k) {
	_contains(a, 0, k, []);
}

function arrayHas(a, v) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] == v) return true;
	}
	return false;
}


function getStyle(selector) {
	var ss = document.styleSheets;
	for (var i =0; i < ss.length; i++) {
		var sic = ss[i]['cssRules']; 
		for (var j = 0; j < sic.length; j++) {
			if (sic[j].cssText.indexOf(selector) > 0)
				return sic[j].style
		}
	} 
}


function mkguid() {
	var S4 = function() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4()
			+ S4() + S4());
}

function getElPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while(obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return {"x":curleft, "y":curtop}
}
