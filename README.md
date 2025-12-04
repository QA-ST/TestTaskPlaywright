# Project Setup and Test Guide

This guide provides step-by-step instructions to set up project, clone it using Git, install dependencies, and run Playwright tests.

---

## 1. Install Node.js

### Download the Node.js Installer

- Go to the official site: [https://nodejs.org](https://nodejs.org)
- Click the **LTS (Recommended)** version (e.g., _"LTS - Recommended For Most Users"_)

### Run the Installer

1. After the download is complete, run the `.msi` installer.
2. Accept the license agreement.
3. Leave all options at their default settings (unless you have a specific reason to change them).
4. (Optional) Check **"Automatically install the necessary tools"** — helpful for native modules.
5. Click **Install** and wait for it to complete.

### Verify Installation

- Open **Command Prompt** or **PowerShell**, and run:

***node -v***

***npm -v***

You should see the versions of Node.js and npm if the installation was successful.

## 2. Clone a Project Using Git

### Prerequisites

Ensure Git is installed on your system:

1. Download Git: https://git-scm.com

2. Install with default settings.

3. Restart the terminal or verify installation with:

***git --version***

### Steps to Clone a Project

1. Find the Repository URL

Example:

https://github.com/username/project-name.git

2. Open Terminal

3. Run the Clone Command

***git clone https://github.com/QA-ST/TestTaskPlaywright.git***

4. Go Into the Project Directory

5. cd project-name


## Install Dependencies

***npm install***

***npx ci***


Install Playwright Browsers
***npx playwright install***


This installs all required packages for the project.

## 3. Run Playwright Tests

### Run Tests

***npx playwright test --headed***

--headed runs Chromium in headed mode.

### View the Playwright HTML Report

If configured, Playwright automatically generates a report.

To open the report after test run:

***npx playwright show-report***

### Serve Allure Report
To serve an Allure report, run:

 ***allure serve***


Note: Ensure Allure is properly installed and configured in your project for the above command to work.

