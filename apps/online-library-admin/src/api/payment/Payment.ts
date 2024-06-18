import { Subscription } from "../subscription/Subscription";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  subscription?: Subscription | null;
  transactionDate: Date | null;
  transactionId: string | null;
  updatedAt: Date;
};
