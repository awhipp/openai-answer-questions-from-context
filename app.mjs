import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const bookText = `Welcome to Introduction to Business, an OpenStax resource. This textbook was written to increase student
access to high-quality learning materials, maintaining highest standards of academic rigor at little to no cost.
About OpenStax
OpenStax is a nonprofit based at Rice University, and it’s our mission to improve student access to education.
Our first openly licensed college textbook was published in 2012, and our library has since scaled to over 25
books for college and AP® courses used by hundreds of thousands of students. OpenStax Tutor, our low-cost
personalized learning tool, is being used in college courses throughout the country. Through our partnerships
with philanthropic foundations and our alliance with other educational resource organizations, OpenStax is
breaking down the most common barriers to learning and empowering students and instructors to succeed.
About OpenStax resources
Customization
Introduction to Business is licensed under a Creative Commons Attribution 4.0 International (CC BY) license,
which means that you can distribute, remix, and build upon the content, as long as you provide attribution to
OpenStax and its content contributors.
Because our books are openly licensed, you are free to use the entire book or pick and choose the sections
that are most relevant to the needs of your course. Feel free to remix the content by assigning your students
certain chapters and sections in your syllabus, in the order that you prefer. You can even provide a direct link
in your syllabus to the sections in the web view of your book.
Instructors also have the option of creating a customized version of their OpenStax book. The custom version
can be made available to students in low-cost print or digital form through their campus bookstore. Visit the
Instructor Resources section of your book page on OpenStax.org for more information.
Art attribution in Introduction to Business
In Introduction to Business, art contains attribution to its title, creator or rights holder, host platform, and
license within the caption. Because the art is openly licensed, anyone may reuse the art as long as they provide
the same attribution to its original source.
Errata
All OpenStax textbooks undergo a rigorous review process. However, like any professional-grade textbook,
errors sometimes occur. Since our books are web based, we can make updates periodically when deemed
pedagogically necessary. If you have a correction to suggest, submit it through the link on your book page on
OpenStax.org. Subject matter experts review all errata suggestions. OpenStax is committed to remaining
transparent about all updates, so you will also find a list of past errata changes on your book page on
OpenStax.org.`


const response = await openai.createAnswer({
    search_model: "ada",
    model: "curie",
    question: "what do all openstax textbooks do?",
    documents: [bookText],
    examples_context: "In 2017, U.S. life expectancy was 78.6 years.",
    examples: [["What is human life expectancy in the United States?","78 years."]],
    max_tokens: 1500,
    stop: ["\n", "<|endoftext|>"],
});

console.log(response.data.answers)