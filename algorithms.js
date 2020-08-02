var ts = 1000 / speed;
async function mergeSort(arr) {
	if (arr.length > 1) {
		let m = arr.length / 2;
		m = Math.floor(m);

		let L = [],
			R = [];
		let i = (j = k = 0);

		for (i = 0; i < m; i++) {
			L[i] = arr[i];
		}
		for (j = 0; m + j < arr.length; j++) {
			R[j] = arr[m + j];
		}
		await mergeSort(L);
		await mergeSort(R);

		i = j = k = 0;

		while (i < L.length && j < R.length) {
			if (L[i] < R[j]) {
				arr[k] = L[i];
				values[k] = L[i];
				console.log("Right here");
				i++;
			} else {
				arr[k] = R[j];
				values[k] = R[j];
				j++;
			}
			k++;
			await delay(ts);
		}
		while (i < L.length) {
			arr[k] = L[i];
			values[k] = L[i];
			await delay(ts);
			i++;
			k++;
		}
		while (j < R.length) {
			arr[k] = R[j];
			values[k] = R[j];
			await delay(ts);
			j++;
			k++;
		}
	}
}

async function quickSort(arr, l, r) {
	if (l >= r) {
		return;
	}
	let p = await partition(arr, l, r);

	await quickSort(arr, l, p - 1);
	await quickSort(arr, p + 1, r);
}
async function partition(arr, l, r) {
	let p = l;
	for (let i = l; i < r; i++) {
		if (arr[i] < arr[r]) {
			swap(arr, i, p);
			p++;
			await delay(ts);
		}
	}
	swap(arr, p, r);
	return p;
}
function swap(arr, a, b) {
	let t = arr[a];
	arr[a] = arr[b];
	arr[b] = t;
}

async function bubbleSort(arr) {
	console.log("I'm called");
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = values[j];
				values[j] = values[j + 1];
				values[j + 1] = temp;
				await delay(ts);
			}
		}
	}
}

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
