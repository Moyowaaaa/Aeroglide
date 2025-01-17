import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import BookingSheet from "./sheets/BookingSheet";

registerSheet("booking-sheet", BookingSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    "booking-sheet": SheetDefinition;
  }
}

export {};
