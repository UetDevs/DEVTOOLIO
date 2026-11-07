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
  "base64-encoder": {
    howItWorks:
      "Your text is first turned into UTF-8 bytes. Every 3 bytes (24 bits) are then split into four 6-bit groups, and each group maps to one of 64 characters: A–Z, a–z, 0–9, + and /. If the last group is short, = padding fills it out.",
    formula: "Encoded length = 4 × ceil(bytes ÷ 3), about 33% larger than the input",
    example: "Hello becomes SGVsbG8=. The 5 bytes need 8 characters, including one = for padding.",
    mistakes: [
      "Treating Base64 as encryption. Anyone can decode it, so never use it to hide passwords or secrets.",
      "Using standard Base64 where a URL-safe version is expected. JWTs and many URLs use - and _ instead of + and /, and drop the padding.",
      "Encoding large files to embed in HTML or CSS. The 33% size increase usually costs more than a separate file request.",
    ],
  },
  "base64-decoder": {
    howItWorks:
      "Each Base64 character is mapped back to its 6-bit value. The bits are regrouped into bytes, and the bytes are read as UTF-8 text. Whitespace and line breaks in the input are ignored.",
    example: "SGVsbG8gREVWVE9PTElP decodes to Hello DEVTOOLIO.",
    mistakes: [
      "Pasting URL-safe Base64 (with - and _). Replace - with + and _ with /, and add = padding, before decoding.",
      "Decoding binary data such as an image as text. The result will look like garbage. Use the Base64 to Image tool for pictures.",
      "Assuming decoded data is safe. Base64 often wraps scripts or tokens, so treat the output like any untrusted input.",
    ],
  },
  "url-encoder": {
    howItWorks:
      "The tool uses the browser's encodeURIComponent. Letters, digits and - _ . ! ~ * ' ( ) stay as they are. Every other character, including spaces, &, =, ? and /, becomes % followed by the hex value of each UTF-8 byte.",
    example: "pdf to jpg & png becomes pdf%20to%20jpg%20%26%20png. The character é becomes %C3%A9 because it takes two UTF-8 bytes.",
    mistakes: [
      "Encoding a whole URL. This also escapes :// and /, which breaks the link. Encode only the value that goes into a query parameter or path segment.",
      "Encoding a value twice. %20 turns into %2520, and the server receives the wrong text.",
      "Expecting + for spaces. HTML forms use +, but encodeURIComponent uses %20. Both are common, so check what the receiving server expects.",
    ],
  },
  "url-decoder": {
    howItWorks:
      "The tool uses decodeURIComponent. Each %XX sequence is turned back into a byte, and the bytes are read as UTF-8 text. An invalid sequence, such as % followed by non-hex characters, shows an error instead of a guess.",
    example: "https%3A%2F%2Fwww.devtoolio.tech%2Ftools%3Fq%3Dpdf%20to%20jpg decodes to https://www.devtoolio.tech/tools?q=pdf to jpg.",
    mistakes: [
      "Expecting + to become a space. decodeURIComponent leaves + unchanged. Replace + with %20 first if the text came from an HTML form.",
      "Decoding a string that was encoded twice. You will still see %20-style codes, so run the decoder a second time.",
      "Pasting a lone % sign, such as 50% off. It is not a valid escape and will cause an error.",
    ],
  },
  "html-entity-encoder": {
    howItWorks:
      "Encoding replaces the five characters that have special meaning in HTML: & becomes &amp;, < becomes &lt;, > becomes &gt;, \" becomes &quot; and ' becomes &#39;. Decoding uses the browser's own HTML parser, so it understands named entities such as &copy; and numeric ones such as &#169;.",
    example: "<p class=\"note\">Hi & bye</p> encodes to &lt;p class=&quot;note&quot;&gt;Hi &amp; bye&lt;/p&gt;, which displays as literal code on a web page.",
    mistakes: [
      "Relying on entity encoding alone for security. Inside JavaScript, CSS or URL attributes, other escaping rules apply.",
      "Encoding text twice. &amp;lt; shows up on the page as &lt; instead of <.",
      "Encoding characters that do not need it. Modern UTF-8 pages can contain é or € directly.",
    ],
  },
  "uuid-generator": {
    howItWorks:
      "UUIDs come from the browser's crypto.randomUUID, which creates version 4 UUIDs. Of the 128 bits, 122 are random. The rest mark the version (the 4 at the start of the third group) and the variant. You can generate up to 50 at once.",
    formula: "Format: 8-4-4-4-12 hex digits, e.g. xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx (y is 8, 9, a or b)",
    example: "A typical value looks like 3b241101-e2bb-4255-8caf-4136c566a962. The 4 at the start of the third group shows it is version 4.",
    mistakes: [
      "Using UUIDs as secret tokens. They are hard to guess, but they are not designed as passwords or session secrets.",
      "Storing UUIDs as 36-character strings in a large database index. A native UUID or 16-byte binary column is smaller and faster.",
      "Expecting v4 UUIDs to sort by creation time. They are random. Use UUIDv7 or a timestamp column if order matters.",
    ],
  },
  "hash-generator": {
    howItWorks:
      "The text is encoded as UTF-8 and hashed with the browser's Web Crypto API (SHA-1, SHA-256, SHA-384 or SHA-512). The digest is shown in hexadecimal. The same input always gives the same hash, and changing even one character changes the whole output.",
    formula: "Hex length: SHA-1 = 40, SHA-256 = 64, SHA-384 = 96, SHA-512 = 128 characters",
    example: "SHA-256 of abc is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.",
    mistakes: [
      "Storing passwords as a plain SHA hash. Use a slow password hash such as Argon2, bcrypt or scrypt, with a salt.",
      "Using SHA-1 where security matters. Practical SHA-1 collisions exist, so prefer SHA-256 or stronger.",
      "Forgetting invisible characters. A trailing space or newline produces a completely different hash.",
    ],
  },
  "json-validator": {
    howItWorks:
      "The text is passed to the browser's strict JSON parser. If it parses, the JSON is valid. If not, you see the parser's error message, which usually names the unexpected character and its position.",
    example: "{\"ok\": true,} fails because JSON does not allow a trailing comma. Remove the comma and it validates.",
    mistakes: [
      "Using single quotes. JSON strings and keys must use double quotes.",
      "Leaving comments in. // and /* */ comments are not part of JSON, even though many config files accept them.",
      "Assuming valid JSON matches your schema. This check covers syntax only, not required fields or value types.",
    ],
  },
  "json-minifier": {
    howItWorks:
      "The JSON is parsed and printed again without spaces or line breaks. The result is the smallest equivalent text, useful for payloads, environment variables and config values.",
    example: "{\n  \"hello\": \"devtoolio\",\n  \"ready\": true\n} becomes {\"hello\":\"devtoolio\",\"ready\":true}.",
    mistakes: [
      "Minifying JSON with very large integers. JavaScript numbers lose precision beyond 9007199254740991, so long IDs can change. Keep such IDs as strings.",
      "Expecting duplicate keys to survive. When a key appears twice, only the last value is kept.",
      "Editing minified JSON by hand. Format it first, edit it, then minify again.",
    ],
  },
  "regex-tester": {
    howItWorks:
      "Your pattern is compiled with JavaScript's RegExp using the flags you enter (g, i, m, s, u, y). Every match is listed with its position in the text and any capture groups. Syntax errors are shown as you type.",
    example: "The pattern (\\d{4})-(\\d{2}) with flag g finds 2026-11 in \"Released 2026-11\" at index 9, with groups 2026 and 11.",
    mistakes: [
      "Testing in one regex flavor and deploying in another. JavaScript, PCRE, Python and Go differ on lookbehind, named groups and Unicode classes.",
      "Forgetting to double backslashes when you paste a pattern into a string literal: \\d becomes \"\\\\d\".",
      "Using greedy .* when you mean the shortest match. Use .*? or a more specific character class.",
    ],
  },
  "jwt-decoder": {
    howItWorks:
      "A JWT has three dot-separated parts: header, payload and signature. The first two are Base64URL-encoded JSON. The tool decodes and pretty-prints them. It does not check the signature, because that needs the issuer's secret or public key.",
    example: "A payload of {\"sub\":\"123\",\"exp\":1767225600} means the token belongs to subject 123 and expires at that Unix time, 00:00 UTC on 1 January 2026.",
    mistakes: [
      "Trusting a decoded token. Anyone can create a JWT with any payload, so only a verified signature proves it is genuine.",
      "Putting secrets in the payload. It is encoded, not encrypted, so anyone holding the token can read it.",
      "Reading exp and iat as milliseconds. JWT times are Unix seconds.",
    ],
  },
  "html-formatter": {
    howItWorks:
      "The formatter removes whitespace between tags, then puts each tag on its own line, indented two spaces per nesting level. Void elements such as <br>, <img> and <input> do not increase the indent.",
    example: "<section><h1>Title</h1><p>Text</p></section> becomes a section block with the heading and paragraph indented inside it.",
    mistakes: [
      "Formatting HTML where spaces between inline tags matter. Whitespace between tags is removed, which can join words like <b>a</b> <i>b</i>.",
      "Formatting <pre> or <textarea> content. Their whitespace is meaningful and can be changed.",
      "Expecting validation. The formatter indents what it gets and will not report unclosed or misspelled tags.",
    ],
  },
  "css-minifier": {
    howItWorks:
      "The minifier removes /* comments */, collapses runs of whitespace, strips spaces around { } : ; , > and ~, and drops the last semicolon before each closing brace. It does not rename or reorder anything.",
    example: "body {\n  color: #0f172a;\n  background: #fff;\n} becomes body{color:#0f172a;background:#fff}.",
    mistakes: [
      "Minifying the only copy of a stylesheet. Keep the readable source and minify as a build step.",
      "Expecting deeper optimizations such as merging rules or shortening colors. This is a whitespace and comment minifier.",
      "Losing license comments that must stay in the file. All comments are removed, so add required notices back afterwards.",
    ],
  },
  "js-minifier": {
    howItWorks:
      "Your code is compressed with Terser, the minifier used by many bundlers. Input is treated as an ES module, so dead code is removed, expressions are simplified, and local and top-level variable names are shortened. It runs in your browser.",
    example: "function greet(name) { return `Hello ${name}`; } becomes a single short line, with the parameter renamed to a one-letter name.",
    mistakes: [
      "Minifying a classic script whose global functions are called from other scripts or inline HTML. Module mode can rename top-level names, which breaks those calls.",
      "Shipping minified code without a source map. Errors in production become very hard to trace.",
      "Pasting code that uses sloppy-mode features such as with. ES modules are always strict, so it will fail to parse.",
    ],
  },
  "sql-formatter": {
    howItWorks:
      "The query is tokenized and re-printed with the sql-formatter library using its standard SQL dialect. Major clauses such as SELECT, FROM, WHERE and ORDER BY start new lines, and column lists are indented. Keyword case is kept as you wrote it.",
    example: "select name, score from students where score > 80 order by score desc; becomes a multi-line query with each clause on its own line.",
    mistakes: [
      "Expecting validation. A formatted query can still have wrong table names or logic errors. Formatting does not run it.",
      "Formatting vendor-specific syntax. Some PostgreSQL, T-SQL or MySQL extensions may be laid out oddly in standard mode.",
      "Pasting production data into queries you share. Replace real values with placeholders first.",
    ],
  },
  "color-converter": {
    howItWorks:
      "Hex is read as three 8-bit channels (red, green, blue). HSL is calculated from those channels: hue is the angle on the color wheel, saturation is the color's intensity, and lightness is its position between black and white. Editing any field updates the others.",
    example: "#2563EB is rgb(37, 99, 235) and about hsl(221, 83%, 53%).",
    mistakes: [
      "Expecting exact round trips. HSL values are rounded to whole numbers, so converting back can shift a channel by 1.",
      "Using 3-digit shorthand incorrectly. #2AF means #22AAFF, not #2A0F00.",
      "Judging a color only on screen. Monitors differ, and print uses CMYK, which this tool does not cover.",
    ],
  },
  "markdown-to-html": {
    howItWorks:
      "The Markdown is converted with the marked library, which supports CommonMark and GitHub-flavored extras such as tables and fenced code blocks. You get the raw HTML and a rendered preview.",
    example: "# Notes followed by **bold** becomes <h1>Notes</h1> and <strong>bold</strong>.",
    mistakes: [
      "Publishing HTML converted from untrusted Markdown. Raw HTML passes through, so sanitize it (for example with DOMPurify) before showing it to others.",
      "Forgetting blank lines between blocks. Without them, lists and headings may merge into the paragraph above.",
      "Expecting the preview to match your site exactly. Your own CSS decides the final look.",
    ],
  },
  "cron-explainer": {
    howItWorks:
      "A standard cron expression has five fields: minute, hour, day of month, month and day of week. The explainer splits the expression and describes each field, including * (every value) and */n (every n units).",
    formula: "minute (0–59)  hour (0–23)  day-of-month (1–31)  month (1–12)  weekday (0–6, Sunday = 0)",
    example: "0 9 * * 1-5 runs at 09:00 Monday to Friday. */15 * * * * runs every 15 minutes.",
    mistakes: [
      "Using a six- or seven-field expression from Quartz or Spring here. Those add a seconds field and use a different layout.",
      "Forgetting the server's time zone. Cron uses the system clock, which is often UTC.",
      "Setting both day of month and weekday. Most cron versions run the job when either one matches, not only when both do.",
    ],
  },
  "htaccess-generator": {
    howItWorks:
      "The tool writes one Apache mod_alias line in the form Redirect <code> <old path> <new URL>. 301 tells browsers and search engines the move is permanent. 302 marks it as temporary.",
    example: "Redirect 301 /old-page /new-page sends visitors and search engines from /old-page to /new-page.",
    mistakes: [
      "Using .htaccess on a server that ignores it. Nginx, Vercel, Netlify and most Node hosts have their own redirect settings.",
      "Forgetting that Redirect matches prefixes. /old also redirects /old/anything to /new/anything.",
      "Using 302 for a permanent move. Search engines may keep the old URL indexed.",
    ],
  },
  "robots-txt-generator": {
    howItWorks:
      "The generator writes a robots.txt that either allows or blocks all crawlers (User-agent: *) and adds a Sitemap line. Upload the file to the root of your domain, for example https://example.com/robots.txt.",
    example: "User-agent: *\nAllow: /\nSitemap: https://www.devtoolio.tech/sitemap.xml lets all crawlers in and points them to the sitemap.",
    mistakes: [
      "Using Disallow to remove a page from search results. Blocked pages can still be indexed from links. Use a noindex tag and keep the page crawlable.",
      "Leaving Disallow: / on after launch. A staging setting that blocks the whole site is a common cause of vanished search traffic.",
      "Treating robots.txt as security. It is public and only advisory, so protect private pages with authentication.",
    ],
  },
  "contrast-checker": {
    howItWorks:
      "Each color's relative luminance is calculated with the WCAG 2 formula. The ratio between the lighter and darker luminance is compared with WCAG thresholds: 4.5:1 for normal text (AA), 3:1 for large text (AA) and 7:1 for normal text (AAA).",
    formula: "Contrast ratio = (L_lighter + 0.05) ÷ (L_darker + 0.05)",
    example: "Black on white is 21:1, the maximum. #777777 on white is about 4.48:1, just below the 4.5:1 AA threshold for normal text.",
    mistakes: [
      "Checking only the default state. Hover, focus, disabled and placeholder text need enough contrast too.",
      "Assuming large text means any heading. WCAG defines large text as at least 18pt, or 14pt bold.",
      "Ignoring text on images or gradients. Check against the lightest area behind the text.",
    ],
  },
  "number-base-converter": {
    howItWorks:
      "The number is read in the base you choose (2, 8, 10 or 16) and written out in all four. Each position is worth the base raised to a power, so hex FF is 15 × 16 + 15 = 255.",
    formula: "value = Σ digit × base^position (rightmost position = 0)",
    example: "255 in decimal is 11111111 in binary, 377 in octal and FF in hex.",
    mistakes: [
      "Including invalid digits. Parsing stops at the first character that does not belong to the base, so 12Z in hex reads as 0x12.",
      "Pasting a 0b prefix for binary. Remove it. A 0x prefix is accepted for hex.",
      "Converting very large values. Results above 9007199254740991 lose precision in JavaScript numbers.",
    ],
  },
  "random-string-generator": {
    howItWorks:
      "Characters are picked with crypto.getRandomValues from the alphabet you choose: letters and numbers (62 characters), letters only (52) or hex (16). Length can be 4 to 128 characters.",
    formula: "Entropy (bits) ≈ length × log2(alphabet size)",
    example: "21 characters from the 62-character alphabet give about 21 × 5.95 ≈ 125 bits, plenty for an unguessable ID.",
    mistakes: [
      "Using a short string for anything security-related. Aim for at least 128 bits of entropy for tokens and API keys.",
      "Using Math.random-based generators elsewhere for secrets. They are not cryptographically secure.",
      "Choosing letters only when case may be lost. Some systems lowercase IDs, which shrinks the alphabet and can cause collisions.",
    ],
  },
  "css-gradient-generator": {
    howItWorks:
      "The tool builds a CSS linear-gradient from two color stops and an angle. 0deg points up, 90deg points right and 180deg (the default) runs top to bottom.",
    example: "linear-gradient(180deg, #2563EB, #f8fafc) fades from blue at the top to near-white at the bottom.",
    mistakes: [
      "Putting text on a gradient without checking contrast at both ends. Use the Contrast Checker with each stop color.",
      "Confusing angles with the to keyword. 90deg is the same as to right, but to top right depends on the box's shape.",
      "Expecting smooth results between very different hues. Some pairs pass through a muddy gray midpoint, so add a middle stop.",
    ],
  },
  "box-shadow-generator": {
    howItWorks:
      "The tool builds a CSS box-shadow from a horizontal offset (X), vertical offset (Y), blur radius and color. An 8-digit hex color such as #0f172a33 includes transparency, where 33 is about 20% opacity.",
    formula: "box-shadow: <x>px <y>px <blur>px <color>",
    example: "0px 12px 24px #0f172a33 gives a soft shadow that falls below the element.",
    mistakes: [
      "Using fully opaque shadow colors. Real shadows are translucent, so add an alpha value.",
      "Animating box-shadow on many elements. It is expensive to repaint. Animate the opacity of a pseudo-element instead.",
      "Forgetting dark mode. A dark shadow on a dark background disappears.",
    ],
  },
  "json-to-csv": {
    howItWorks:
      "Paste an array of objects. Every key found in any object becomes a column, in the order first seen. Each object becomes a row. Nested objects and arrays are written into the cell as JSON text, and cells containing commas, quotes or line breaks are quoted.",
    example: "[{\"name\":\"Ada\",\"score\":91},{\"name\":\"Linus\",\"city\":\"Helsinki\"}] gives the columns name, score and city, with blank cells where a key is missing.",
    mistakes: [
      "Pasting one object that wraps the array, such as {\"data\": [...]}. Paste the inner array so each item becomes a row.",
      "Expecting nested objects to become separate columns. Flatten them first if you need columns such as address.city.",
      "Opening the CSV in Excel and losing leading zeros in IDs or phone numbers. Import the column as text.",
    ],
  },
  "csv-to-json": {
    howItWorks:
      "The first row is read as column headers. Each later row becomes an object, with empty rows skipped. The parser handles quoted fields, commas inside quotes and doubled \"\" quotes. Columns with a blank header are named column_1, column_2 and so on.",
    example: "name,score followed by Ada,91 becomes [{\"name\":\"Ada\",\"score\":\"91\"}].",
    mistakes: [
      "Expecting numbers and booleans. Every value comes out as a string, so convert types in your code.",
      "Using semicolon- or tab-separated files. The parser splits on commas only.",
      "Leaving duplicate header names. Later columns overwrite earlier ones with the same name.",
    ],
  },
  "xml-to-json": {
    howItWorks:
      "The XML is parsed with the browser's DOMParser. Elements become keys, attributes become keys prefixed with @, and text next to attributes is stored under #text. When an element name repeats, its values become an array.",
    example: "<book id=\"1\"><title>Dune</title></book> becomes {\"@id\":\"1\",\"title\":\"Dune\"}.",
    mistakes: [
      "Expecting a stable shape. One <item> becomes an object, but two become an array, so code should handle both.",
      "Expecting numbers. All values come out as strings.",
      "Pasting HTML. HTML is not always well-formed XML, and unclosed tags will fail to parse.",
    ],
  },
  "xml-formatter": {
    howItWorks:
      "The XML is parsed with the browser's DOMParser, then written out again with two-space indentation per level. Attributes stay on the element, and text is escaped. Invalid XML shows the parser's error instead.",
    example: "<a><b>1</b><b>2</b></a> becomes a block with each <b> on its own indented line.",
    mistakes: [
      "Formatting documents with comments, CDATA or processing instructions you need to keep. Only elements, attributes and text are written back out.",
      "Formatting mixed content, such as text with inline tags. Text around child elements is trimmed and can move.",
      "Expecting schema validation. The tool checks that the XML is well-formed, not that it matches an XSD.",
    ],
  },
  "yaml-to-json": {
    howItWorks:
      "The YAML is parsed with js-yaml and printed as JSON. Mappings become objects, sequences become arrays, and plain scalars become strings, numbers, booleans or null according to YAML 1.2 rules.",
    example: "name: app\nports:\n  - 80\n  - 443 becomes {\"name\":\"app\",\"ports\":[80,443]}.",
    mistakes: [
      "Indenting with tabs. YAML requires spaces.",
      "Expecting comments to carry over. JSON has no comments, so they are dropped.",
      "Leaving version numbers unquoted. 1.10 becomes the number 1.1. Quote values that must stay as text.",
    ],
  },
  "json-to-yaml": {
    howItWorks:
      "The JSON is parsed and written as YAML with js-yaml. Objects become indented mappings, arrays become - lists, and strings are quoted only when needed. Repeated objects are written out in full, without YAML anchors.",
    example: "{\"name\":\"app\",\"ports\":[80,443]} becomes name: app, then ports: with - 80 and - 443 on separate lines.",
    mistakes: [
      "Assuming every tool reads YAML the same way. Older YAML 1.1 parsers treat yes, no, on and off as booleans.",
      "Hand-editing the output with inconsistent indentation. Keep the two-space structure.",
      "Expecting key order to be sorted. Keys keep the order they had in the JSON.",
    ],
  },
};
