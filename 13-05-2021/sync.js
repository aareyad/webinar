// console.log("Complete design a website");
// console.log("Convert design to html");
// console.log("Transfer html to WordPress");
// console.log("Complete Unite Test for WordPress");
// console.log("Site Optimize");
// console.log("Release a new Theme");






















function prepareTheme(themeName) {
    console.log(`Start design for ${themeName} theme`);
    console.log("Complete design");
}

function processTheme(themeName) {
    console.log(`Start processing for ${themeName} theme`);
    const currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime()) { }

    console.log("Complete Unite Test for WordPress");
    console.log("Site Optimize");
}

function releaseTheme(themeName) {
    console.log(`Release ${themeName} theme`);
}

prepareTheme("Learning");
processTheme("Learning");
releaseTheme("Learning");

console.log("Hello world");