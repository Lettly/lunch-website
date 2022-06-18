import { StackContext, Api } from "@serverless-stack/resources";

export function ApiStack({ stack }: StackContext): Api {
    new Api(stack, "Api", {
        routes: {
            "GET    /notes": "src/list.main",
            "POST   /notes": "src/create.main",
            "GET    /notes/{id}": "src/get.main",
            "PUT    /notes/{id}": "src/update.main",
            "DELETE /notes/{id}": "src/delete.main",
        },
    });
}
