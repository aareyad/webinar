function prepareTheme(themeName, kkk) {
	console.log(`Start design for ${themeName} theme`);
	console.log("Complete design");
	kkk(themeName);
}

function processTheme(themeName, callback) {
	console.log(`Start processing for ${themeName} theme`);
	setTimeout(() => {
		console.log("Complete Unite Test for WordPress");
		console.log("Site Optimize");
		callback(themeName);
	}, 3000);
}

function releaseTheme(themeName) {
	console.log(`Release ${themeName} theme`);
}


prepareTheme("Learning", (themeName) => {
	processTheme(themeName, () => {
		releaseTheme(themeName);
	});
});

console.log("==> Hello world");