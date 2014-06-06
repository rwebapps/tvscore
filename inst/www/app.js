$(function(){
	function addrow(){
		$("tbody").append('<tr> <td> <div class="form-group"> <input type="number" min="20" max="80" class="form-control agefield" placeholder="Age"> </div> </td> <td> <div class="form-group"> <select class="form-control maritalfield"> <option>MARRIED</option> <option>DIVORCED</option> <option>WIDOWED</option> <option>NEVER MARRIED</option> </select> </div> </td> <td> <div class="form-group"> <input disabled="disabled" class="disabled form-control tvfield"> </div> </td> </tr>');
	}

	for(var i = 0; i < 5; i++){
		addrow();
	}

	//Handler for basic RPC
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
			//repopulate the table
			$("tbody tr").each(function(i){
				$(this).find(".agefield").val(output[i].age);
				$(this).find(".maritalfield").val(output[i].marital);
				$(this).find(".tvfield").val(output[i].tv);
			});
		}).fail(function(){
			alert(req.responseText);
		});
	});

	//CSV file scoring
	$("#csvfile").on("change", function loadfile(e){
		if(!$("#csvfile").val()) return;
		var req = ocpu.call("tv", {
			input : $("#csvfile")[0].files[0]
		}, function(tmp){
			$("#outputcsv").removeClass("hide").attr("href", tmp.getLoc() + "R/.val/csv")
		}).fail(function(){
			alert(req.responseText)
		})
	});

	//update the example curl line with the current server
	$("#curlcode").text(
		$("#curlcode").text().replace(
			"https://public.opencpu.org/ocpu/github/jeroenooms/scoring/R/tv/json", 
			window.location.href.match(".*/scoring/")[0] + "R/tv/json"
		)
	)
});

