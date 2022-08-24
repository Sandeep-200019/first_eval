//Getting items from local storage

let flight_id=localStorage.getItem("flid");
let val=localStorage.getItem("mykey");
let val1=localStorage.getItem("mykey1");
let val2=localStorage.getItem("mykey2");
let val3=localStorage.getItem("mykey3");
let val4=localStorage.getItem("mykey4");
let val5=localStorage.getItem("mykey5");
let val6=localStorage.getItem("mykey6");
let val7=localStorage.getItem("mykey7");
let val8=localStorage.getItem("mykey8");
let val9=localStorage.getItem("mykey9");
let flag=localStorage.getItem("flag");


let content='';

//Displaying first passenger details

function display_value(data)
{
    var departure=new Date(data[flight_id].departTime)
    var arrival=new Date(data[flight_id].ArrivalTime)

    content +=  `
    <div class="details" >
        
        <div class="b">
            <h3> ${data[flight_id].flightNum}</h3>
            
            <h3>Origin: <span> ${data[flight_id].origin}</span></h3>
            
            <h3>Destination: <span> ${data[flight_id].destination}</span></h3>
            
            <h3>Departure: <span>${departure.toUTCString()} </span></h3>
            
            <h3>Arrival: <span>${arrival.toUTCString()} </span></h3>
            
            <h3>Price: <span> &#8377;${data[flight_id].price}</h3>
            
        </div>
        <div class="b">
        <h3> Passenger name: ${val} ${val1}</h3>
        <h3>Age: ${val2}</h3>
        <h3>Email: ${val3}</h3>
        <h3>Phone: ${val4}</h3>
        </div>

        </div>


`
document.querySelector("#card-detail").innerHTML = content;
}

//Displaying both first passenger and second passenger details

function display_value2(data)
{
    

    var departure=new Date(data[flight_id].departTime)
    var arrival=new Date(data[flight_id].ArrivalTime)

    content +=  `
    <div class="details" >
        
        <div class="b" id="leftbox">
            <h3> ${data[flight_id].flightNum}</h3>
            
            <h3>Origin: <span> ${data[flight_id].origin}</span></h3>
            
            <h3>Destination: <span> ${data[flight_id].destination}</span></h3>
            
            <h3>Departure: <span>${departure.toUTCString()} </span></h3>
            
            <h3>Arrival: <span>${arrival.toUTCString()} </span></h3>
            
            <h3>Price: <span> &#8377;${data[flight_id].price*2}</h3>
            
        </div>
        <div class="b" id="middlebox">
            <h3> Passenger name: ${val} ${val1}</h3>
            <h3>Age: ${val2}</h3>
            <h3>Email: ${val3}</h3>
            <h3>Phone: ${val4}</h3>
        </div>
        <div class="b" id="rightbox">
            <h3> Passenger name: ${val5} ${val6}</h3>
            <h3>Age: ${val7}</h3>
            <h3>Email: ${val8}</h3>
            <h3>Phone: ${val9}</h3>
        </div>

        </div>


`
document.querySelector("#card-detail").innerHTML = content;


}

if(flag==0){
    fetch('flights.json')
    .then(response => response.json())
    .then(data => display_value(data))
}

else{
    fetch('flights.json')
    .then(response => response.json())
    .then(data => display_value2(data))
}
