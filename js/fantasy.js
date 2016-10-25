// https://basketball.fantasysports.yahoo.com/nba/105100/6/startactiveplayers?date=2016-02-17&crumb=NOiQuYBDyF2
//http://basketball.fantasysports.yahoo.com/nba/59665/2/startactiveplayers?date=2016-10-25&crumb=DbwzyakjRMM
function submitted(){
	var days = -1;
	var today = new Date();
	var year = today.getFullYear();
	var urlString = document.getElementById('url').value;
	var error = document.getElementById('err');
 	var validURL1 = "https://basketball.fantasysports.yahoo.com/nba/";
	var validURL2 = "http://basketball.fantasysports.yahoo.com/nba/";
	var days = document.getElementById("days");

    days = document.getElementById('days').value;

	if(error.innerHTML.length > 0) error.innerHTML = "";
	if(urlString.indexOf(year) > -1 && (urlString.length <= 109 || urlString.length >= 104)
		&& (urlString.substring(0,validURL1.length) == validURL1
		|| urlString.substring(0,validURL2.length) == validURL2)){
		var start = urlString.indexOf(year);
		var date = urlString.substring(start,start+10);
		var oldDate = "";
		var i;
		for(i = 0; i < days; i++){
			oldDate = date;
			date = nextDate(date);
			try{
			chrome.tabs.create({url: urlString});
			urlString = urlString.replace(oldDate,date);
			}catch (err){
				console.log("incorrect URL");
			}
		}
		}else{
			error.innerHTML = "Invalid URL"
			document.getElementById('url').value = "";
		}
	}

// https://basketball.fantasysports.yahoo.com/nba/105100/6/startactiveplayers?date=2016-02-17&crumb=NOiQuYBDyF2
function nextDate(date){
	var MMrange = 30;

	var result = "";
	var daystr = date.substring(8,10);
	var monthstr = date.substring(5,7);

	var day = parseInt(daystr);
	var month = parseInt(monthstr);
	var year = parseInt(date.substring(0,4));
	if(month==1||month==3||month==5||month==7||month==8||month==10||month==12) MMrange = 31;
	else if(month = 2) MMrange = 28;
	if(year%4==0 && month==2) MMrange = 29;

	if(day == MMrange){
		day = 1;
		month++;
	}else if(month==12 && day==31){
		year++;
		month = 1;
		day = 1;
	}else{
		day++;
	}

	result = year.toString()+"-"+month.toString()+"-"+day.toString();
	if(month <=9&&day<=9) result = year.toString()+"-0"+month.toString()+"-0"+day.toString();
		else if(month <= 9) result = year.toString()+"-0"+month.toString()+"-"+day.toString();
		else if(day <= 9) result = year.toString()+"-"+month.toString()+"-0"+day.toString();
		return result;
}
