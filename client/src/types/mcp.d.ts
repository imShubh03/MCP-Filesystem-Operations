declare module "mcp" {
    export class MCPClient {
        constructor(options: any);
        connect(): Promise<void>;
        callTool(tool: string, args: any): Promise<any>;
    }
}