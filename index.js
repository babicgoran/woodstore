{
    const duzina = document.querySelector(".duzina");
    const sirina = document.querySelector(".sirina");
    const debljina = document.querySelector(".debljina");
    const klasa = document.querySelector(".klasa");
    const premaz= document.querySelector(".premaz")
    const izracunaj = document.querySelector(".izracunaj")
    const cena = document.querySelector(".cena")
    // funkcija pokupi vrednosti iz inputa i upise u objekat  
    const getInputValues = () =>{
        return {
            x: duzina.value,
            y: sirina.value,
            z: debljina.value,
            klasa: klasa.value,
            premaz: premaz.value
        }

    }
    // funkcija prima debljinu i klasu iz inputa i na osnovu odabranih parametara upisuje cene ploce u objekat 
    const getType = (a, b) => {
        
        const prices = {
            lowerPrice: 0, // cena za plocu duzine manje od 2m 
            higherPrice: 0 // cena za plocu duzine vece od 2m
        }

        switch (a + "|" + b) {
            case "20|AB":
                
                prices.lowerPrice= 80;
                prices.higherPrice= 96;

                break;
            case "20|BC":
                
                prices.lowerPrice= 54;
                prices.higherPrice= 64.8;

                break;

            case "40|AB":
            
                prices.lowerPrice= 160;
                prices.higherPrice= 192;

                break;
            case "40|BC":
                
                prices.lowerPrice= 108;
                prices.higherPrice= 129.6;

                break;
            default:
                console.log("error")
                break;
        }

        return prices
    }
    //funkcija uzima potrebne parametre izracunava cenu na osnovu duzine ploce i upisuje u h2
    const priceCalculation=()=>{

        const {x,y,z,klasa,premaz} = getInputValues()
        const {lowerPrice,higherPrice}= getType(z,klasa)
        
        x > 2 || y > 2 ? 

        cena.innerHTML=(Math.floor(x*y*(higherPrice+parseInt(premaz)) * 100) / 100 )+" evra"

        :

        cena.innerHTML=(Math.floor(x*y*(lowerPrice+parseInt(premaz)) * 100) / 100 )+" evra"

    }

    izracunaj.addEventListener("click", priceCalculation )
    
}