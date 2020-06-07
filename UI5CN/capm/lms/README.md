# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

| File / Folder  | Purpose                              |
| -------------- | ------------------------------------ |
| `app/`         | content for UI frontends go here     |
| `db/`          | your domain models and data go here  |
| `srv/`         | your service models and code go here |
| `package.json` | project metadata and configuration   |
| `readme.md`    | this getting started guide           |

## Launch JSON for debugging...

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "cds run",
      "request": "launch",
      "type": "node",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["-n"],
      "args": ["--", "cds", "run", "--with-mocks", "--in-memory?"], // the leading "--" arg ensures it works with as well as without debugging
      "cwd": "${workspaceFolder}/${input:service}",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "server listening on (https?://\\S+|[0-9]+)",
        "uriFormat": "http://localhost:%s",
        "action": "openExternally"
      },
      "skipFiles": ["<node_internals>/**"]
    }
  ],
  "inputs": [
    {
      "type": "pickString",
      "id": "service",
      "description": "SRV to start",
      "options": [""],
      "default": ""
    }
  ]
}

```

## Next Steps...

- Open a new terminal and run `cds watch`
- ( in VSCode simply choose _**Terminal** > Run Task > cds watch_ )
- Start adding content, e.g. a [db/schema.cds](db/schema.cds), ...

## Learn more...

Learn more at https://cap.cloud.sap/docs/get-started/
