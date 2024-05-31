const url = async('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7a2b5f816mshe5eff7e3def6443p157176jsn6cc825327587',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}