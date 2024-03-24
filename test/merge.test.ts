import { merge } from '../src/merge';

// Note:
// collection_1, collection_3 already sorted from min(0) to max
// collection_2 already sorted from max to min(0)

describe('Merge function', () => {
	describe('Merging sorted collections with no duplicated values', () => {
		it('should merge three sorted collections into one sorted collection', () => {
			const collection_1 = [1, 3, 5];
			const collection_2 = [6, 4, 2];
			const collection_3 = [7, 8, 9];
			const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
		});
	});

	describe('Merging sorted collections with duplicated values', () => {
		it('should merge three sorted collections into one sorted collection', () => {
			const collection_1 = [1, 4, 5];
			const collection_2 = [6, 4, 2];
			const collection_3 = [7, 8, 9];
			const expected = [1, 2, 4, 4, 5, 6, 7, 8, 9];
			expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
		});
	});

	describe('Merging sorted collections with different lengths', () => {
		it('should merge three sorted collections into one sorted collection', () => {
			const collection_1 = [1, 4, 5];
			const collection_2 = [10, 4, 3, 1];
			const collection_3 = [2, 6];
			const expected = [1, 1, 2, 3, 4, 4, 5, 6, 10];
			expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
		});

		it('should merge three sorted collections into one sorted collection', () => {
			const collection_1 = [1, 3, 5, 10];
			const collection_2 = [6, 4, 2];
			const collection_3 = [7, 8, 9];
			const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
		});

		it('should merge three sorted collections into one sorted collection', () => {
			const collection_1 = [1];
			const collection_2 = [10, 6, 4, 2];
			const collection_3 = [7, 8, 9];
			const expected = [1, 2, 4, 6, 7, 8, 9, 10];
			expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
		});
	});

	describe('Handling empty input collections', () => {
		it('should return an empty array when collection_1 is empty', () => {
			expect(merge([], [3, 2, 1], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it('should return an empty array when collection_2 is empty', () => {
			expect(merge([1, 2, 3], [], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it('should return an empty array when collection_3 is empty', () => {
			expect(merge([1, 2, 3], [6, 5, 4], [])).toEqual([1, 2, 3, 4, 5, 6]);
		});

		it('should return the non-empty collection when collection_1 and collection_2 are empty', () => {
			expect(merge([], [], [4, 5, 6])).toEqual([4, 5, 6]);
		});

		it('should return the non-empty collection when collection_2 and collection_3 are empty', () => {
			expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
		});

		it('should return the non-empty collection when collection_1 and collection_3 are empty', () => {
			expect(merge([], [6, 5, 4], [])).toEqual([4, 5, 6]);
		});

		it('should return an empty array when all collections are empty', () => {
			expect(merge([], [], [])).toEqual([]);
		});
	});
});
