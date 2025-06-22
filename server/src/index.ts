
import { startMCPServer, Toolset } from "mcp";
import fs from "fs/promises";
import path from "path";

const BASE_DIR = path.resolve(process.argv[2] || "./workspace");

const tools: Toolset = {
    read_file: async ({ path: p }: { path: string }) => ({ content: await fs.readFile(path.join(BASE_DIR, p), "utf-8") }),
    write_file: async ({ path: p, content }: { path: string; content: string }) => { await fs.writeFile(path.join(BASE_DIR, p), content); return { success: true } },
    delete_file: async ({ path: p }: { path: string }) => { await fs.rm(path.join(BASE_DIR, p), { recursive: true, force: true }); return { success: true } },
    list_directory: async ({ path: p }: { path: string }) => {
        const entries = await fs.readdir(path.join(BASE_DIR, p), { withFileTypes: true });
        return { entries: entries.map(e => ({ name: e.name, isDirectory: e.isDirectory() })) };
    },
    modify_file: async ({
        path: p,
        find,
        replace,
        all_occurrences,
    }: { path: string; find: string; replace: string; all_occurrences?: boolean }) => {
        const full = path.join(BASE_DIR, p);
        let text = await fs.readFile(full, "utf-8");
        const re = new RegExp(find, all_occurrences ? "g" : "");
        text = text.replace(re, replace);
        await fs.writeFile(full, text);
        return { success: true };
    },
};

startMCPServer({ tools });