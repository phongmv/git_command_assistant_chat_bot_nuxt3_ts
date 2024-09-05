import type { IGitCommands } from "~/interfaces/IGitCommands";

export const gitCommands: IGitCommands = {
    "configuration": {
        command: "git config --global user.name 'Your Name'",
        description: "Configure the global username.",
    },
    "config": {
        command: "git config --global user.name 'Your Name'",
        description: "Configure the global username.",
    },
    "initialize": {
        command: "git init",
        description: "Initialize a new Git repository.",
    },
    "init": {
        command: "git init",
        description: "Initialize a new Git repository.",
    },
    "status": {
        command: "git status",
        description: "Check the status of the working directory and staging area.",
    },
    "file": {
        command: "git add [file]",
        description: "Add files to the staging area.",
    },
    "branch": {
        command: "git branch",
        description: "List branches in the repository.",
    },
    "update": {
        command: "git push [remote] [branch]",
        description: "Push commits to a remote repository.",
    },
    "commit": {
        command: "git commit -m [remote] [branch]",
        description: "Push commits to a remote repository.",
    },
    "merge": {
        command: "git merge [branch]",
        description: "Merge the specified branch into the current branch.",
    },
    "undo": {
        command: "git reset [file]",
        description: "Remove a file from the staging area but keep the changes in the working directory.",
    },
    "tagging": {
        command: "git tag [tag-name]",
        description: "Create a new tag.",
    },
    "stashing": {
        command: "git stash",
        description: "Save current changes and reset the working directory.",
    },
    "submodules": {
        command: "git submodule add [url] [path]",
        description: "Add a submodule.",
    },
    "cherry": {
        command: "git cherry-pick [commit-hash]",
        description: "Apply a specific commit from another branch to the current branch without merging the entire branch.",
    },
    "reset": {
        command: "git reset [commit]",
        description: "Reset the HEAD state to the specified commit without affecting the working directory.",
    },
    "rebase": {
        command: "git rebase [branch]",
        description: "Reorganize the current branch's commits onto another branch.",
    },
    "format": {
        command: "git format-patch [start-commit]",
        description: "Create patch files from the specified commit.",
    },
    "remote": {
        command: "git remote -v",
        description: "Display a list of remotes and their URLs.",
    },
    "hooks": {
        command: "git hooks",
        description: "Use hooks to automate tasks such as pre-commit, pre-push, post-merge, etc.",
    },
    "blame": {
        command: "git blame [file]",
        description: "Show information about who changed which lines in a file.",
    },
    "archive": {
        command: "git archive --format=zip --output=[file.zip] [branch]",
        description: "Create a ZIP file from the specified branch.",
    },
    "log": {
        command: "git log --oneline",
        description: "Display the commit log with one line per commit.",
    },
    "bisect": {
        command: "git bisect start",
        description: "Start searching for the commit causing an issue.",
    },
    "filter": {
        command: "git filter-branch --tree-filter '[command]' HEAD",
        description: "Run a command on every commit in the current branch's history.",
    },
};