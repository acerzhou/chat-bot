import {
  LexRuntimeV2Client,
  RecognizeTextCommand,
} from "@aws-sdk/client-lex-runtime-v2";

function createLexClient() {
  const credentials = {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  };

  return new LexRuntimeV2Client({
    region: process.env.REACT_APP_AWS_REGION,
    credentials,
  });
}

export default async function sendText(sessionId, inputMessage, slots) {
  console.log("send text", sessionId);
  const client = createLexClient();
  const input = {
    botId: "OZUKQW0QQI",
    botAliasId: "TSTALIASID",
    localeId: "en_US",
    sessionId: sessionId,
    text: inputMessage,
    responseContentType: "text/plain; charset=utf-8",
    sessionState: {
      dialogAction: {
        type: "Delegate",
      },
      intent: {
        name: "Checkout",
        //slots: slots,
      },
    },
  };

  const command = new RecognizeTextCommand(input);

  const data = await client.send(command);

  return data;
}
