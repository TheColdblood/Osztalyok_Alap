/* Név, kép, kimondott mondat */

export default class Pokemon{
    /* Privát adattagok */
    #nev="";
    #kep="";
    #mondat="";
    constructor(nev, kep, szuloElem){
        /* Mindig a konkrét objektumpéldányra mutat az EGO*/
        this.#nev = nev;
        this.#kep = kep;
        this.#mondat = "Jó estét!";
        this.szuloElem = szuloElem;
        /*  */
        this.#megjelenit();
    }

    #megjelenit(){
        let txt = `
            <div class="poki">
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt="${this.#nev}">
            </div>
        `

        this.szuloElem.append(txt)
    }

    /* Getter a névre */
    get nev(){
        return this.#nev
    }

    /* Mondat átírására settert használunk */
    set mondat(szoveg){
        /* pl kiszűrük a csúnya szavakat */
        this.#mondat = szoveg
    }

    beszel(){
        console.log(this.#mondat)
    }
}