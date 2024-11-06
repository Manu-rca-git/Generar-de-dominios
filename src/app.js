// Arrays con las palabras
let pronounList = ['my', 'your', 'our', 'their'];
let adjectiveList = ['awesome', 'creative', 'unique', 'fantastic'];
let nounList = ['developer', 'artist', 'thinker', 'explorer'];
let extensionList = ['.com', '.net', '.org', '.io'];

// Generar nombres de dominio básicos
for (let pronounIndex = 0; pronounIndex < pronounList.length; pronounIndex++) {
    for (let adjectiveIndex = 0; adjectiveIndex < adjectiveList.length; adjectiveIndex++) {
        for (let nounIndex = 0; nounIndex < nounList.length; nounIndex++) {
            // Genera combinaciones con cada extensión
            for (let extensionIndex = 0; extensionIndex < extensionList.length; extensionIndex++) {
                console.log(pronounList[pronounIndex] + adjectiveList[adjectiveIndex] + nounList[nounIndex] + extensionList[extensionIndex]);
            }
        }
    }
}
