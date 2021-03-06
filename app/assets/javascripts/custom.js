

 /*function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	var tableID = ev.target.id;
 //   tableID.innerHTML = "we dragged"; //document.getElementById(data).innerHTML;
    ev.target.appendChild(document.getElementById(data));
}*/

jQuery(document).ready(function ($) {
	var d = new Date();
	d.setDate(d.getDate() + 5);
	var month = d.getMonth();
	jQuery('.datetimepicker').datetimepicker({
		minTime: 0,
		maxTime: '24:00',
		minDate: 0,
		maxDate: d,
		format: 'Y-m-d H:i:s',
		inline:true,
		step:15,
		timepickerScrollbar:false,
		yearStart:2015,
		yearEnd:2015,
		scrollMonth: false,
		monthStart: month,
		monthEnd: month,
		onSelectDate:function(ct,$i){
			var td = new Date();
			if((ct.dateFormat('Ymd')) > (td.dateFormat('Ymd'))) {
				jQuery('.datetimepicker').datetimepicker({
					minTime:'10:00',
				});
			} else {
				jQuery('.datetimepicker').datetimepicker({
					minTime:0,
				});
			}	
		}
	});
});

 $(document).ready(function ($)  {

    $(".reservation").draggable({
    	cursor: "move",
    	helper: 'clone',
    	revert: "invalid"
	});
	$("#droppable").droppable({  
        tolerance: "intersect",
    	accept: "#draggable",
    	drop:function(e, ui) {
        	$(e.target).append($(ui.draggable).detach().css({'top':'', 'left':''}));
    	}
	});
    $(".tabletop").droppable({  
        tolerance: "intersect",
    	accept: "#draggable",
    	drop:function(e, ui) {
        	$(e.target).append($(ui.draggable).detach().css({'top':'', 'left':''}));
    	},
    		over:function(e, ui){
    		$(e.target).css("background-Color","rgb(83,204,245)");
    	},
    	out:function(e, ui){
    		$(e.target).css("background-Color","black");
    	}
    
	});
 });