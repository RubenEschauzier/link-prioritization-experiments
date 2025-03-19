const fs = require('fs')
const path = require('path');

const outputDir = path.join(__dirname, "..", "..", "output");
const queryDir = path.join(__dirname, "..", "..", "generated", "out-queries");

const queryFiles = fs.readdirSync(queryDir);
const base64QueryToOutputDirectory = {};
for (let i = 0; i < queryFiles.length; i ++){
    const queryStrings = fs.readFileSync(path.join(queryDir, queryFiles[i]), 'utf-8');
    const queries = queryStrings.split('\n\n').map(query => query.trim());
    const base64Queries = queries.map(query => btoa(query));
    for (let j = 0; j < base64Queries.length; j++){
        base64QueryToOutputDirectory[base64Queries[j]] = path.join(queryFiles[i].split('.')[0], `query_${j}`);
    }
}

const combinations = fs.readdirSync(outputDir)
  .reduce((result, combination) => {
    const fullPath = path.join(outputDir, combination);
    if (isDirectorySync(fullPath)) {
      result.push(fullPath);
    }
    return result;
  }, []);

createOutputStructure(combinations, base64QueryToOutputDirectory);

function createOutputStructure(combinationPaths, queryToOutputLocation){
    const outputDirectories = Object.values(queryToOutputLocation);
    for (const combinationPath of combinationPaths){
        for (const queryOutputDir of outputDirectories){
          fs.writeFileSync(
            path.join(combinationPath, "base64ToDirectory.json"), 
            JSON.stringify(base64QueryToOutputDirectory)
          );
          fs.copyFileSync(path.join(__dirname, "oracleData.json"), path.join(combinationPath, "oracleData.json"))
          const toMake = path.join(combinationPath, queryOutputDir);
          fs.mkdirSync(toMake, { recursive: true })       
        }
    }
}

function isDirectorySync(path) {
    try {
      const stats = fs.statSync(path); // Or fs.lstatSync if you need to handle symlinks
      return stats.isDirectory();
    } catch (err) {
      console.error(`Error checking path: ${err.message}`);
      return false; // Return false if path doesn't exist or another error occurs
    }
  }