# My Experiment

This experiment was created with [jbr](https://github.com/rubensworks/jbr.js).

## Requirements

* [Node.js](https://nodejs.org/en/) _(1.12 or higher)_

## Installation

Before this experiment can be used, its dependencies must be downloaded first:

```bash
$ npm install
```

## Usage

Generate the dataset and queries:

```bash
$ npm run jbr -- prepare
```

Generate the output directory structure used by Comunica to write r3-metric tracking output.

```bash
$ mkdir output
$ npm run prepare-output-directory
```

Run the experiment locally:

```bash
$ npm run jbr -- run
```

The `output/` directory will now contain all experiment results.

## Usage if jbr is installed globally

If [jbr is installed globally](https://github.com/rubensworks/jbr.js/tree/master/packages/jbr#installation),
you can prepare and run this experiment as follows:

```bash
$ jbr prepare
$ jbr run
```
