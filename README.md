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
optimus$ doctor
```
To create a new Optimus project.

```
$ optimus ⏎
optimus$ create project <project_name>
```
Note: Project name is mandatory.

To create a new test feed

```
$ optimus ⏎
optimus$ create testfeed
```


## Available commands
```
Commands:
    help [command...]                Provides help for a given command.
    exit                             Exits application.
    create project <project_name>    Create a new optimus project.
    create testfeed                  Create a testfeed for the project
    doctor                           Sets up the optimus environment
    version                          Get the optimus version
```
