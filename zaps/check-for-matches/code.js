// Code by Zapier (JavaScript), step 4 of "Check for Matches"
//
// Input Data:
//   interestType -> raw interest code from the matched Royalty List row
//                   (step 3, Lookup Spreadsheet Row)
//
// Output:
//   convertedInterestType -> readable label, or the raw value if the code is unknown

const map = {
  "RI": "ROYALTY INTEREST",
  "ORRI": "OVERRIDING ROYALTY INTEREST",
  "WI": "WORKING INTEREST",
  "NPRI": "NON-PARTICIPATING ROYALTY INTEREST"
};

const raw = inputData.interestType || "";
output = [{ convertedInterestType: map[raw.trim()] || raw }];
