function popuniFormu(json){
    let podaci = JSON.parse(json);
    document.getElementById("ocena").value = podaci.ocena;
    document.getElementById("brIndeksa").value = podaci.Indeks;
    document.getElementById("brIzlaska").value = podaci.BrojIzlaska;
    document.getElementById("datum").value = podaci.Datum;
    document.getElementById("polozen").checked = podaci.Polozen;
    let rok = document.querySelectorAll('input[name="Rok"]');
    let pomocni = false;
    for(let i=0;i<rok.length;i++){
        if(rok[i].value === podaci.Rok){
            rok[i].checked = true;
            pomocni = true;
            break;
        }
    }
}
document.getElementById("ucitaj").addEventListener("click", function(){
    let pom = document.getElementById("Podaci").value;   
    if(pom == null || pom==""){
        document.getElementById("errorPodaci").textContent = "Doslo je do greske prilikom unosa podataka";       
    }
    else{
        popuniFormu(pom);
    }
})