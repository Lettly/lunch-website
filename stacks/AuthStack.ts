import { StackContext, Auth } from "@serverless-stack/resources";

export function AuthStack({ stack }: StackContext): Auth {
    const auth = new Auth(stack, "auth", {
        login: ["email", "username", "preferredUsername"],
    });

    return auth;
}
