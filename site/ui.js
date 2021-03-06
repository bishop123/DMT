// this creates the UI component 

function UIProgram(pointId, json) { 
	var json = point.JSON;
	//var json = jobjects[i];	
	graphLookup[gid].setFromJSON(json);
	this.uni = new universe("UIProgram");
	this.gid = uni.addGraph();
	this.gfx = new gfx(uni.id, gid);
	this.pointId = point.id;
	this.gfx.build();
	if (!events[this.uni.id]) events[this.uni.id] = UIHandler.prototype;
	this.gfx.moveTo(0,0);
	

};

UIEvents = {};
UIProgram.prototype = {

	"setEvent":function(evt, matchtype, ptr, callback) { //, callback) {
		if (!UIEvents[evt][matchType])
			UIEvents[evt][matchType] = {};
		
		UIEvents[evt][matchType][ptr.join()].push({"ptr":ptr, "callback":callback});
	},

	"setValue":function(point, type) {
		switch (type) {
			case "dropdown": 
				// do something...
			break;
		}	
	},

	"copyChild":function(ptr) {
		var cp = copyArray(ptr);
		var o = getObject(ptr, graphLookup);
		cp[0].id = this.gid;
		var to = getObject(cp, graphLookup);

		//this.copy = function(ptr2) { 
		//
		for (var i= 0; i < o.items.length; i++) {
			if (!to.items) to.items = [];
			to.items[i].value = o.items[i].value
			to.items[i].ptr = o.items[i].ptr;
			this(o.items[i].ptr)
		}
		//}
	}
}


//UIProgram.prototype.applicationEvents = { "partial": { }, "complete": { } };



function copyChildVals(ip, oid) {
	var ipo = getObject(ip, graphLookup);
	


}

function UIHandler () {
}
// need to change the extend to object.create and remove the .prototype shit...
UIHandler.prototype = Object.create(userEvents.prototype);

UIHandler.prototype.handleMouseClick = function(obj, e) {
	this.callbackHandler('handleMousClick');
}

UIHandler.prototype.callbackHandler = function(type, obj){
	var ca = copyArray(obj.rect.ptr);	

	for (var ptr in UIEvents[type]['contains']) {
		var pobj = UIEvents[type]['contains'];
		//
		if (ca.join().indexOf(ptr) == 0) 
			for (var o in pobj) {
				o.callback(o.ptr);		
			}
	}

	for (var ptr in UIEvents[type]['exact']) {
		var pobj = UIEvents[type]['exact'];
		//
		if (ca.join() == ptr.join())
			for (var o in pobj) {
				o.callback(o.ptr);		
			}
	}
}
