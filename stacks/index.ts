import { AuthStack } from "./AuthStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
    app.setDefaultFunctionProps({
        runtime: "nodejs16.x",
        srcPath: "api",
        bundle: {
            format: "esm",
        },
    });

    const auth = app.stack(AuthStack);
}
