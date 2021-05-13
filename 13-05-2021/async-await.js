const hasTheme = false;
const buildTheme = new Promise((resolved, reject) => {

    if (!hasTheme) {
        const themeDetails = {
            name: "Learning",
            id: "learning",
            version: "1.3.4"
        }
        setTimeout(() => {
            resolved(themeDetails);
        }, 5000)
    } else {
        reject(new Error("Theme already exist"));
    }
});

const updateTheme = (themeDetails) => {
    return Promise.reject(`${themeDetails.name} theme has been updated at ${new Date().toUTCString()}`);
}

async function myTheme() {
    try {
        const themeDetails = await buildTheme;
        const themeInfo = await updateTheme(themeDetails);
        console.log(themeInfo);
    } catch {
        console.log("Error");
    }
}


// async function myTheme() {
//     const themeDetails = await buildTheme;
//     const themeInfo = await updateTheme(themeDetails);
//     console.log(themeInfo);
// }
myTheme();
