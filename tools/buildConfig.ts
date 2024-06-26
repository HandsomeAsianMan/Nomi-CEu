import buildConfig from "#utils/buildConfig.default.json" assert { type: "json" };
import fs from "fs";

if (fs.existsSync("./config.json")) {
	Object.assign(
		buildConfig,
		JSON.parse(fs.readFileSync("./config.json").toString()),
	);
}

export default buildConfig;
