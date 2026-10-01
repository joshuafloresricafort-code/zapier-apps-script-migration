// Code by Zapier (JavaScript), step 4 of "Populate Property Description"
//
// Input Data:
//   descriptions -> property descriptions from every Royalty List row that
//                   matched this row's Operator CC (step 3, Lookup Spreadsheet Rows)
//
// Output:
//   description -> filled only when exactly one unique match exists
//   notes       -> all candidates joined with " | " when there are several,
//                  so the analyst can pick the right one

const candidates = [...new Set(Object.values(inputData).filter(Boolean))];
let description = "";
let notes = "";
if (candidates.length === 1) {
  description = candidates[0];
} else if (candidates.length > 1) {
  notes = candidates.join(" | ");
}
output = [{ description: description, notes: notes }];
