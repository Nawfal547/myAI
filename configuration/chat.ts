import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hey there! I'm ${AI_NAME}, your go-to for all things Ekkovision. Whether it's product info, 
company info, or recommendations, I’m here to help—just ask!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 4000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `I've been working hard,—time for a quick reset! 
Gonna catch my breath and reload, then I’ll be back stronger than ever. Appreciate your patience!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
