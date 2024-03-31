    
function podaciForme(){
    let ocena = Number(document.getElementById("ocena").value);
    let datumIzlaska = document.getElementById("datum").value;
    let indeks = document.getElementById("brIndeksa").value;
    let polozen = document.getElementById("polozen").checked;
    let brojIzlaska = Number(document.getElementById("brIzlaska").value);
    let rok = document.querySelector('input[name = "Rok"]:checked');
    let validacija = true;
    if(ocena<5 || ocena>10){
        document.getElementById("errorOcena").textContent = "ocena mora biti u sledecem opsegu [5,10]";
        validacija=false;
    }
    else{
        document.getElementById("errorOcena").textContent = "";
    }
    if(indeks.length == 9 && indeks[4] == "/"){
       let niz = indeks.split("/").map(Number); 
        if(niz[0] > 0 && niz[0] < 1000 && niz[1] > 2000){
            document.getElementById("errorIndeks").textContent = "";
        }
        else{
            document.getElementById("errorIndeks").textContent = "neispravan indeks";
            validacija = false;
        }
    }
    else{
        document.getElementById("errorIndeks").textContent = "format mora biti XXXX/YYYY";
        validacija = false;
    }
    if(ocena > 5 && ocena <= 10 && !polozen){
        document.getElementById("errorPolozen").textContent = "Ako je ispit polozen opcija mora biti cekirana";
        validacija = false;
    }
    else{
        document.getElementById("errorPolozen").textContent = "";
    }

    if(validacija){
        let JSONdata = {
            "ocena": ocena,
            "Indeks": indeks,
            "Broj izlaska": brojIzlaska,
            "Datum": datumIzlaska,
            "Rok": rok? rok.value:null,
            "Polozen": polozen
        };
        return JSON.stringify(JSONdata);
    }
    
}
document.getElementById("posalji").addEventListener("click", function(){
    event.preventDefault();
    let podaci = podaciForme();
    if(podaci){
        document.getElementById("Podaci").textContent = podaciForme();

        document.getElementById("ocena").value = "";
        document.getElementById("datum").value = "";
        document.getElementById("brIndeksa").value = "";
        document.getElementById("polozen").checked = false;
        document.getElementById("brIzlaska").value = "";
        document.querySelector('input[name = "Rok"]:checked').checked = false;

        document.getElementById("errorOcena").textContent = "";
        document.getElementById("errorIndeks").textContent = "";
        document.getElementById("errorPolozen").textContent = "";
    }
    
    
});
