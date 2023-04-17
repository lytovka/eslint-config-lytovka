module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x'",
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { breaking: true, release: "major" },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "build", release: "patch" },
          { type: "chore", release: "patch" },
          { type: "ci", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "revert", release: "patch" },
          { type: "style", release: "patch" },
          { type: "test", release: "patch" },
          { scope: "no-release", release: false },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          header: "# Changelog\n\n",
          types: [
            {
              type: "refactor",
              section: "## Build 🛠️",
              hidden: false,
            },
            {
              type: "docs",
              section: "## Docs 📚",
              hidden: false,
            },
            {
              type: "refactor",
              section: "## Refactor 👷",
              hidden: false,
            },
            {
              type: "ci",
              section: "## CI 🛠️",
              hidden: false,
            },
            {
              type: "style",
              section: "## Style 💅",
              hidden: false,
            },
            {
              type: "test",
              section: "## Tests 🧪",
              hidden: false,
            },
            {
              type: "chore",
              section: "## Chores 🧹",
              hidden: false,
            },
            {
              type: "perf",
              section: "## Performance 🚀",
              hidden: false,
            },
            {
              type: "fix",
              section: "## Fixes 🐛",
              hidden: false,
            },
            {
              type: "feat",
              section: "## Features ✨",
              hidden: false,
            },
            {
              type: "revert",
              section: "## Revert 🚧",
              hidden: false,
            },
          ],
        },
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
}
