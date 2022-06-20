const lookupButton=document.querySelector(".lookup-button");
const IpDisplay=document.querySelector(".ip-display");
const LocationDisplay=document.querySelector(".location-display");
const GeoDisplay=document.querySelector(".Geolocation-display");

const loader=document.querySelector(".loader-container");
const details=document.querySelector(".details");

lookupButton.addEventListener("click",()=>
{
    loader.style.display="flex";
    details.style.display="none";
    //to send the api request for the data
    axios.get("https://ipapi.co/json/").then((response)=>{
        loader.style.display="none";
        details.style.display="block";

      //data will be stored in the response
      //so the ip is present in data and inside data ip is stored under ip

    IpDisplay.textContent=`Ip = "${response.data.ip}"`;
    LocationDisplay.textContent=`Location = "${response.data.city}, ${response.data.region}, ${response.data.country_name}"`;
    GeoDisplay.textContent=`GeoLocation = "${response.data.latitude}, ${response.data.longitude}"`;

});
});