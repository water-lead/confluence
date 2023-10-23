import OpenAI from 'openai';
import jsPDF from 'jspdf';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: 'api-key',
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.completions.create({
    model: 'gpt-4-32k',
    temperature: 1.0,
    max_tokens: 750,
    prompt: `You are creative design agent. 

    We need to find designs that emerge at the intersection of two broad industries: ${industry1} & ${industry2}.

    The design is further categorized by the following ideas: ${idea1}, ${idea2}, ${idea3}, ${idea4} & ${idea5}. 

    The most amazing design will combine all ideas. 

    A good design will combine more than one of the ideas. 

    A weak design will use only one idea. The ideas will be entered in order of importance to the desired outcome.

    Please give a detailed analysis of each suggested design based on merit & novelty. 

    Merit is determined by dividing the functionality or purpose of the design by the accuracy of the information used to generate the design. 
    Functionality is based on five factors: accessibility, cost-effectiveness, efficiency, sustainability & flexibility. 
    Novelty is determined by dividing the Originality of the design - this is how distinct the design is - by the Persistence of the information used in generating the design or how credible the information is. 

    The analysis should include specific industry applications.
    
    Each design should generate a text to image prompt to represent the industry application, they shoud be defined by: ${image-text1}, ${image-text2}, ${image-text3}, ${image-text4}, ${image-text5} respectively`,
  });

 async function getImageFromDescription(description) {
  // Assuming there's an API endpoint for the image generation model:
  const imageResponse = await openai.imageGeneration.create({
    model: 'dalle-or-latest-model',
    prompt: ${image-text1}, ${image-text2}, ${image-text3}, ${image-text4}, ${image-text5},
 
  // Use jsPDF to generate a PDF
  const doc = new jsPDF();
  doc.setFontSize(12);
  
  // Split the text into lines so it fits into the PDF
  const lines = doc.splitTextToSize(response.data.choices[0].text, 190); // Assuming the width is 190mm
  doc.text(lines, 10, 10); // The coordinates 10,10 place the text at the top left of the document
  
  // Save the PDF
  doc.save('OpenAI_Response.pdf');
}
