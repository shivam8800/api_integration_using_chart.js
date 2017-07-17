$(document).ready(function() {
	$.ajax({
		type:"GET",
		url:"http://api.data.gov.in/resource/9e13b6b8-ed3f-4493-89af-da4d178f7145?format=json&api-key=YOURKEY&limit=2000",
		data: {},
		success: function(data){
			list1 = []
			list2 = []
			list3 = []
			var maindata = data['records'];
			for (var i =0; i < data['records'].length; i++){

				if (data['records'][i]['country_state_ut_name'] =="Andhra Pradesh"){

				list1.push(data['records'][i]['all_categories___female']);
				list2.push(data['records'][i]['all_categories___male']);
				list3.push(data['records'][i]['all_categories___total']);
	   		
				}
			}
	   		console.log(list1);
			console.log(list2);
			console.log(list3);
		   	var ctx = document.getElementById('myChart').getContext('2d');
			var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16'],
			    datasets: [{
			      label: 'Male(in %)',
			      data: list1,
			      backgroundColor: "rgba(153,255,51,0.4)"
			    }, {
			      label: 'Female(in %)',
			      data: list2,
			      backgroundColor: "rgba(255,153,0,0.4)"
			    },
			    {
			      label: 'Total(in %)',
			      data: list3,
			      backgroundColor: "rgba(102, 102, 102)"
			    }]
			  }
			});

	   	}
	});
});