import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_Hal0iQBHs",
    client_id: "762t7sqvkg9r8ordpejrtbvubk",
    redirect_uri: "http://localhost:5173/callback.html",
    response_type: "code",
    scope: "email openid phone"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "762t7sqvkg9r8ordpejrtbvubk";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain = "https://eu-west-3hal0iqbhs.auth.eu-west-3.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};