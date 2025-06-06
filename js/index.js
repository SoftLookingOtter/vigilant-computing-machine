/* 
Be människan skriva in sten, sax eller påse.
Datorn väljer slumpmässigt mellan sten, sax eller påse.
Skriv ut vad människan och datorn valde.
Jämföra valen:
Om båda väljer samma - "Det blev oavgjort!"
Om människan vinner - "Människan vann!"
Annars datorn vinner - "Datorn vann!"

(Poängsystem:
Sätt människans poäng till 0.
Sätt datorns poäng till 0.  
Om människan vinner, ge människan 1 poäng.
Om datorn vinner, ge datorn 1 poäng.
Visa ställningen efter varje omgång.
Upprepa spelet tills någon har 3 poäng.
Utropa vinnaren.)
*/

let spelarPoang = 0;
let datorPoang = 0;

function spelOmgang() {
  const val = ["sten", "sax", "påse"]; // Lista/array över möjliga val samt kolla om spelarens val är giltigt
  const spelarVal = prompt("Välj sten, sax eller påse:").toLowerCase(); // Använd prompt för att få spelarens val, och gör det till gemener
  const datorVal = val[Math.floor(Math.random() * val.length)]; // Datorn väljer slumpmässigt ett av valen. (random ger ett slumpat decimaltal mellan 0 och 1, floor används för att få ett heltal, * val.length kunde ha skrivits som * 3 i detta fallet då val.length betyder antalet element i arrayen, vilket är 3)

  console.log(`Människan valde: ${spelarVal}`); // Skriv ut spelarens val till consol / backticktick används för att skriva ut variabeln i en sträng med ${variabelnamn}
  console.log(`Datorn valde: ${datorVal}`); // Skriv ut datorns val

  if (spelarVal === datorVal) {
    // Jämför valen / === är lika med (strict equality), det betyder att det jämför både värdet och typen till skillnad från == som bara jämför värdet
    console.log("Det blev oavgjort!"); // Om båda valde samma
  } else if (
    (spelarVal === "sten" && datorVal === "sax") || // Människan vinner / && betyder "och", båda villkoren måste vara sanna för att koden ska köras
    (spelarVal === "sax" && datorVal === "påse") || // Människan vinner / || betyder "eller", minst ett av villkoren måste vara sant för att koden ska köras
    (spelarVal === "påse" && datorVal === "sten") // Människan vinner
  ) {
    spelarPoang++; // Människan får 1 poäng / spelarPoang++ är samma som spelarPoang+1
    console.log("Du vann!"); // Skriv ut att människan vann
  } else {
    datorPoang++; // Datorn får 1 poäng
    console.log("Datorn vann!"); // Skriv ut att datorn vann
  }

  console.log(`Ställning - Människan: ${spelarPoang}, Datorn: ${datorPoang}`); // Skriv ut ställningen efter varje omgång
  if (spelarPoang === 3) {
    // Kolla om människan har vunnit
    console.log("Du har vunnit spelet!"); // Skriv ut att människan har vunnit
  } else if (datorPoang === 3) {
    // Kolla om datorn har vunnit
    console.log("Datorn har vunnit spelet!"); // Skriv ut att datorn har vunnit
  } else {
    spelOmgang(); // Fortsätt spela om ingen har vunnit 3 gångar
  }
}

spelOmgang(); // Startar spelet automatiskt genom att kalla på playRound-funktionen
