                                      //CI/CD Pipeline Project:- Complete Command Reference Guide\\

*This document contains all the essential commands used to set up your Node.js application, configure your Ubuntu server, manage Git version control and set up your deployment pipeline. Each command includes a description explaining its purpose.

*** Part 1: Ubuntu Server Preparation & User Management ***

These commands are used on your Ubuntu server to manage administrative privileges and user environments.

Command

**Description**

$sudo adduser deployer

***Creates a dedicated non-root user named deployer to run your application securely as a best practice***

$sudo usermod -aG sudo deployer

***Adds the deployer user to the sudo (superuser do) group so they can execute administrative commands when needed.***

$su -

***Switches your current terminal session to the superuser (root) account.***

$exit

**Closes the current user session or shell and returns you to the previous user or parent shell.**

$sudo whoami

**Verifies your current execution context (should output root or indicate your current elevated privilege level).**

**Part 2: Installing Runtime Environments (Node.js & PM2)

**These commands install Node.js, the package manager (npm), and PM2 (Process Manager) on your server.**

Command

Description

$curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

**Downloads the official NodeSource setup script for Node.js version 20 and executes it to configure the package repository on Ubuntu.

$sudo apt install -y nodejs

**Installs the Node.js runtime environment (which includes npm) non-interactively (-y auto-accepts prompts).**

$node -v

**Checks the installed version of Node.js to ensure the installation was successful.**

$npm -v

**Checks the installed version of Node Package Manager (npm).**

$sudo npm install -g pm2

**Globally installs PM2 (Process Manager 2), a production process manager for Node.js that keeps your app running persistently and restarts it automatically if it crashes.

**Part 3: Project Setup & Package Management

**These commands initialize your Node.js project and handle dependencies.

Command

Description

$mkdir my-cicd-app

**Creates a new directory named my-cicd-app to store your project files.**

$cd my-cicd-app

**Changes your current working directory into the my-cicd-app folder.**

$npm init -y

**Initializes a new Node.js project automatically (-y accepts all defaults) by generating a package.json file.**

$npm install express

**Installs the Express.js framework locally for your project and adds it to your dependency list.**

$npm install --production

**Installs only production dependencies on your server, skipping development dependencies to keep the server lightweight.**

**Part 4: File Creation & Editing (Vim & Cat)

These commands are used to create, edit, and inspect source files directly in the terminal.

Command

Description

$vim index.js

Opens the index.js file inside the Vim text editor (creates the file if it does not already exist).

i (inside Vim)

Switches Vim into Insert Mode so you can type or paste text into the file.

Esc (inside Vim)

Exits Insert Mode and returns Vim to Command Mode.

:wq (inside Vim)

Writes (saves) changes to the file and quits/exits the Vim editor.

$cat index.js

Outputs the entire content of the index.js file directly to your terminal screen for verification.

Part 5: Git Version Control Commands

These commands handle code tracking, staging, versioning, and connecting your local project to GitHub.

Command

Description

git init

Initializes a new, empty Git repository inside your current project folder.

git config --global user.name "Your Name"

Sets your global Git username for all commits made on that machine.

git config --global user.email "email@example.com"

Sets your global Git email address for tracking commits.

git add .

Stages all modified or new files in your directory, preparing them to be committed.

git commit -m "Message"

Saves your staged changes into the local Git history with a descriptive commit message.

git branch -M main

Renames your current active default branch to main.

git remote add origin <URL>

Links your local repository to your remote GitHub repository (origin).

git push -u origin main

Pushes your committed code from your local main branch to GitHub and links them for future pushes.

git pull origin main

Fetches and merges the latest code changes from the remote GitHub repository down to your server.

Part 6: SSH Key Generation & Security

These commands generate cryptographic keys to allow GitHub Actions to securely log into your server without passwords.

Command

Description

$ssh-keygen -t rsa -b 4096 -f ~/.ssh/deploy_key

Generates a strong 4096-bit RSA SSH key pair named deploy_key stored in your ~/.ssh/ directory.

$cat ~/.ssh/deploy_key.pub >> ~/.ssh/authorized_keys

Appends your public SSH key to the server's list of authorized keys, granting access to anyone holding the matching private key.

$chmod 600 ~/.ssh/authorized_keys

Secures the authorized keys file so only the owner can read and write to it (a strict requirement for SSH authentication).

$cat ~/.ssh/deploy_key

Displays your private SSH key in the terminal so you can copy it into your GitHub repository secrets.

Part 7: Process Manager (PM2) Commands

These commands manage your application lifecycle on the Ubuntu server.

Command

Description

$pm2 start index.js --name "app"

Starts your Node.js application (index.js) using PM2 and names the background process "app".

$pm2 restart app

Restarts the running application process named "app" to load updated code or configurations.

$pm2 status

Displays a table showing all applications managed by PM2, their process IDs, memory usage, and uptime status.

Part 8: GitHub Actions Workflow Core Concepts

Inside your .github/workflows/ci-cd.yml file, specific actions dictate pipeline behavior:

Action / Directive

Description

on: push: branches: [ main ]

Triggers the CI/CD pipeline automatically whenever new code is pushed to the main branch.

uses: actions/checkout@v4

A pre-built GitHub Action that checks out your repository code onto the runner.

uses: actions/setup-node@v4

Configures the specified Node.js runtime version on the GitHub runner.

uses: appleboy/ssh-action@v1.0.3
