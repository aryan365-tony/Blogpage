'use server';

/**
 * @fileOverview A blog post content generation AI agent.
 *
 * - generateBlogContent - A function that handles the blog post content generation process.
 * - GenerateBlogContentInput - The input type for the generateBlogContent function.
 * - GenerateBlogContentOutput - The return type for the generateBlogContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogContentInputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
});
export type GenerateBlogContentInput = z.infer<
  typeof GenerateBlogContentInputSchema
>;

const GenerateBlogContentOutputSchema = z.object({
  introduction: z.string().describe('A compelling introduction for the blog post.'),
  recommendation: z.string().describe('A section with recommendations for further reading.'),
});
export type GenerateBlogContentOutput = z.infer<
  typeof GenerateBlogContentOutputSchema
>;

export async function generateBlogContent(
  input: GenerateBlogContentInput
): Promise<GenerateBlogContentOutput> {
  return generateBlogContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogContentPrompt',
  input: {schema: GenerateBlogContentInputSchema},
  output: {schema: GenerateBlogContentOutputSchema},
  prompt: `You are a helpful assistant that writes blog posts. Given the title of a blog post, generate a compelling introduction and a section with recommendations for further reading.

Blog Post Title: {{{title}}}`,
});

const generateBlogContentFlow = ai.defineFlow(
  {
    name: 'generateBlogContentFlow',
    inputSchema: GenerateBlogContentInputSchema,
    outputSchema: GenerateBlogContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
