declare module 'mcp' {
    export interface Toolset {
        read_file: (args: { path: string }) => Promise<{ content: string }>;
        write_file: (args: { path: string; content: string }) => Promise<{ success: boolean }>;
        delete_file: (args: { path: string }) => Promise<{ success: boolean }>;
        list_directory: (args: { path: string }) => Promise<{ entries: Array<{ name: string; isDirectory: boolean }> }>;
        modify_file: (args: { path: string; find: string; replace: string; all_occurrences: boolean }) => Promise<{ success: boolean }>;
    }

    export function startMCPServer(options: { tools: Toolset }): void;
}