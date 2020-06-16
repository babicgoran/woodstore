{
    const duzina = document.querySelector(".duzina");
    const sirina = document.querySelector(".sirina");
    const debljina = document.querySelector(".debljina");
    const klasa = document.querySelector(".klasa");
    const premaz = document.querySelector(".premaz")
    const izracunaj = document.querySelector(".izracunaj")
    const cena = document.querySelector(".cena")
    // funkcija pokupi vrednosti iz inputa i upise u objekat  
    const getInputValues = () => {
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
            basePrice:0, //osnovna cena za ploce do 2m 
            // lowerPrice: 0, // cena za plocu duzine manje od 2m 
            // higherPrice: 0 // cena za plocu duzine vece od 2m
        }

        switch (a + "|" + b) {
            case "20|AB":
                    prices.basePrice= 80;
                // prices.lowerPrice = 80;
                // prices.higherPrice = 96;

                break;
            case "20|BC":
                    prices.basePrice= 54;
                // prices.lowerPrice = 54;
                // prices.higherPrice = 64.8;

                break;

            case "40|AB":
                    prices.basePrice= 160;
                // prices.lowerPrice = 160;
                // prices.higherPrice = 192;

                break;
            case "40|BC":
                    prices.basePrice= 108;
                // prices.lowerPrice = 108;
                // prices.higherPrice = 129.6;

                break;
            default:
                console.log("error")
                break;
        }

        return prices
    }
    //funkcija uzima potrebne parametre izracunava cenu na osnovu duzine ploce i upisuje u h2
    const priceCalculation = () => {

        const { x, y, z, klasa, premaz } = getInputValues()
        // const { lowerPrice, higherPrice } = getType(z, klasa)
        const { basePrice } = getType(z, klasa)

        let length = x / 100
        let width = y / 100
        let height = parseInt(z) / 1000

        let surfaceArea = length * width
        let sideSurface = height * (length + width) // ukupna povrsina bocnih strana 

        const calcForDimensions = (l, price) => {

            return (price + l*price)

        }
        // length > 2 || width > 2 ?

        //     cena.innerHTML = (Math.floor((surfaceArea * (higherPrice + parseInt(premaz)) + sideSurface * parseInt(premaz)) * 100) / 100) + " evra"

        //     :

        //     cena.innerHTML = (Math.floor((surfaceArea * (lowerPrice + parseInt(premaz)) + sideSurface * parseInt(premaz)) * 100) / 100) + " evra"

        if( length < 2 || width < 2 ){
            cena.innerHTML = (Math.floor((surfaceArea * (basePrice + parseInt(premaz)) + sideSurface * parseInt(premaz)) * 100) / 100) + " evra"
        }else if((length >= 2 || width >= 2) && (length < 3 && width < 3) ){
            cena.innerHTML = (Math.floor((surfaceArea * (calcForDimensions(0.2 , basePrice) + parseInt(premaz)) + sideSurface * parseInt(premaz)) * 100) / 100) + " evra"
        }else if((length >= 3 || width >= 3) && (length < 4 && width < 4 )) {
            cena.innerHTML = (Math.floor((surfaceArea * (calcForDimensions(0.3 , basePrice) + parseInt(premaz)) + sideSurface * parseInt(premaz)) * 100) / 100) + " evra"
        }else if ((length >= 4 || width >= 4) && (length < 5 && width < 5 )){
            cena.innerHTML = (Math.floor((surfaceArea * (calcForDimensions(0.4 , basePrice) + parseInt(premaz)) + sideSurface * parseInt(premaz)) * 100) / 100) + " evra"
        }else if ((length === 5 || width === 5)&&(length < 5 || width < 5)){
            cena.innerHTML = (Math.floor((surfaceArea * (calcForDimensions(0.5 , basePrice) + parseInt(premaz)) + sideSurface * parseInt(premaz)) * 100) / 100) + " evra"
        }else{
            console.log("hello")
            cena.innerHTML="max 5m"
        }

    }

    izracunaj.addEventListener("click", () => {
        const { x, y } = getInputValues()
        if (!x && !y) {
            duzina.classList.add("invalid");
            sirina.classList.add("invalid");
            return
        }
        else if (!x) {
            duzina.classList.add("invalid");

        }
        else if (!y) {
            sirina.classList.add("invalid");
        }
        else {
            duzina.classList.remove("invalid");
            sirina.classList.remove("invalid");


            priceCalculation()
        }
    })

}