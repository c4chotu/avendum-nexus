// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "child_process";
import * as path from "path";

export default defineConfig({
  vite: {
    plugins: [
      {
        name: "excel-sync",
        buildStart() {
          try {
            console.log("[excel-sync] Running Excel database synchronization...");
            execSync("npx tsx scripts/sync-excel.ts", { stdio: "inherit" });
          } catch (err) {
            console.error("[excel-sync] Failed to sync Excel database:", err);
          }
        },
        configureServer(server) {
          const excelFile = path.resolve(process.cwd(), "database.xlsx");
          server.watcher.add(excelFile);
          server.watcher.on("change", (filePath) => {
            if (filePath === excelFile) {
              console.log("[excel-sync] database.xlsx changed, re-syncing...");
              try {
                execSync("npx tsx scripts/sync-excel.ts", { stdio: "inherit" });
              } catch (err) {
                console.error("[excel-sync] Failed to re-sync Excel database:", err);
              }
            }
          });
        }
      }
    ],
    server: {
      watch: {
        ignored: ["**/routeTree.gen.ts"],
      },
      host: true,
      port: process.env.PORT ? parseInt(process.env.PORT) : 8080,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "node-server",
  },
});
