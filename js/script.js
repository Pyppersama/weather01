			let weather = {
				apikey: "9977c60c8c37c5900aa353a8f694755d",
				
				fetchweather: function(city){
					fetch(
						"http://api.openweathermap.org/data/2.5/weather?q="
						 + city 
						 +"&units=metric&appid=" 
						 + this.apikey
						 )

					.then((response) => response.json())
					.then((data) => this.displayweather(data));
				},
				
				displayweather: function(data) {
					const{ name } = data;
					const{ icon, description } = data.weather[0];
					const{ temp, humidity } = data.main;
					const{ speed } = data.wind;
					
					document.querySelector(".city").innerText = "Weather in " + name;
					document.querySelector(".icon").src = 
					"http://api.openweathermap.org/img/w/" + icon + ".png";
					document.querySelector(".temp").innerText = temp + "°C";
					document.querySelector(".description").innerText = description;
					document.querySelector(".humidity").innerText = "Humidity is: " + humidity + "%";
					document.querySelector(".wind").innerText = "Wind Speed is: " + speed + "km/h";
					document.querySelector(".weather").classList.remove("loading");
					document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + ")";
					
										
				},
				search : function(){
				this.fetchweather(document.querySelector(".search-bar").value);
			},
			
			};
			
			
			document.querySelector(".search button").addEventListener("click", function(){
				weather.search();
			});
			
			document
				.querySelector(".search-bar").addEventListener("keyup", function(event){
				if (event.key == "Enter"){
					weather.search();
				}
			});


			weather
				