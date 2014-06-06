$(function(){
	function addrow(){
		$("tbody").append('<tr> <td> <div class="form-group"> <input type="number" min="20" max="80" class="form-control agefield" placeholder="Age"> </div> </td> <td> <div class="form-group"> <select class="form-control maritalfield"> <option>MARRIED</option> <option>DIVORCED</option> <option>WIDOWED</option> <option>NEVER MARRIED</option> </select> </div> </td> <td> <div class="form-group"> <input disabled="disabled" class="disabled form-control tvfield"> </div> </td> </tr>');
	}

	for(var i = 0; i < 5; i++){
		addrow();
	}

	$("#scorebutton").click(function(){
		$(".tvfield").val("")
		var data = [];
		$("tbody tr").each(function(i){
			data[i] = {
				age : parseFloat($(this).find(".agefield").val()),
				marital : $(this).find(".maritalfield").val()
			};
		});
		
		//RPC request to score data
		var req = ocpu.rpc("tv", {input : data}, function(output){
			$("tbody tr").each(function(i){
				$(this).find(".tvfield").val(output[i]);
			});
		}).fail(function(){
			alert(req.responseText);
		});
	});
});
