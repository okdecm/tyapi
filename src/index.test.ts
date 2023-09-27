import { describe, it, expect } from "vitest";

import { hello } from "index";

describe("#index", () => {
	it("says hello to world", () => {
		expect(hello).toEqual("world");
	});
});
