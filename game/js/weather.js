

var weather = "none";
		if(weather=="rain")
		{
			// $(".weather").show();
			$("#weather").attr("src","data/img/weather/rainLight.gif")
		}
		if(weather=="snow")
		{
			// $(".weather").show();
			$("#weather").attr("src","data/img/weather/snow.gif")
		}
		if(weather=="none")
		{
			$("#weather").attr("src","data/img/weather/clear.png")
		}

