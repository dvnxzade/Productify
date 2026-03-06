import "dotenv/config";

export const getEnv = (key : string , defaultValue : string | number = "") => {
    const value = process.env[key] || defaultValue;
    if (!value) {
        console.log("Invaild key :",key);
        return "Invaild key : " + key;
    }
    return value
}
