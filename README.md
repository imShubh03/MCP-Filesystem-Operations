# 🧠 MCP Filesystem Operations

A full-stack project that implements an **MCP (Model Context Protocol) server** for performing filesystem operations like reading, writing, editing, and deleting files. Includes:

- 🛠 Node.js MCP server with filesystem tools
- 🧑‍💻 MCP client CLI
- 🌐 React frontend interface for file prompt-based edits

---

## 📁 Folder Structure

```bash
mcp-fs-app/
├── server/                  # MCP server to manage file operations
│   ├── src/                 # Server source code (Express, MCP logic)
│   └── workspace/           # Root folder for file operations
├── client/                  # MCP client (CLI and interface code)
│   └── src/                 # Client-side logic for prompt handling
└── frontend/                # React frontend for folder upload + editing
    └── src/                 # React components and UI logic
```

---

## 🚀 Features

- ✅ Create, read, modify, and delete files/folders via an MCP server
- ✅ Issue edits via CLI or web prompt
- ✅ React UI to load file contents and apply text changes
- ✅ Uses MCP protocol for standard tool communication

---

## 🧩 Technologies Used

- Node.js + TypeScript
- MCP protocol (`mcp` npm package)
- React + TypeScript
- Express (optional API proxy)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/imShubh03/MCP-Filesystem-Operations.git
cd mcp-fs-app
```
# 🔧 Setup Instructions

## ✳️ 1. MCP Server

```bash
cd server
npm install
npm run build
npm start
```

* Starts server in `workspace/` folder for file operations
* Tools exposed:
  * `read_file`, `write_file`, `modify_file`, `delete_file`, `list_directory`

## ✳️ 2. MCP Client CLI

```bash
cd ../client
npm install
npm run build
node dist/index.js
```

* Commands:

```bash
write test.txt Hello World
read test.txt
modify test.txt Hello Hi
delete test.txt
```

## ✳️ 3. React Frontend

```bash
cd ../frontend
npm install
npm start
```

* Open browser: http://localhost:3000
* Input file path (e.g. `test.txt`)
* Type prompt like: `Replace all foo with bar`
* Submit to apply `modify_file` via backend

## 🧪 Example Workflow

1. Upload or copy files into: `server/workspace/`
2. Start all 3 components:
   * Server: `npm start`
   * Client: `node dist/index.js`
   * Frontend: `npm start`
3. Use web prompt or CLI to edit files.

markdown## 💻 MCP Tool Definitions

| Tool | Description |
|------|-------------|
| `read_file` | Reads and returns file content |
| `write_file` | Writes content to a file |
| `delete_file` | Deletes a file or folder |
| `list_directory` | Lists files in a directory |
| `modify_file` | Find and replace text in a file |

## 🛠 Scripts

In each subproject (`server`, `client`, `frontend`):

```bash
npm install    # Install dependencies
npm run build  # Compile TypeScript
npm start      # Run server/client/frontend
```

## 🗂 Example Commands (Client)
```bash
write notes.txt This is a test
read notes.txt
modify notes.txt test success
list .
delete notes.txt
```

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feat/my-feature`)
3. Make changes
4. Commit (`git commit -m "Add feature"`)
5. Push (`git push origin feat/my-feature`)
6. Create a Pull Request 🎉
