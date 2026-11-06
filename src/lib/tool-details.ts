// Extra on-page explanation for the top tool pages: how the tool works,
// the formula behind it, a worked example, and common mistakes.
// Keyed by tool slug. Figures here are checked against the tool logic.

export type ToolDetail = {
  howItWorks: string;
  formula?: string;
  example: string;
  mistakes: string[];
};

export const toolDetails: Record<string, ToolDetail> = {
  "bmi-calculator": {
    howItWorks:
      "BMI divides your weight in kilograms by your height in metres squared. The result is compared with ranges that population studies link to general health risk.",
    formula: "BMI = weight (kg) ÷ height (m)²",
    example:
      "70 kg at 1.75 m: 70 ÷ (1.75 × 1.75) = 22.9, which falls in the 18.5 to 24.9 range.",
    mistakes: [
      "Mixing units, such as pounds with centimetres. Pick the unit system that matches your numbers.",
      "Treating BMI as a body-fat measure. Muscle and frame size change the number.",
      "Using adult ranges for children. Children and teenagers are compared with age and sex percentiles instead.",
    ],
  },
  "age-calculator": {
    howItWorks:
      "The calculator counts complete years from your birth date to the target date first, then the remaining months and days since your last birthday.",
    example:
      "Born 15 March 1990, checked on 6 November 2026: 36 years, 7 months and 22 days.",
    mistakes: [
      "Swapping day and month. 04/05 means different dates in different countries.",
      "Assuming a 29 February birthday falls on the same date every year. The rule for non-leap years depends on the context.",
      "Using a rounded age for an exact legal check. Confirm the rule that applies to your case.",
    ],
  },
  "percentage-calculator": {
    howItWorks:
      "The calculator runs the three common percentage forms: a percent of a number, one number as a percent of another, and the percent change from an old value to a new one.",
    formula:
      "X% of Y = X ÷ 100 × Y  |  X as % of Y = X ÷ Y × 100  |  Change % = (New − Old) ÷ Old × 100",
    example:
      "25% of 200 is 50. 45 out of 60 is 75%. A price that rises from 80 to 100 is a 25% increase.",
    mistakes: [
      "Using the wrong base. Ask which number represents the full 100%.",
      "Reversing a percent change. A 25% rise followed by a 25% fall does not return to the start: 100 → 125 → 93.75.",
      "Rounding each step separately. Keep full precision through a chain of calculations, then round the result.",
    ],
  },
  "gpa-calculator": {
    howItWorks:
      "Each letter grade becomes grade points on a 4.0 scale. Each course's points are multiplied by its credit hours, the results are added up, and the total is divided by the total credit hours.",
    formula: "GPA = Σ(grade points × credits) ÷ Σ(credits)",
    example:
      "A (4.0) × 3 credits, B+ (3.3) × 3 credits and A- (3.7) × 4 credits give 36.7 points over 10 credits, so GPA = 3.67.",
    mistakes: [
      "Averaging letter grades without weighting by credits. A 4-credit course counts more than a 1-credit lab.",
      "Using the wrong scale. Some schools use different plus and minus values or a 10-point scale.",
      "Including courses that do not count toward GPA, such as some pass/fail courses.",
    ],
  },
  "image-resizer": {
    howItWorks:
      "The photo is redrawn at the pixel size you enter. To avoid stretching it, keep the original proportions by working out the other side from the ratio.",
    formula: "New height = New width × (Original height ÷ Original width)",
    example:
      "A 4000 × 3000 photo resized to 1200 pixels wide keeps its shape at 1200 × 900.",
    mistakes: [
      "Enlarging a small photo. Making it bigger adds no real detail and looks soft.",
      "Ignoring the size and file limits of the form or site you upload to.",
      "Resizing a JPG again and again. Each save loses a little quality, so resize from the original when you can.",
    ],
  },
  "json-formatter": {
    howItWorks:
      "The formatter parses your text as JSON and prints it again with indentation so nested keys are easy to read. If the text is not valid JSON, you get an error instead of formatted output.",
    example:
      '{"name":"DEVTOOLIO","tags":["tools","free"]} becomes a block with each key and value on its own indented line.',
    mistakes: [
      "Using single quotes, comments, or a trailing comma. JSON allows none of these, even though many JavaScript files do.",
      "Editing minified JSON by hand. Format it first, edit it, then minify again if needed.",
      "Trusting valid output as correct data. The check confirms syntax, not whether the field names and values are right.",
    ],
  },
  "kg-to-lbs": {
    howItWorks:
      "Kilograms are multiplied by 2.2046226218, the exact factor for pounds in the international system of units.",
    formula: "pounds = kilograms × 2.2046226218",
    example: "70 kg × 2.2046226218 = 154.32 lb.",
    mistakes: [
      "Rounding the factor to 2.2 for precise work. That is about a 0.2% error, which matters for medication, shipping limits, or fitness targets.",
      "Confusing weight with mass in technical settings. Everyday scales show kilograms and pounds as mass.",
    ],
  },
  "paraphrasing-tool": {
    howItWorks:
      "This is a rule-based tool, not an AI model. It expands contractions, swaps words for alternatives from fixed word lists, and reshapes some sentences with set patterns. It does not understand what your text means.",
    example:
      "“It doesn't work” becomes “It does not work” in the Standard style, and other words are replaced from the same fixed lists.",
    mistakes: [
      "Publishing the output without reading it. Word swaps can change the meaning, especially in technical or legal text.",
      "Paraphrasing someone else's work and presenting it as your own. That is still plagiarism.",
      "Expecting an editor's quality. Use the output as a starting point and rewrite the sentences that feel wrong.",
    ],
  },
  "pdf-to-jpg": {
    howItWorks:
      "Each PDF page is drawn onto a canvas in your browser and saved as a JPG, so a multi-page file gives you one image per page.",
    example: "A 10-page PDF gives you 10 JPG files.",
    mistakes: [
      "Expecting the text to stay selectable. A JPG is a picture of the page, so use a PDF to text tool when you need the words.",
      "Converting very large files. Keep the file under the size limit shown on the tool; big files take longer and can be slow on phones.",
      "Expecting print quality from a low-resolution output. The image is only as sharp as the page size you export.",
    ],
  },
  "video-compressor": {
    howItWorks:
      "The browser re-encodes your video at a lower resolution and bitrate. A smaller file takes less space and uploads faster, but some detail is lost.",
    example:
      "Re-encoding a long, high-bitrate clip at a lower bitrate can shrink it a lot. The exact result depends on how much motion and detail the video contains.",
    mistakes: [
      "Trying a file over the 80 MB limit on this site.",
      "Using clips longer than about 3 minutes (180 seconds), which is the encoding limit here. Trim the video first.",
      "Expecting the same sharpness. Lower bitrates usually soften fast motion first.",
    ],
  },
  "mortgage-calculator": {
    howItWorks:
      "The calculator applies the standard fixed-rate formula to your loan amount, annual interest rate and term. It then reports the monthly principal and interest payment and the total interest over the loan.",
    formula:
      "M = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1), where P = loan, r = annual rate ÷ 12, n = years × 12",
    example:
      "A 200,000 loan at 6% for 30 years: about 1,199.10 a month, and about 231,676 in total interest over the term.",
    mistakes: [
      "Leaving out property tax, home insurance, and mortgage insurance. The amount you actually pay each month is usually higher.",
      "Mixing up years and months. The formula needs the number of monthly payments, so 30 years is 360.",
      "Assuming the rate stays the same. Adjustable-rate loans change after the initial period.",
    ],
  },
  "gst-calculator": {
    howItWorks:
      "The calculator adds tax to a net price, or removes tax from a total that already includes it. Presets are included for the common rates in Pakistan, India and the UK.",
    formula:
      "Add tax: Total = Price × (1 + rate ÷ 100)  |  Remove tax: Price = Total ÷ (1 + rate ÷ 100)",
    example:
      "1,000 plus 18% tax is 1,180. A total of 1,180 with 18% tax removed is 1,000.",
    mistakes: [
      "Taking 18% off the total to remove tax. The tax was calculated on the net price, so divide by 1.18 instead.",
      "Using one rate for everything. Different goods and services can have different or zero rates.",
      "Relying on the result for filing. Check the current rate with your tax authority.",
    ],
  },
  "timezone-converter": {
    howItWorks:
      "The tool takes a date and time in one city, converts it to UTC, and then shows the local time in the second city for that exact date. Daylight saving changes are applied by date, so the result matches the clocks on that day.",
    example:
      "3:00 PM in New York on 15 January is 8:00 PM in London.",
    mistakes: [
      "Converting with a fixed hour offset. The offset changes when a country moves to or from daylight saving time.",
      "Assuming all countries switch clocks on the same day. The US and UK change on different dates, so the gap between them shifts for a few weeks each year.",
      "Scheduling with a UTC offset in a calendar app. Use the city or time zone name so the meeting follows the local clock changes.",
    ],
  },
  "merge-pdf": {
    howItWorks:
      "Pages from each selected PDF are copied into one new file in the order you choose. The work happens in your browser.",
    example: "A 5-page PDF and a 3-page PDF become one 8-page PDF.",
    mistakes: [
      "Merging in the wrong order. Check the file list before you merge.",
      "Password-protected PDFs. Remove the password in the app that created the file, then merge.",
      "Very large files. Merging many big files takes longer on phones and older laptops.",
    ],
  },
  "compress-pdf": {
    howItWorks:
      "Each page is redrawn as a JPEG image and placed in a new PDF. The images are compressed, which usually reduces the file size, but the text becomes part of the image.",
    example:
      "A scanned or photo-heavy PDF often shrinks a lot. A text-only PDF may shrink less, depending on its content.",
    mistakes: [
      "Losing searchable and copyable text. Keep the original file if you need to search or copy the text later.",
      "Expecting fine detail to survive. JPEG compression softens small text and lines.",
      "Compressing a file that is already compressed. Each pass can lose more quality without much saving.",
    ],
  },
  "heic-to-jpg": {
    howItWorks:
      "The HEIC photo is decoded in your browser and saved as a JPG, which most websites and apps accept.",
    example: "An iPhone photo named IMG_1234.HEIC becomes IMG_1234.jpg.",
    mistakes: [
      "Converting an edited copy and expecting the original detail back. The conversion can only keep what the file already has.",
      "Deleting the original HEIC too early. Keep it as an archive in case you need a different format later.",
      "Assuming all metadata survives. Check that the date and location details you need are still in the new file.",
    ],
  },
  "text-compare": {
    howItWorks:
      "The tool compares two blocks of text line by line and shows which lines differ between the two drafts.",
    example:
      "If one word changes inside a paragraph that sits on a single line, the whole paragraph shows as changed.",
    mistakes: [
      "Line breaks changing between versions. If one copy wraps lines differently, almost every line looks changed.",
      "Changes inside a long line are harder to spot. Split paragraphs into sentences first for a finer view.",
      "Assuming identical lines mean identical meaning. Read the final version before you sign off on it.",
    ],
  },
  "qr-code-generator": {
    howItWorks:
      "The text or link you enter is encoded into a grid of black and white squares. Scanners read that grid, and extra error correction lets them recover from small damage.",
    example:
      "A short link like https://www.devtoolio.tech/tools makes a simple code. A long paragraph makes a dense code that is harder to scan.",
    mistakes: [
      "Using a very long URL. Shorter links give larger, easier-to-scan squares.",
      "Printing too small. Give the code enough room to scan from the distance people will hold a phone.",
      "Cropping away the blank border. Scanners need a clear margin around the code.",
    ],
  },
  "password-generator": {
    howItWorks:
      "Characters are picked with the browser's crypto.getRandomValues function from the set you choose. Longer passwords and larger character sets give more possible combinations.",
    formula: "Entropy (bits) ≈ length × log2(character set size)",
    example:
      "16 characters from a 94-symbol set give about 16 × 6.55 ≈ 105 bits.",
    mistakes: [
      "Reusing the same password on several sites. One leak then exposes all of them.",
      "Using a short length for important accounts. Aim for 16 characters or more where the site allows it.",
      "Saving the password in a plain text file. Store it in a password manager.",
    ],
  },
  "unix-timestamp": {
    howItWorks:
      "Unix time counts the seconds since 00:00:00 UTC on 1 January 1970. The tool converts a timestamp into a date and time, or a date into its timestamp.",
    formula: "Unix seconds = (date and time in UTC − 1 January 1970 00:00:00 UTC) ÷ 1000",
    example: "1704067200 is 00:00:00 UTC on 1 January 2024.",
    mistakes: [
      "Mixing seconds and milliseconds. A 13-digit number is usually milliseconds, so divide by 1000 first.",
      "Reading the time in your local zone. Unix time is always UTC, so convert it before you compare it with a local clock.",
      "Expecting leap seconds to be counted. Unix time ignores them, so it is not a count of every physical second.",
    ],
  },
};
