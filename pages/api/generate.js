import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {  
  const max_tokens = 2048 - (4 * req.body.question.length);
  
  const response = await openai.createAnswer({
      search_model: "ada",
      model: "curie",
      question: req.body.question,
      documents: [""], // Provided additional context here
      examples_context: "A question anaswer application.",
      examples: [["What is this application?", "Software."]],
      max_tokens: max_tokens,
      stop: ["\n", "<|endoftext|>"],
  });

  const answer = response.data.answers[0];
  res.status(200).json( { result: answer } );
}
