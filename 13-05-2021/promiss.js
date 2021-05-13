// let hasTheme = false;

// const theme = new Promise((resolved, reject) => {

// 	if (!hasTheme) {
// 		const themeDetails = {
// 			name: "Learning",
// 			id: "learning",
// 			version: "1.3.4"
// 		};
// 		resolved(themeDetails);
// 	} else {
// 		reject(new Error("Theme already exist"));
// 	}
// });

theme
	.then((res) => {
		console.log(res);
	})
	.catch(err => {
		console.log(err.message);
	});
// =================
// const updateTheme = (themeDetails) => {
// 	return Promise.resolve(`${themeDetails.name} theme has been updated at ${new Date().toUTCString()}`);
// };

// theme
// 	.then(updateTheme)
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch(err => {
// 		console.log(err.message);
// 	});

// =================
// const promise1 = Promise.resolve("Promise 1 is resolved");
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise 2 is resolved");
// 	}, 7000);
// });
// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise 3 is resolved");
// 	}, 2000);
// });
// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// promise3.then((res) => console.log(res));


// Promise
// 	.all([promise1, promise2, promise3])
// 	.then((res) => {
// 		console.log(res);
// 	});

// Promise
// 	.race([promise1, promise2, promise3])
// 	.then((res) => {
// 		console.log(res);
// 	});


// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise
// 	.any(promises)
// 	.then((value) => console.log(value));