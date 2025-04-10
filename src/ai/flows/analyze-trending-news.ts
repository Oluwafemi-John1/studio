'use server';
/**
 * @fileOverview A trending news analyzer AI agent.
 *
 * - analyzeTrendingNews - A function that handles the trending news analysis process.
 * - AnalyzeTrendingNewsInput - The input type for the analyzeTrendingNews function.
 * - AnalyzeTrendingNewsOutput - The return type for the analyzeTrendingNews function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AnalyzeTrendingNewsInputSchema = z.object({
  newsFeed: z.string().describe('The news feed to analyze.'),
});
export type AnalyzeTrendingNewsInput = z.infer<typeof AnalyzeTrendingNewsInputSchema>;

const AnalyzeTrendingNewsOutputSchema = z.object({
  themes: z.array(z.string()).describe('The key themes identified in the news feed.'),
  summary: z.string().describe('A summary of the trending news.'),
});
export type AnalyzeTrendingNewsOutput = z.infer<typeof AnalyzeTrendingNewsOutputSchema>;

export async function analyzeTrendingNews(input: AnalyzeTrendingNewsInput): Promise<AnalyzeTrendingNewsOutput> {
  return analyzeTrendingNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeTrendingNewsPrompt',
  input: {
    schema: z.object({
      newsFeed: z.string().describe('The news feed to analyze.'),
    }),
  },
  output: {
    schema: z.object({
      themes: z.array(z.string()).describe('The key themes identified in the news feed.'),
      summary: z.string().describe('A summary of the trending news.'),
    }),
  },
  prompt: `You are an AI assistant specializing in analyzing news feeds and identifying trending themes.

  Analyze the following news feed and identify the key themes and provide a summary of the trending news.

  News Feed: {{{newsFeed}}}

  Output the key themes as a list of strings and a summary of the trending news.
  `,
});

const analyzeTrendingNewsFlow = ai.defineFlow<
  typeof AnalyzeTrendingNewsInputSchema,
  typeof AnalyzeTrendingNewsOutputSchema
>({
  name: 'analyzeTrendingNewsFlow',
  inputSchema: AnalyzeTrendingNewsInputSchema,
  outputSchema: AnalyzeTrendingNewsOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
