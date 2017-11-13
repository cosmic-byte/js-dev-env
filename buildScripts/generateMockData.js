import jsf from 'json-schema-faker';
import {schema} from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json",json,function (err){
	if(err){
		return console.log(chalk.red(err)); // eslint-disable-line no-console
	}else{
		console.log(chalk.green("Mock data generated.")); // eslint-disable-line no-console
	}
});
