window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  preloader.style.transition = "opacity 0.6s ease";
  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 600);
});

const panel = document.getElementById('panel');

document.getElementById("convertbtn").addEventListener("click", () =>{
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value


    if (amount != ""){
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates[to];
            let result = amount * rate;

            // This shows result
            document.getElementById("result").innerText =
            `${amount} ${from} = ${result.toFixed(2)} ${to}`;
        })
        .catch(() => alert("Error fetching exchange rates"));  
    }

    else{
       alert("Please enter amount......");
        return;
    }
});

