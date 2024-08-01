import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & { answers  : string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
// const data = {
//   "response_code": 0,
//   "results": [
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Mythology",
//           "question": "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
//           "correct_answer": "Orpheus",
//           "incorrect_answers": [
//               "Hercules",
//               "Perseus",
//               "Daedalus"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Celebrities",
//           "question": "By which name is Ramon Estevez better known as?",
//           "correct_answer": "Martin Sheen",
//           "incorrect_answers": [
//               "Charlie Sheen",
//               "Ramon Sheen",
//               "Emilio Estevez"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "History",
//           "question": "Abolitionist John Brown raided the arsenal in which Virginia Town?",
//           "correct_answer": "Harper&#039;s Ferry",
//           "incorrect_answers": [
//               "Richmond",
//               "Harrisonburg",
//               "Martinsburg"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Entertainment: Video Games",
//           "question": "What are Sans and Papyrus named after in &quot;Undertale&quot;?",
//           "correct_answer": "Fonts",
//           "incorrect_answers": [
//               "Plants",
//               "Companies",
//               "Ancient writing paper"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Entertainment: Comics",
//           "question": "When was Marvel Comics founded?",
//           "correct_answer": "1939",
//           "incorrect_answers": [
//               "1932",
//               "1951",
//               "1936"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Entertainment: Video Games",
//           "question": "&quot;Tomb Raider&quot; icon Lara Croft was originally called...",
//           "correct_answer": "Laura Cruz",
//           "incorrect_answers": [
//               "Laura Craft",
//               "Laura Croft",
//               "Lara Craft"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "History",
//           "question": "Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
//           "correct_answer": "The Polish President",
//           "incorrect_answers": [
//               "Pope John Paul II",
//               "Bang-Ding Ow",
//               "Albert Putin"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "General Knowledge",
//           "question": "Where is the train station &quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?",
//           "correct_answer": "Wales",
//           "incorrect_answers": [
//               "Moldova",
//               "Czech Republic",
//               "Denmark"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "General Knowledge",
//           "question": "Which of the following is the IATA code for Manchester Airport?",
//           "correct_answer": "MAN",
//           "incorrect_answers": [
//               "EGLL",
//               "LHR",
//               "EGCC"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Entertainment: Video Games",
//           "question": "Which Animal Crossing game was for the Nintendo Wii?",
//           "correct_answer": "Animal Crossing: City Folk",
//           "incorrect_answers": [
//               "Animal Crossing: New Leaf",
//               "Animal Crossing: Wild World",
//               "Animal Crossing: Population Growing!"
//           ]
//       }
//   ]
// }
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
  
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
