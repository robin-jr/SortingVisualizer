function changeAlgo(x) {
	algorithm = x;
	document.getElementById("algo").value = algorithm;
	document.getElementById("main-header").innerHTML = algorithm;
}
function changeSpeed(x) {
	speed = x;
	ts = 1000 / speed;
	console.log(speed);
	console.log(ts);
}
function changeSize(x) {
	size_of = x;
	console.log(size_of);
	w = Math.floor(3000 / size_of);
	begin();
}
async function startSorting() {
	//begin();
	switch (algorithm) {
		case "QuickSort":
			await quickSort(values, 0, values.length - 1);
			break;
		case "HeapSort":
			heapSort();
			break;
		case "MergeSort":
			await mergeSort(values);
			break;
		case "BubbleSort":
			await bubbleSort(values);
			break;

		default:
			break;
	}
}
