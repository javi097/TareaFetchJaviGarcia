window.addEventListener('laod',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree = document.querySelector(".temperature-degree");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long= position.coords.longitude;
            lat= position.coords.latitude;


            const proxy='https://cors-anywhere.herokuapp.com';
            const api=`${proxy}https://api.darksky.net/forecast/58526512f8707a0b2fd39b66ae32cf35/${lat},${long}`;
        });

        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            const {temperature, summary} =data.currently;


        });
    }
});