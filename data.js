/* ==========================================================================
   MASTER CONTENT FILE
   ==========================================================================
   INSTRUCTIONS:
   1. Edit the text inside the quotes "".
   2. To add more Sources or Timeline events, copy the { } blocks.
   3. Do NOT remove commas (,)!
   ==========================================================================
*/

const siteContent = {
    // --- Header & Intro ---
    title: "Separation of Powers",
    subtitle: "Does the President have the right to tax your imports?",
    introText: "This platform demystifies the complex legal battle over trade authority. By exploring the judicial philosophies of the nine Justices, we reveal how a single court ruling could reshape the global economy.",

    // --- Section: The Legal Problem ---
    legalSectionTitle: "The Question Before the Court",
    legalQuestion: "Does the International Emergency Economic Powers Act (IEEPA) authorize the President to impose tariffs?",
    legalExplanation: "The Constitution gives Congress the power to tax. However, the IEEPA allows the President to 'regulate' economic transactions during national emergencies. The legal battle hinges on whether the word 'regulate' includes the power to 'tax'.",

    // --- Section: Procedural Posture ---
    postureTitle: "Procedural Posture: How we got here",
    postureText: "This case arises from a challenge by American importers. The Court of International Trade initially ruled in favor of the Executive Branch. The Federal Circuit affirmed that ruling. The plaintiffs have now petitioned the Supreme Court for a Writ of Certiorari, arguing that the lower courts misinterpreted the Non-Delegation Doctrine.",

    // --- Section: Primary Texts ---
    primarySourceTitle: "The Textual Conflict",
    
    // Intro to the sources
    primarySourceIntro: "To understand the case, we must look at the specific wording of the laws involved. The Supreme Court is 'Textualist,' meaning they care more about the dictionary definition of these words than the political outcome.",

    // THE SOURCES LIST (Add as many as you want)
    primarySources: [
        {
            title: "U.S. Constitution (Art. I, Sec. 8)",
            text: "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises...",
            commentary: "Notice that the Constitution gives this power specifically to Congress, not the President. This is the core of the plaintiffs' argument."
        },
        {
            title: "IEEPA (50 U.S.C. § 1702)",
            text: "The President may... regulate, direct and compel, nullify, void, prevent or prohibit, any acquisition... of any property.",
            commentary: "The key word here is 'regulate.' The Government argues that 'regulating' trade includes taxing it. The opposition argues that if Congress meant 'tax,' they would have said 'tax.'"
        },
        {
            title: "Trade Expansion Act (Sec. 232)",
            text: "If the Secretary of Commerce finds that an article is being imported in such quantities as to threaten to impair the national security, the President shall take such actions...",
            commentary: "This section is the 'National Security' loophole. It gives the President broad power, but only if he can prove a genuine threat to national security exists."
        }
    ],

    // --- Section: Prediction ---
    predictionTitle: "Simulate the Ruling",
    predictionText: "If the President declares a National Emergency to enact tariffs, how will the Court vote? Click below to see the prediction."
};

// --- TIMELINE DATA ---
// "summary" shows always. "details" shows when clicked.
const timelineData = [
    {
        date: "January 2018",
        title: "Solar Panels & Washing Machines",
        summary: "President Trump uses Section 201 to impose the first wave of tariffs.",
        details: "This was the opening shot of the trade war. Using the Trade Act of 1974, the administration imposed a 30% tariff on imported solar panels and 20% on washing machines, arguing that cheap imports were killing American manufacturing."
    },
    {
        date: "March 2018",
        title: "Steel and Aluminum (Section 232)",
        summary: "Tariffs on steel (25%) and aluminum (10%) are announced citing National Security.",
        details: "The administration used a rarely invoked Cold War-era law (Section 232), declaring that reliance on foreign metal threatened the U.S. defense industrial base. This sparked immediate retaliation from the EU, Canada, and Mexico."
    },
    {
        date: "July 2018",
        title: "China Tariffs Phase 1",
        summary: "The U.S. places a 25% tariff on $34 billion of Chinese goods.",
        details: "This marked the official start of the direct conflict with China. The tariffs targeted industrial machinery and electronics. China immediately responded with dollar-for-dollar tariffs on U.S. soybeans and cars."
    },
    {
        date: "August 2019",
        title: "Escalation",
        summary: "Tariffs expand to cover consumer goods like clothing and toys.",
        details: "Unlike previous rounds, these tariffs directly hit American consumers. The President announced duties on an additional $300 billion of Chinese imports, effectively taxing nearly everything China sells to the United States."
    },
    {
        date: "Present Day",
        title: "The Legal Challenge",
        summary: "The Supreme Court considers if these emergency powers were used unconstitutionally.",
        details: "A group of American importers has sued, arguing that Section 232 and IEEPA were never meant to be used for long-term economic policy. They argue that if Congress doesn't stop this, the President effectively becomes the sole lawmaker on taxes."
    }
];

