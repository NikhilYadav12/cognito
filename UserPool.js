import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_nIX5WXR8X",
    ClientId: "5kc3jg6uhufu66us3dp7s880nt"
}

export default new CognitoUserPool(poolData);