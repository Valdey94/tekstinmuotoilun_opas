/* hakee ajan sopivaan muotoon.
 */
function haeAika() {
  var nyt=new Date();
  var sekuntti = nyt.getSeconds();
  var minuutti = nyt.getMinutes();
  var tunti =nyt.getHours();
  minuutti = tarkistaAika(minuutti);
  sekuntti = tarkistaAika(sekuntti);
  document.getElementById('aika').innerHTML = "Aika on nyt "+tunti+":"+minuutti+":"+sekuntti;
  var aikaNyt = setTimeout(function(){haeAika()},500);
}

/* lisää nollan numeroiden eteen tarvittaessa.
 */
function tarkistaAika(nolla) {
  if (nolla < 10) {
    nolla = "0" + nolla;
  }
    return nolla;
}

/* näyttää näytöllä jonkin tekstin muotoiluun liittyvän toteamuksen. Toteamus valitaan
 * arvonnalla aina kun sivu ladataan.
 */
function naytaViisaus() {
  var x = Math.floor(Math.random() * 12);
  if (x === 0)
    document.getElementById('viisaus').innerHTML = "Käytä tilanteeseen sopivaa muotoilua!";
  else if (x === 1)
    document.getElementById('viisaus').innerHTML = "Voit käyttää useitakin muotoiluja samassa tekstissä!";
  else if (x === 2)
    document.getElementById('viisaus').innerHTML = "Muotoilut eivät välttämättä säily liittäessäsi tekstiä muualle!";
  else if (x === 3)
    document.getElementById('viisaus').innerHTML = "Muista sulkea muotoilutagi oikeassa paikassa!";
  else if (x === 4)
    document.getElementById('viisaus').innerHTML = "On olemassa paljon muitakin muotoiluja kuin oppaassa käytetyt!";
  else if (x === 5)
    document.getElementById('viisaus').innerHTML = "YouTubesta löytyy paljon hyviä oppaita tekstin muotoiluun!";
  else if (x === 6)
    document.getElementById('viisaus').innerHTML = "Muotoiluja voi määrittää myös CSS-tyylitiedostoissakin!";
  else if (x === 7)
    document.getElementById('viisaus').innerHTML = "Oppaan nuoli on peräisin osoitteesta http://www.clker.com/ !";
  else if (x === 8)
    document.getElementById('viisaus').innerHTML = "Tekstin muotoilu on englanniksi text formatting!";
  else if (x === 9)
    document.getElementById('viisaus').innerHTML = "Voit laittaa palautetta sivustolle Palaute-osiosta!";
  else if (x === 10)
    document.getElementById('viisaus').innerHTML = "Kaikki tekstin muotoilut eivät välttämättä näy mobiililaitteilla!";
  else if (x === 11)
    document.getElementById('viisaus').innerHTML = "Muotoilun päätavoite on ulkoasun ja luettavuuden edistäminen!";
}