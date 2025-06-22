import { MCPClient } from "mcp";
import readline from "readline";
async function main() {
    const client = new MCPClient({ command: "node", args: ["../server/dist/index.js", "./workspace"] });
    await client.connect();

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.on("line", async (cmd) => {
        // Simple parser: e.g., "read src/file.txt"
        const [op, ...args] = cmd.split(" ");
        try {
            let res;
            if (op === "read") res = await client.callTool("read_file", { path: args[0] });
            else if (op === "list") res = await client.callTool("list_directory", { path: args[0] });
            else if (op === "delete") res = await client.callTool("delete_file", { path: args[0] });
            else if (op === "write") res = await client.callTool("write_file", { path: args[0], content: args.slice(1).join(" ") });
            else if (op === "modify") res = await client.callTool("modify_file", { path: args[0], find: args[1], replace: args[2], all_occurrences: true });
            else res = { error: "unknown" };
            console.log(JSON.stringify(res, null, 2));
        } catch (err) {
            console.error("Error:", err);
        }
    });
}

main();
