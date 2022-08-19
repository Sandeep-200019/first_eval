let f_details = fetch("flights.json");

f_details.then(response=>response.json()).then(data=>{


    for(let i = 0; i<data.length; i++) {

        let obj = data[i];
        var container = document.createElement("div");
        container.className="card text-white bg-dark mb-3";
        container.style.width="15rem";

        var hd = document.createElement("div");
        hd.className = "card-header";

        var hd_h4 = document.createElement("h4");
        hd_h4.innerHTML = obj.flightNum+" "+obj.origin+"-to-"+obj.destination;


        
        var bd = document.createElement("div");
        bd.className = "card-body";

        var d_h5 = document.createElement("h5");
        d_h5.className = "card-title";

        const d_time = new Date(obj.departTime);
        d_h5.innerHTML = "Departure Time: "+d_time.toUTCString();

        var a_h5 = document.createElement("h5");
        a_h5.className = "card-title";

        const a_time = new Date(obj.ArrivalTime);
        a_h5.innerHTML = "Arrival Time: "+a_time.toUTCString();



        var price = document.createElement("h5");
        price.className = "card-title";
        price.innerHTML = "Price: "+obj.price;


        var book = document.createElement("a");
        book.className = "btn btn-primary";
        book.innerHTML = "Book";
        book.style.color = "white";



        container.appendChild(hd);
        hd.appendChild(hd_h4);
        container.appendChild(bd);
        
        bd.appendChild(d_h5);
        bd.appendChild(a_h5);
        bd.appendChild(price);
        bd.appendChild(book);

        document.getElementById("flight-cards").appendChild(container);







    }


});