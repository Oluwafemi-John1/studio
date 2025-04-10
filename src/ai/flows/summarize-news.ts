// SummarizeNews Flow
'use server';

/**
 * @fileOverview Summarizes a given news article.
 *
 * - summarizeNews - A function that handles the summarization of a news article.
 * - SummarizeNewsInput - The input type for the summarizeNews function.
 * - SummarizeNewsOutput - The return type for the summarizeNews function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeNewsInputSchema = z.object({
  articleContent: z.string().describe('The content of the news article to summarize.'),
});
export type SummarizeNewsInput = z.infer<typeof SummarizeNewsInputSchema>;

const SummarizeNewsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the news article.'),
});
export type SummarizeNewsOutput = z.infer<typeof SummarizeNewsOutputSchema>;

export async function summarizeNews(input: SummarizeNewsInput): Promise<SummarizeNewsOutput> {
  return summarizeNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeNewsPrompt',
  input: {
    schema: z.object({
      articleContent: z.string().describe('The content of the news article to summarize.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the news article.'),
    }),
  },
  prompt: `You are an expert news summarizer.  Please summarize the following news article in a concise manner.\n\nNews Article:\n{{{articleContent}}}`, // Using Handlebars here
});

const summarizeNewsFlow = ai.defineFlow<
  typeof SummarizeNewsInputSchema,
  typeof SummarizeNewsOutputSchema
>({
  name: 'summarizeNewsFlow',
  inputSchema: SummarizeNewsInputSchema,
  outputSchema: SummarizeNewsOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
