import { getEnv } from "src/utils/getEnv";

export const ENV = {
    PORT : getEnv("PORT" , 3000),
    DATABASE_URL : getEnv("DATABASE_URL"),
    NODE_ENV : getEnv("NODE_ENV" , "developement"),
    ORIGIN : getEnv("ORIGIN" , "http://localhost:5173"),
    CLERK_PUBLISHABLE_KEY : getEnv("CLERK_PUBLISHABLE_KEY"),
    CLERK_SECRET_KEY : getEnv("CLERK_SECRET_KEY")
}
