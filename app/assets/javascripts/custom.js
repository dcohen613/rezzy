
 $(document).ready(function ($)  {


    $(".reservation").draggable({
    	appendTo: "body",
    	cursor: "move",
    	helper: 'clone',
    	revert: "invalid"
			});
    $("#pic").draggable({
    		appendTo: "body",
    	cursor: "move",
    	helper: 'clone',
    	revert: "invalid"
			
    });
    $(".col-xs-1").droppable({  
      tolerance: "intersect",
    	accept: ".reservation",
    	activeClass: "ui-state-default",
    	hoverClass: "ui-state-hover",
    	drop: function(event, ui) {        
        	$(this).append($(ui));
    				}
			});
 		 });

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
