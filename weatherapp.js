function clickMsg(){
    var cName=city.value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cName}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
.then((res)=>{
    // console.log(res);
    res.json()
    .then((data)=>{
        populateCity(data)
    })
})

function populateCity(town){
    console.log(town)
        html_data=``
        country.value=town.sys["country"]
        humidity.value=town.main["humidity"]
        wind.value=town.wind["deg"]
        presure.value=town.main["pressure"]
        html_data=`<h1>Hi</h1><h4>${cName} City</h4><h4>${town.main["temp"]}&#8451;</h4><h4>${town.wind["speed"]}&#9728;</h4><br><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
        width="50px">`

        first.innerHTML=html_data


}
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();

}
