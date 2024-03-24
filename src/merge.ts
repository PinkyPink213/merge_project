export function merge(
	collection_1: number[],
	collection_2: number[],
	collection_3: number[]
): number[] {
	// Check if all collections are empty
	if (
		collection_1.length === 0 &&
		collection_2.length === 0 &&
		collection_3.length === 0
	) {
		return [];
	}

	const result: number[] = [];
	let i = 0,
		j = collection_2.length - 1,
		k = 0;

	// Merge collection_1 and collection_2
	while (i < collection_1.length && j >= 0) {
		if (collection_1[i] <= collection_2[j]) {
			result.push(collection_1[i++]);
		} else {
			result.push(collection_2[j--]);
		}
	}

	// Add remaining elements from collection_1 or collection_2
	while (i < collection_1.length) {
		result.push(collection_1[i++]);
	}
	while (j >= 0) {
		result.push(collection_2[j--]);
	}

	// Merge result with collection_3
	i = 0;
	while (i < result.length && k < collection_3.length) {
		if (result[i] <= collection_3[k]) {
			i++;
		} else {
			result.splice(i, 0, collection_3[k++]);
		}
	}

	// Add remaining elements from collection_3
	while (k < collection_3.length) {
		result.push(collection_3[k++]);
	}

	return result;
}
