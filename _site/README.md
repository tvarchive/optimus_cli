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
$ optimus doctor
```

To Install missing dependencies

```
$ optimus setup
```
To create a new Optimus project.

```
$ optimus new <project_name>
```
Note: Project name is mandatory.

To create a new test feed

```
$ optimus testfeed
```


## Available commands
```
Commands:

    new <project_name>  creates a new optimus project
    testfeed            Create a testfeed for the project
    doctor              verifies the workspace for dependencies
    setup               sets up the optimus environment
    version             get the optimus version
```