const justicesData = [
  {
    id: "gorsuch",
    name: "Neil Gorsuch",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Neil_Gorsuch_Official_Portrait.jpg/480px-Neil_Gorsuch_Official_Portrait.jpg",
    stance: "Skeptical of Exec. Power",
    type: "strict", 
    votePrediction: "no",
    summary: "Justice Gorsuch is the court's leading critic of the 'Administrative State.' He believes the Constitution puts all legislative power—including the power to tax—exclusively in the hands of Congress.",
    quote: "The Constitution promises that only the people's elected representatives may adopt new federal laws restricting liberty...",
    caseName: "Gundy v. United States"
  },
  {
    id: "kavanaugh",
    name: "Brett Kavanaugh",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brett_Kavanaugh_Official_Portrait.jpg/480px-Brett_Kavanaugh_Official_Portrait.jpg",
    stance: "Deferential on Security",
    type: "defer",
    votePrediction: "yes",
    summary: "Justice Kavanaugh typically defers to the President when the issue is framed as 'National Security.' If a tariff is justified to protect American security, he is likely to vote in favor.",
    quote: "Courts generally lack the authority to second-guess the President’s national security determinations.",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "thomas",
    name: "Clarence Thomas",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Clarence_Thomas_official_SCOTUS_portrait.jpg/436px-Clarence_Thomas_official_SCOTUS_portrait.jpg",
    stance: "Strict Separation",
    type: "strict",
    votePrediction: "no",
    summary: "Justice Thomas argues that Congress cannot give away its powers even if it wants to. He would likely view the IEEPA usage for tariffs as an unconstitutional transfer of power.",
    quote: "The Constitution categorically forbids Congress to delegate its legislative power.",
    caseName: "Dept of Transportation v. AAR"
  },
  {
    id: "roberts",
    name: "John Roberts",
    role: "Chief Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Official_roberts_CJ.jpg/480px-Official_roberts_CJ.jpg",
    stance: "Institutional Stability",
    type: "defer",
    votePrediction: "yes",
    summary: "Chief Justice Roberts prefers to avoid overturning established laws. He is cautious about stripping the President of emergency powers that have existed for decades.",
    quote: "The President possesses broad discretion in the arena of foreign affairs.",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "kagan",
    name: "Elena Kagan",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg/480px-Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg",
    stance: "Pragmatic Delegation",
    type: "mixed",
    votePrediction: "no",
    summary: "Justice Kagan believes Congress can delegate power if it provides clear instructions. She may argue that 'regulating commerce' does not inherently include the power to tax it.",
    quote: "Congress may delegate authority so long as it provides an intelligible principle...",
    caseName: "Gundy v. United States"
  },
  {
    id: "sotomayor",
    name: "Sonia Sotomayor",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sonia_Sotomayor_in_SCOTUS_robe.jpg/480px-Sonia_Sotomayor_in_SCOTUS_robe.jpg",
    stance: "Statutory Text",
    type: "mixed",
    votePrediction: "no",
    summary: "Justice Sotomayor focuses heavily on text. She has questioned whether the power to 'regulate' actually includes the power to 'levy duties.'",
    quote: "Does the power to 'regulate' generally include the power to impose a tax?",
    caseName: "Oral Arguments"
  },
  {
    id: "alito",
    name: "Samuel Alito",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Samuel_Alito_official_photo.jpg/480px-Samuel_Alito_official_photo.jpg",
    stance: "Skeptical of Delegation",
    type: "strict",
    votePrediction: "yes",
    summary: "Justice Alito is generally skeptical of agencies but supportive of Presidential power in foreign affairs. He may view tariffs as a foreign policy tool rather than a tax.",
    quote: "N/A",
    caseName: "Gundy v. United States"
  },
  {
    id: "barrett",
    name: "Amy Coney Barrett",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Amy_Coney_Barrett_Official_Portrait.jpg/480px-Amy_Coney_Barrett_Official_Portrait.jpg",
    stance: "Textualist",
    type: "mixed",
    votePrediction: "yes",
    summary: "Justice Barrett interprets laws by their plain text. If the IEEPA says the President can 'regulate' property, she looks at the dictionary definition of regulate.",
    quote: "N/A",
    caseName: "Biden v. Nebraska"
  },
  {
    id: "jackson",
    name: "Ketanji Brown Jackson",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/KBJackson.jpg/480px-KBJackson.jpg",
    stance: "Pragmatic Delegation",
    type: "defer",
    votePrediction: "no",
    summary: "Justice Jackson tends to support the government's ability to solve problems, but she often votes against executive overreach when it infringes on legislative duties.",
    quote: "N/A",
    caseName: "Loper Bright v. Raimondo"
  }
];