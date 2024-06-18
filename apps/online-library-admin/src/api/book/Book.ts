import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type Book = {
  audioFile: JsonValue;
  author: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isFree: boolean | null;
  publishedDate: Date | null;
  subscriptions?: Array<Subscription>;
  title: string | null;
  updatedAt: Date;
};
