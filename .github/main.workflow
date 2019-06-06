workflow "Deploy Worker" {
  on = "push"
  resolves = ["Deploy Worker"]
}

action "Deploy Worker" {
  uses = "cloudflare/serverless-action@master"
  env = {
    CLOUDFLARE_AUTH_EMAIL = "$CLOUDFLARE_AUTH_EMAIL"
    CLOUDFLARE_ZONE_ID = "$CLOUDFLARE_ZONE_ID"
    CLOUDFLARE_ACCOUNT_ID = "$CLOUDFLARE_ACCOUNT_ID"
    CLOUDFLARE_SCRIPT_NAME = "main"
  }
  secrets = ["CLOUDFLARE_AUTH_KEY", "CLOUDFLARE_AUTH_EMAIL"]
}
