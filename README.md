# Optimus-cli
[![Package Quality](http://npm.packagequality.com/badge/optimus-cli.png)](http://packagequality.com/#?package=optimus-cli)
[![npm version](https://badge.fury.io/js/optimus-cli.svg)](https://badge.fury.io/js/optimus-cli)

A cli for Optimus

## Installation
```
npm install -g optimus-cli
```

## Usage
To Verify if you system is ready for using Optimus

```
$ optimus ⏎
optimus$ checkup
```
To create a new Optimus project.

```
$ optimus ⏎
optimus$ create project <project_name>
```
Note: Project name is mandatory.

## Available commands
```
Commands:
    help [command...]                Provides help for a given command.
    exit                             Exits application.
    create project <project_name>    Create a new optimus project.
    create testfeed <testfeed_name>  Create a testfeed for the project
    checkup                          sets up the optimus environment
    optimus -v/--version             get the optimus version
```
