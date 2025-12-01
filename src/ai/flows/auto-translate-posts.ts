'use server';

/**
 * @fileOverview Auto-translates posts between English and Japanese.
 *
 * - autoTranslatePost - A function that handles the auto-translation of a post.
 * - AutoTranslatePostInput - The input type for the autoTranslatePost function.
 * - AutoTranslatePostOutput - The return type for the autoTranslatePost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoTranslatePostInputSchema = z.object({
  content: z.string().describe('The content of the post to translate.'),
  sourceLanguage: z.enum(['en', 'ja']).describe('The original language of the post.'),
  targetLanguage: z.enum(['en', 'ja']).describe('The language to translate the post to.'),
});

export type AutoTranslatePostInput = z.infer<typeof AutoTranslatePostInputSchema>;

const AutoTranslatePostOutputSchema = z.object({
  translatedContent: z.string().describe('The translated content of the post.'),
});

export type AutoTranslatePostOutput = z.infer<typeof AutoTranslatePostOutputSchema>;

export async function autoTranslatePost(input: AutoTranslatePostInput): Promise<AutoTranslatePostOutput> {
  return autoTranslatePostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'autoTranslatePostPrompt',
  input: {schema: AutoTranslatePostInputSchema},
  output: {schema: AutoTranslatePostOutputSchema},
  prompt: `You are a professional translator specializing in translating between English and Japanese.

Translate the following content from {{sourceLanguage}} to {{targetLanguage}}:

Content: {{{content}}}`,
});

const autoTranslatePostFlow = ai.defineFlow(
  {
    name: 'autoTranslatePostFlow',
    inputSchema: AutoTranslatePostInputSchema,
    outputSchema: AutoTranslatePostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
