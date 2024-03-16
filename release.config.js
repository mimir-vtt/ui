module.exports = {
	release: {
		branches: ["main", "next"]
	},
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		["semantic-release-license", {
			license: {
				path: 'LICENSE'
			}
		}]
		["semantic-release-replace-plugin", {
			replacements: [
				files: ["src/configuration.ts"],
				from: "PACKAGE_VERSION = \".*\"",
				to: "PACKAGE_VERSION = \"${nextRelease.version}\"",
				results: [{
					file: "src/configuration.ts",
					hasChanged: true,
					numMatches: 1,
					numReplacements: 1
				}],
				countMatches: true
			]
		}],
		["@semantic-release/changelog", {
			changelogFile: "CHANGELOG.md"
		}],
		"@semantic-release/npm",
		["semantic-release-npm-deprecate-old-versions", {
			rules: [
				"supportLatest",
				"supportPreReleaseIfNotReleased",
				"deprecateAll"
		}],
		["@semantic-release/git", { 
			assets: [
				"LICENSE", 
				"src/configuration.ts",
				"CHANGELOG.md"
			] 
		}]
	]
}
