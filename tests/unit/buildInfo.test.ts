import { test } from "node:test";
import assert from "node:assert/strict";
import { getBuildInfo } from "../../src/lib/buildInfo.ts";

test("sin variables de CI", () => {
  assert.deepEqual(getBuildInfo({}, new Date("2026-10-17T10:00:00Z")), {
    sha: "local",
    date: "2026-10-17",
    runUrl: null,
  });
});

test("en CI", () => {
  const info = getBuildInfo(
    {
      GITHUB_SHA: "1fdb1d6abc0123456789",
      GITHUB_SERVER_URL: "https://github.com",
      GITHUB_REPOSITORY: "pytocino/pytocino.github.io",
      GITHUB_RUN_ID: "42",
    },
    new Date("2026-10-17T10:00:00Z"),
  );
  assert.equal(info.sha, "1fdb1d6");
  assert.equal(info.runUrl, "https://github.com/pytocino/pytocino.github.io/actions/runs/42");
});
