function showText(element) {
    var textElement = element.querySelector('.image-text');

    // Controleer welke afbeelding is geklikt op basis van de alt-attribuutwaarde
    var imageName = element.querySelector('img').getAttribute('alt');

    // Definieer teksten op basis van de alt-attribuutwaarde
    var textMap = {
        'Image 1': 'Hallo',
        'Image 2': 'hoe gaat het',
        'Image 3': 'galaxys',
        'Image 4': 'hier',
        'Image 5': 'is',
        'Image 6': 'de beste pizza',
        // Voeg teksten toe voor andere afbeeldingen
    };

    // Controleer of de huidige afbeelding een bijbehorende tekst heeft
    if (textMap.hasOwnProperty(imageName)) {
        textElement.textContent = textMap[imageName];
    } else {
        textElement.textContent = 'Standaardtekst als er geen overeenkomende tekst is gevonden.';
    }

    // Hier kun je de tekst op een andere manier weergeven, bijvoorbeeld in een modaal venster
    alert(textElement.textContent);
}
