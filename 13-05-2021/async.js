function prepareTheme(themeName) {
	console.log(`Start design for ${themeName} theme`);
	console.log("Complete design");
}

function processTheme(themeName) {
	console.log(`Start processing for ${themeName} theme`);
	setTimeout(() => {
		console.log("Complete Unite Test for WordPress");
		console.log("Transfer html to WordPress");
		console.log("Site Optimize");
	}, 3000);
}

function releaseTheme(themeName) {
	console.log(`Release ${themeName} theme`);
}

prepareTheme("Learning");
processTheme("Learning");
releaseTheme("Learning");

// console.log("==>Hello world");