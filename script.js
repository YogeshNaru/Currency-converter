
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let amount = parseFloat(document.querySelector("input").value);
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;
    let resultbox = document.querySelector("p");

    if( amount <=0){
        resultbox.innerText = "Enter a valid amount";
        return;
    }

    try{
        const response = await fetch("https://open.er-api.com/v6/latest/"+ from);
        const data = await response.json();

        const rate = data.rates[to];
        const converted = (amount* rate).toFixed(2);
        
        resultbox.innerText = `${amount} ${from} = ${converted} ${to}`;

    }catch(err){
       resultbox.innerText = "Error fetching exchange rate.";
       console.error(err);
    }
      

});
