export type GuideBlock =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "formula"; text: string }
  | { t: "ul"; items: string[] };

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  related: { href: string; label: string }[];
  body: GuideBlock[];
  faqs: { question: string; answer: string }[];
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "how-to-calculate-percentages",
    title: "How to calculate a percentage",
    description:
      "Three percentage formulas with worked examples: a percent of a number, what percent one number is of another, and percent change.",
    related: [{ href: "/tools/calculators/percentage-calculator", label: "Percentage calculator" }],
    body: [
      {
        t: "p",
        text: "Most percentage questions fit one of three shapes. Each has a simple formula. Use a calculator for quick checks, but knowing the formula helps you spot a wrong answer.",
      },
      { t: "h2", text: "1. What is X% of Y?" },
      { t: "formula", text: "Result = (X ÷ 100) × Y" },
      {
        t: "p",
        text: "Example: 25% of 200. 25 ÷ 100 = 0.25, and 0.25 × 200 = 50. A 15% tip on a 40 bill is 0.15 × 40 = 6.",
      },
      { t: "h2", text: "2. What percent is X of Y?" },
      { t: "formula", text: "Percent = (X ÷ Y) × 100" },
      {
        t: "p",
        text: "Example: 45 correct answers out of 60 questions. 45 ÷ 60 = 0.75, and 0.75 × 100 = 75%.",
      },
      { t: "h2", text: "3. What is the percent change from old to new?" },
      { t: "formula", text: "Change % = ((New − Old) ÷ Old) × 100" },
      {
        t: "p",
        text: "Example: a price moves from 80 to 100. (100 − 80) ÷ 80 = 0.25, so the increase is 25%. Going back from 100 to 80 is a 20% drop, not 25%, because the base changed.",
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Dividing by the new value when you want the change from the old value.",
          "Mixing up “percent of” with “percent more”. 10% of 50 is 5. 50 plus 10% is 55.",
          "Assuming a 50% drop followed by a 50% rise returns you to the start. 100 → 50 → 75.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the quickest way to find 10% of a number?",
        answer: "Move the decimal point one place to the left. 10% of 370 is 37.",
      },
      {
        question: "Why does a 50% drop and a 50% rise not cancel out?",
        answer: "Each percentage applies to a different base. 100 falls to 50, then rises by 50% of 50 to 75.",
      },
    ],
  },
  {
    slug: "how-to-calculate-gst-and-vat",
    title: "How to calculate GST or VAT, with and without tax",
    description:
      "How to add GST or VAT to a price, and how to work backwards from a total that already includes tax, with examples.",
    related: [{ href: "/tools/calculators/gst-calculator", label: "GST calculator" }],
    body: [
      {
        t: "p",
        text: "GST, used in India and Pakistan, and VAT, used in the UK and many other countries, add a percentage on top of a price. Two calculations cover almost every receipt.",
      },
      { t: "h2", text: "Adding tax to a price" },
      { t: "formula", text: "Total = Price × (1 + Rate ÷ 100)" },
      {
        t: "p",
        text: "Example: a 1,000 item with 18% GST. 1,000 × 1.18 = 1,180. The tax is 180.",
      },
      { t: "h2", text: "Removing tax from a total that already includes it" },
      { t: "formula", text: "Price before tax = Total ÷ (1 + Rate ÷ 100)" },
      {
        t: "p",
        text: "Example: a receipt shows 1,180 including 18% GST. 1,180 ÷ 1.18 = 1,000. Taking 18% off 1,180 gives 967.60, which is wrong, because the 18% was calculated on the 1,000, not on the 1,180.",
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Taking the rate off the total when you need the net price. Divide by 1.18 instead.",
          "Using one rate for a mixed receipt. Items can have different rates, so calculate each line separately.",
          "Rounding too early. Keep full precision, then round the final total to two decimal places.",
        ],
      },
      {
        t: "p",
        text: "Tax rules change, and exemptions apply. Check the current rate with your tax authority before you file anything.",
      },
    ],
    faqs: [
      {
        question: "How do I work out GST from an inclusive price?",
        answer: "Divide the inclusive price by (1 + rate ÷ 100). For 118 at 18%, the net price is 100 and the tax is 18.",
      },
      {
        question: "Is VAT calculated the same way as GST?",
        answer: "Yes, the arithmetic is the same. Only the rate and the rules for who must charge it differ.",
      },
    ],
  },
  {
    slug: "how-mortgage-payments-are-calculated",
    title: "How a mortgage payment is calculated",
    description:
      "The standard fixed-rate mortgage payment formula explained step by step, with a worked example and what the payment leaves out.",
    related: [{ href: "/tools/calculators/mortgage-calculator", label: "Mortgage calculator" }],
    body: [
      {
        t: "p",
        text: "A fixed-rate mortgage payment stays the same every month. Each payment covers the interest on the remaining balance plus a slice of the loan itself, called principal. The standard formula is:",
      },
      { t: "formula", text: "M = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)" },
      {
        t: "p",
        text: "P is the loan amount, r is the monthly interest rate (the annual rate divided by 12, as a decimal), and n is the number of monthly payments (years × 12).",
      },
      {
        t: "p",
        text: "Example: a 200,000 loan at 6% a year for 30 years. r = 0.06 ÷ 12 = 0.005, and n = 360. The payment is about 1,199.10 a month. Over 360 months you pay about 431,676 in total, so about 231,676 of that is interest.",
      },
      { t: "h2", text: "What the number leaves out" },
      {
        t: "ul",
        items: [
          "Property tax and home insurance, which many lenders collect monthly in an escrow account.",
          "Mortgage insurance, which is often required with a small down payment.",
          "Changes in the rate, if the loan is adjustable rather than fixed.",
        ],
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Using the annual rate directly in the formula. Divide it by 12 first.",
          "Entering years where the formula needs months. 30 years is 360 payments.",
          "Comparing loans only by monthly payment. A longer term lowers the payment but usually raises the total interest.",
        ],
      },
      {
        t: "p",
        text: "The mortgage calculator on this site runs this formula. It is an estimate. Your lender's schedule is the one that counts.",
      },
    ],
    faqs: [
      {
        question: "Why is most of my early payment interest?",
        answer: "Interest is charged on the remaining balance. Early on the balance is large, so most of each payment is interest.",
      },
      {
        question: "Does paying extra each month help?",
        answer: "Yes. Extra payments reduce the balance faster, which lowers the interest charged on it in later months.",
      },
    ],
  },
  {
    slug: "how-to-convert-time-zones",
    title: "How to convert between time zones without mistakes",
    description:
      "Why time zone conversions go wrong, how daylight saving time changes the answer, and a simple method to get it right every time.",
    related: [{ href: "/tools/calculators/timezone-converter", label: "Timezone converter" }],
    body: [
      {
        t: "p",
        text: "A time zone is an offset from UTC, but many places change their offset for daylight saving time. Most conversion errors come from forgetting that, or from using the wrong date.",
      },
      { t: "h2", text: "Work through UTC" },
      {
        t: "p",
        text: "Convert the time to UTC first, then convert from UTC to the target zone. New York is UTC−5 in winter (EST) and UTC−4 in summer (EDT). London is UTC+0 in winter (GMT) and UTC+1 in summer (BST).",
      },
      {
        t: "p",
        text: "Example: 3:00 PM in New York on 15 January is 20:00 UTC, which is 8:00 PM in London. In July, 3:00 PM in New York is 19:00 UTC, which is 8:00 PM in London. The clocks moved, so the local times stayed the same. Always check the date, not just the zone name.",
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Using a fixed hour offset for a date in the other season.",
          "Forgetting that countries switch clocks on different dates. The US and UK change a few weeks apart, so the gap between them shifts for a short time each spring and autumn.",
          "Scheduling with a UTC offset in a calendar app. Choose the city or zone name instead, so meetings follow the local clock changes.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is UTC?",
        answer: "Coordinated Universal Time is the reference clock that local time zones are measured from. It does not change for daylight saving.",
      },
      {
        question: "Why is the time difference sometimes one hour different?",
        answer: "Because one or both places started or stopped daylight saving time on a different date.",
      },
    ],
  },
  {
    slug: "how-long-should-a-password-be",
    title: "How long should a password be? A simple formula",
    description:
      "How password strength is estimated with entropy bits, why length matters more than a symbol, and what makes a generated password safe.",
    related: [{ href: "/tools/developer-tools/password-generator", label: "Password generator" }],
    body: [
      {
        t: "p",
        text: "Password strength depends on two things: how long the password is and how many different characters could appear in each position. A rough measure of that is entropy, in bits.",
      },
      { t: "formula", text: "Entropy (bits) ≈ Length × log2(Character set size)" },
      {
        t: "p",
        text: "The character set size is how many different characters can appear. Lowercase letters give 26, all letters give 52, letters plus digits give 62, and printable ASCII is about 94.",
      },
      {
        t: "p",
        text: "Example: 12 lowercase letters give about 12 × 4.7 = 56 bits. 16 characters from the 94 printable symbols give about 16 × 6.55 = 105 bits. Each extra character adds more strength than changing one character type.",
      },
      { t: "h2", text: "How the generator makes passwords" },
      {
        t: "p",
        text: "The password generator on this site uses the browser's crypto.getRandomValues function, which is designed for security, rather than Math.random. The length and symbol options set the character set size.",
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Trusting the number alone. A password you invent, such as a word with a number added, is usually weaker than the formula suggests.",
          "Reusing one password on several sites. A leak on one site then exposes the others.",
          "Keeping passwords in a plain text note. Use a password manager.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 12 characters enough?",
        answer: "It depends on the account. For important accounts, 16 or more random characters is a safer default, and two-factor sign-in adds protection on top.",
      },
      {
        question: "Are symbols required?",
        answer: "No. Length matters more. A long random password of letters and digits can be stronger than a short one with symbols.",
      },
    ],
  },
  {
    slug: "how-qr-codes-work",
    title: "How QR codes work and how big to print them",
    description:
      "What a QR code stores, what the error correction levels mean, and how to size and place a code so it scans reliably.",
    related: [{ href: "/tools/developer-tools/qr-code-generator", label: "QR code generator" }],
    body: [
      {
        t: "p",
        text: "A QR code is a grid of black and white squares that stores text or a link. Scanners can read it even when part of it is damaged, because the code includes error correction data.",
      },
      { t: "h2", text: "Error correction levels" },
      {
        t: "ul",
        items: [
          "L can recover about 7% of the code if it is damaged.",
          "M can recover about 15%.",
          "Q can recover about 25%.",
          "H can recover about 30%.",
        ],
      },
      {
        t: "p",
        text: "Higher levels make the code denser, so the squares are smaller for the same amount of data. Use the lowest level that works for your printing conditions, and use H when the code may be scratched or partly covered.",
      },
      { t: "h2", text: "Size, margin and contrast" },
      {
        t: "ul",
        items: [
          "Print it large enough for the scanning distance. A code on a flyer for hand-held scanning can be a few centimetres wide; a poster needs to be much larger.",
          "Keep a clear margin, called the quiet zone, around the code. Blank space helps scanners find the edges.",
          "Use dark code on a light background. Light-on-dark and coloured-on-coloured codes often fail to scan.",
        ],
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Encoding a very long URL. Use a short link so the code stays simple.",
          "Cropping the quiet zone when you place it in a design.",
          "Testing with only one phone or app. Scan with two or three before you print.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many characters can a QR code hold?",
        answer: "It depends on the error level and the type of data. Shorter text makes a simpler, easier-to-scan code.",
      },
      {
        question: "Do QR codes expire?",
        answer: "A static code stores the text itself and does not expire. If you use a redirect service, the link may stop working if that service ends.",
      },
    ],
  },
  {
    slug: "how-to-compare-two-drafts",
    title: "How to compare two drafts line by line",
    description:
      "A practical way to find what changed between two versions of a document, with the common reasons a comparison looks wrong.",
    related: [{ href: "/tools/writing/text-compare", label: "Text compare" }],
    body: [
      {
        t: "p",
        text: "When you revise a document, it is easy to lose track of what changed. A line-by-line comparison shows which lines differ between the older and newer version, so you can review only the changes.",
      },
      { t: "h2", text: "Steps" },
      {
        t: "ul",
        items: [
          "Paste the older version into the first box and the newer version into the second.",
          "Check every line that differs. Read the changed lines together, since small wording changes often matter most in legal or academic text.",
          "Decide which version to keep, then save it as your working copy.",
        ],
      },
      {
        t: "p",
        text: "Comparison works on whole lines. A paragraph that is one long line shows as one change, even if only one word moved. Split long paragraphs into sentences before you compare if you need a finer view.",
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Comparing copies with different line breaks. If one version wraps the text differently, almost every line looks changed.",
          "Missing spaces or capital letters. Extra spaces or different capitalisation make the same words look different.",
          "Assuming no differences means the meaning is the same. Read the final version before you approve it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I compare two documents in different formats?",
        answer: "Copy the text out of each file first. Formatting such as bold or tables is not compared, so only the words and lines are.",
      },
      {
        question: "Why does one changed word mark the whole paragraph?",
        answer: "Because the comparison works on lines. Split the paragraph into sentences to see the change more precisely.",
      },
    ],
  },
  {
    slug: "how-to-convert-heic-to-jpg",
    title: "How to convert an iPhone HEIC photo to JPG",
    description:
      "Why iPhone photos arrive as HEIC, when you need JPG instead, and how to convert them without losing the original.",
    related: [{ href: "/tools/image-tools/heic-to-jpg", label: "HEIC to JPG" }],
    body: [
      {
        t: "p",
        text: "iPhones save photos as HEIC by default. Many websites, email forms and older programs accept only JPG, so you may need to convert them.",
      },
      { t: "h2", text: "Converting a photo" },
      {
        t: "ul",
        items: [
          "Open the HEIC to JPG tool and choose the photo.",
          "The conversion runs in your browser, so the photo is not uploaded to a server.",
          "Download the JPG and open it to check it before you delete anything.",
        ],
      },
      { t: "h2", text: "Keep the quality high" },
      {
        t: "p",
        text: "JPG is a lossy format, so each save removes a little detail. Convert from the original HEIC rather than from an edited or re-saved JPG. If the tool offers a quality setting, choose a high one, and keep the original file as an archive.",
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Converting a copy that was already compressed and expecting the detail back. A conversion can only keep what the file already has.",
          "Deleting the original HEIC too early. Keep it until you have checked the JPG.",
          "Assuming all information survives. Check that the date and location details you need are still in the converted file.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my iPhone photo not upload?",
        answer: "The site may accept only JPG or PNG. Convert the HEIC file to JPG first, then upload that file.",
      },
      {
        question: "Is converting HEIC to JPG lossy?",
        answer: "Yes, JPG compresses the image. Using a high quality setting keeps the loss small for most photos.",
      },
    ],
  },
  {
    slug: "how-to-format-and-validate-json",
    title: "How to format and check JSON",
    description:
      "What makes JSON valid, the mistakes that break it most often, and how to format, check and minify it safely.",
    related: [{ href: "/tools/developer-tools/json-formatter", label: "JSON formatter" }],
    body: [
      {
        t: "p",
        text: "JSON is a strict data format used by APIs and configuration files. One misplaced comma can stop the whole file from loading. A formatter fixes the layout, and a validator tells you where the syntax breaks.",
      },
      { t: "h2", text: "What valid JSON allows" },
      {
        t: "ul",
        items: [
          "Keys and strings must use double quotes, not single quotes.",
          "No trailing comma after the last item in an object or array.",
          "No comments. Comments are allowed in many JavaScript files, but not in JSON.",
          "Numbers cannot have leading zeros or a leading plus sign.",
        ],
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Copying a JavaScript object into a JSON file. Unquoted keys and comments make it invalid JSON.",
          "Minifying a file you still need to edit. Format it, edit it, and minify it only for production.",
          "Assuming valid JSON means correct data. A validator checks the syntax, not whether the field names and values are right.",
        ],
      },
      {
        t: "p",
        text: "Use the JSON formatter on this site to pretty-print, check or minify your JSON.",
      },
    ],
    faqs: [
      {
        question: "What is the most common JSON error?",
        answer: "A trailing comma after the last item, or single quotes around a string. Both are allowed in JavaScript but not in JSON.",
      },
      {
        question: "Does minifying JSON change the data?",
        answer: "No. It removes spaces and line breaks only, so the data stays the same.",
      },
    ],
  },
  {
    slug: "how-gpa-is-calculated",
    title: "How GPA is calculated from letter grades",
    description:
      "The 4.0 grade point scale, how credit hours weight each course, and a worked example of a semester GPA.",
    related: [{ href: "/tools/student-tools/gpa-calculator", label: "GPA calculator" }],
    body: [
      {
        t: "p",
        text: "GPA converts each course grade into points on a 4.0 scale, then averages those points weighted by credit hours. Schools differ in the details, so check your own grading policy for the final rules.",
      },
      { t: "formula", text: "GPA = Σ(grade points × credits) ÷ Σ(credits)" },
      {
        t: "p",
        text: "Example: Maths with an A (4.0) for 3 credits, English with a B+ (3.3) for 3 credits, and Physics with an A- (3.7) for 4 credits. The points are 4.0 × 3 = 12.0, 3.3 × 3 = 9.9 and 3.7 × 4 = 14.8. That totals 36.7 points over 10 credits, so the GPA is 3.67.",
      },
      { t: "h2", text: "A common 4.0 scale" },
      {
        t: "ul",
        items: [
          "A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7",
          "C+ = 2.3, C = 2.0, C- = 1.7",
          "D = 1.0, F = 0.0",
        ],
      },
      { t: "h2", text: "Common mistakes" },
      {
        t: "ul",
        items: [
          "Averaging the letter grades without weighting by credits. A 4-credit course should count more than a 1-credit lab.",
          "Using the wrong scale. Some schools use different plus and minus values, or a 10-point scale.",
          "Including courses that do not count toward GPA, such as some pass/fail courses.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a 3.67 GPA the same as a 3.7?",
        answer: "Only after rounding. Most schools report GPA to two decimal places, so check whether your school rounds or truncates.",
      },
      {
        question: "Does a retaken course replace the old grade?",
        answer: "It depends on the school. Some replace the old grade in GPA and others average both. Check your policy.",
      },
    ],
  },
];

export function getGuideArticle(slug: string) {
  return guideArticles.find((guide) => guide.slug === slug);
}
