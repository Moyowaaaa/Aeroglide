import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import BookingSheet from "./sheets/BookingSheet";

registerSheet("booking-sheet", BookingSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    "authentication-sheet": SheetDefinition;
    "added-to-cart-sheet": SheetDefinition;
    "payment-sheet": SheetDefinition;
    "credit-debit-cards-sheet": SheetDefinition;
    "booking-sheet": SheetDefinition;
  }
}

export {};
