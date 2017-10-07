function getData(){
event.preventDefault();
		console.log("Heloo2");

	$.ajax({
		type: 'GET',
		
		url: 'https://api.openweathermap.org/data/2.5/weather',
		
		data: {
			'appid': '19840aa746763383cc4908fba9be5d95',
			'q': $("#myInput").val()
		},
		success: function(success_data){
			console.log('success');
			displayData(success_data);
		},
		error: function(error_data){
			console.log('errors');

			console.log(error_data);
		}
	});

}

function displayData(success_data)
{
	

	var temp=success_data.main.temp;
	var weather=success_data.weather[0].main;
	var humidity=success_data.main.humidity;
	var E1=$('<h2>',{
		'html':"temp in C : "+(temp-273.15),
	});
	var E2=$('<h2>',{
		'html':"Weather : "+weather,
	});
	var E3=$('<h2>',{
		'html':"Humidity : "+humidity,
	});
	$("#info h1").html($("#city-name").val());
	$("#main-div").append(E1);
	$("#main-div").append(E2);
	$("#main-div").append(E3);

	$('#info').addClass('infocss');
}



// $('#submit-btn').click(ajaxRequest);
function main()
{
			console.log("Helo1");

	$('#submit-btn').click(getData);
}
$( document ).ready(main);
