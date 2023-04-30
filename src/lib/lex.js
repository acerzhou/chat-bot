import {
  LexRuntimeV2Client,
  PutSessionCommand,
} from "@aws-sdk/client-lex-runtime-v2";

function createLexClient() {
  const credentials = {};
  return (client = new LexRuntimeV2Client({
    region: process.env.REGION,
    credentials,
  }));
}

export const putSession = async (botId, botAliasId, userId, text) => {};
