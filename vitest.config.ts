import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.spec.ts", "**/*.spec.tsx"],
    globals: true,
    restoreMocks: true,
    setupFiles: "./setupTest.ts",
    testTimeout: 15000,
    environment: "jsdom",
    reporters: ["verbose", "html"],
    outputFile: "./test-report/results.html",
    coverage: {
      provider: "v8",
      reporter: ["html", "lcov"],
      exclude: [
        ...configDefaults.exclude,
        "test-report/",
        "src/main.tsx",
        "*.d.ts",
      ],
    },
  },
});
