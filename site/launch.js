
function launch() {
//	alert("test..");
//		document.body.appendChild(canvas);
	
//	console.log = function() { };
	//test//

	var uni = new universe("ptr");
//	models[uni.id].type = "ptr";
// **todo**
//
//  it might be nice to automatically group elements...
//
//
//
	contextMenu.setup();
	stageMenu.setup();
	saveMenu.setup();	


	var jobjects = [
	//{"UI":{"save/load dialogue":[{"row":{"label":[{"text":"save"}, {"events":"onClick"}]}}, {"row":{"label":[{"text":"load"}, {"events":"onClick"}]}}]}},
	    		{"UI":{"dialog":[{"view":"grid"},{"row":[{"label":[{"text":"save as"}]}, {"inputbox":[{"text":"enterSomeText"}]}, {"button":[{"type":"onSubmit"}]}]}]}},
	    	//	{"UI":{"dialog":[{"view":"grid"},{"row":[{"label":[{"text":"load"}]}, {"inputbox":[{"text":"enterSomeText"}]}, {"button":[{"type":"onSubmit"}]}]}]}},
	  //  		{"DB":{"internals":{"dialogs":["name", "timestamp", "graph"]}}},
	    		{"DB":{"internals":{"dialogs":["name", "timestamp", "graph"]}}},
			["timeStamp"],
			["serializeUniverse"]

	    ];
	for (var i =0; i < jobjects.length; i++ ) {
		var gid = uni.addGraph();
		// var json = {"UI":{"save/load dialogue":[{"label":[{"text":"save"}, {"events":"onClick"}]}, {"label":[{"text":"load"}, {"events":"onClick"}]}]}}
		//
		var json = jobjects[i];
		//var json = {"UI":{"save menu":["save", "load"]}}
		
		/*
		var json = {"UI":{"save/load dialogue":["save", "load"]}}
		var json = {"UI":{"save/load dialogue":["save", "load"]}}
		*/
	//	universes['ptr', uni.id, 
		graphLookup[gid].setFromJSON(json);
		//graphLookup[gid].setPtrIndex(true);
		var gf = new gfx(uni.id, gid);
		gf.moveTo(i*100, i*10);
		//gf.setXYZ();
		//gf.build();
		gf.build();

		//graphLookup[gid].setXYZ(mid,i*10,i*10, i);
		//graphLookup[gid].showAll(mid);

		/*
		//var gid = uni.addGraph();
		var json = {"234":{"rfadsfrr":{"ee234e":["xxxcadsf", "m234lkj"], "vaxvv":"r234r"}, "134v":["sa234", "3"]}}
		var mid = graphLookup[gid].setFromJSON(json)
		graphLookup[gid].setXY(mid,0,0);
		graphLookup[gid].showAll(mid);
		*/
	}
	/*
	var gid = uni.addGraph();
	var json = {"UI":{"dialog":[{"view":"grid"},{"row":[{"label":[{"text":"save as"}]}, {"inputbox":[{"text":"enterSomeText"}]}, {"button":[{"type":"onSubmit"}]}]}]}};
	graphLookup[gid].setFromJSON(json);	
	graphLookup[gid]['item'][0]['item'][0].layout = "grid";
	var gf = new gfx(uni.id, gid);
	gf.moveTo(300, 0);
	gf.build();
	*/

//	var cu = gid.uni
//	var gu = gid.gid 

	// use different event handlers 
	// need to seperate the links handler too
//	cm = new contextHandler(gu);//contextMenu.bind({"id":gu}); // cm should be baked into moveHandler which should be Obj Handler
	//console.log(nodeEvents);
	//moveHandler();
	// universes["type"]["events"] 
	linkCurve.prototype.setup();
	events[uni.id] = nodeEvents; // should be instance of obj handler
	//console.log(uni.id);
	//console.log("-uni.id-");
	//var hmc = handleMouseClick.bind({"id":gu});

	// gomberg seltzer 
//	var u = new ui();
//	u.drawUniverse(); // should send an event 

//	alert(d1 - new Date());
	// load data by setting ptr / ids
	//var context = 
}

