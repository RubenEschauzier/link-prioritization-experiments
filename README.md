# My Experiment

This experiment was created with [jbr](https://github.com/rubensworks/jbr.js).
This experiment tracks the required information to calculate the $R^{3}$ metric, measuring marginal link prioritization performance. For each combination it will create a directory structure in the `/output` dir.
To analyse the results, you can use the [r3-metric-data-processor](https://github.com/RubenEschauzier/r3-metric-data-processor) by simply pasting the `/output` directory in the root of this experiment into the `r3-metric-data-processor` `/data` directory and following its README.
(To run the experiment, you might need to add `127.0.0.1 solidbench-server` to your `/etc/hosts` file if the css server is not seen as up)

## Requirements

* [Node.js](https://nodejs.org/en/) _(1.12 or higher)_

## Installation

Before this experiment can be used, its dependencies must be downloaded first:

```bash
$ npm install
```

## Usage
First set-up the combinations
```bash
$ mkdir output
$ npm run jbr -- generate-combinations
```

Generate the dataset and queries:
```bash
$ npm run jbr -- prepare
```

Generate the output directory structure used by Comunica to write r3-metric tracking output.

```bash
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
