/* ==========================================================================
   MASTER CONTENT FILE
   ==========================================================================
*/

const siteContent = {
    // --- Header & Intro ---
    title: "A Tax by Any Other Name?",
    subtitle: "Predicting the Supreme Court’s Decision on IEEPA tariffs",
    author: "Kokoro Terukina", // <--- NEW FIELD
    introText: "This memo demystifies the complex legal battle over trade authority. By examining the judicial philosophies of the nine Justices, it forecasts how a single Supreme Court decision could reshape the global economy. It also considers who the Justices are and how those perspectives inform their likely votes.",

    // --- Section: The Legal Problem ---
    legalSectionTitle: "The Question Before the Court",
    legalQuestion: "Did the President exceed statutory authority under the International Emergency Economic Powers Act (IEEPA) by imposing tariffs unrelated to an “unusual and extraordinary threat,” and does such a reading grant unconstitutional, open-ended power?",
    legalExplanation: "The Constitution gives Congress the power to tax. However, the IEEPA allows the President to 'regulate' economic transactions during national emergencies. The legal battle hinges on whether the word 'regulate' includes the power to 'tax'.",

    // --- Section: Historical Context ---
    historicalContextTitle: "Historical Context",
    historicalContextText: "Since enacted in 1977, Presidents have used the International Emergency Economic Powers Act (IEEPA) to address discrete threats by specific countries and persons. Historically, IEEPA has been used to target policies and actions of specific foreign governments by prohibiting all economic relations between U.S. persons and the affected jurisdiction. Past Presidents have also used IEEPA to sanction specific categories of foreign “persons” or individuals located within specifically identified geographic areas. No other president other than Trump has invoked IEEPA to impose tariffs or duties on goods at any point in the statute’s history, rendering this a novel question for the Supreme Court.",

    // --- Section: Background ---
    postureTitle: "Relevant Background",
    postureText: "Trump has enacted many forms of tariffs. The first IEEPA tariffs have been imposed on key US trading partners which include China, Canada, Mexico, citing border security and fentanyl concerns. Trump has also imposed Reciprocal Tariffs, imposed tariffs in response to other countries’ tariffs, tax policies, and any other policies including exchange rates and unfair practices. Another target for the Trump Administration was a tariff on Venezuela and any countries that purchase oil and gas from Venezuela. The European Union has also been a target for the Trump Administration. Trump has also issued product-specific tariffs on goods such as semiconductors, pharmaceuticals, steel and aluminum and others.",

    // --- Section: Primary Texts ---
    primarySourceTitle: "The Textual Conflict",
    primarySourceIntro: "To understand the case, we must look at the specific wording of the laws involved.",

    primarySources: [
        {
            title: "U.S. Constitution (Art. I, § 8, cl. 1)",
            text: "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises...",
            commentary: "The Constitution gives this power specifically to Congress, not the President. This is the core of the plaintiffs' argument."
        },
        {
            title: "IEEPA (50 U.S.C. § 1701)",
            text: "Any authority granted to the President... to deal with any unusual and extraordinary threat; which has its source in whole or substantial part outside the United States...",
            commentary: "The statute requires an 'unusual and extraordinary threat.' The debate is whether tariffs on general goods meet this high threshold."
        }
    ],

    // --- Section: International Relations ---
    implicationsTitle: "Implication on International Relations",
    implicationsText: "“The days of the United States propping up the entire world order, like Atlas, are over.” (2025 National Security Strategy, p. 12). The United States has served a pivotal role to uphold the moral mission to defend human rights, to defend free speech or free press. Yet our latest priority is to make America wealthy. The Trump administration has transformed the world order with changes to the old trade regime and alliances being destroyed. Relationships between countries are treated as strictly transactional and many allies have trade wars pushed on them.",

    // --- Section: Prediction ---
    predictionTitle: "Predicted Holding",
    predictionText: "The Court is likely to impose meaningful limits on IEEPA in the trade context but with a fractured lineup. The likely conclusion of this case is a 7-2 or 6-3 ruling decision limiting the reach of the executive action under the IEEPA. The likely vote coalition will be Chief Justice Roberts who will author the opinion as the Chief Justice in the majority, Justice Sotomayor, Justice Kagan, Justice Gorsuch, Justice Barrett, Justice Jackson and possibly Kavanaugh. The Court has consistently decided cases without reaching Constitutional reasoning so it is likely that we can predict the Court to resolve this case on statutory interpretation rather than constitutional invalidation."
};

const timelineData = [
    {
        date: "January 2025",
        title: "Proposed Tariffs",
        summary: "Trump announces planned 25% tariffs on Canada and Mexico, effective February 1.",
        details: "The administration signals a major shift in trade policy, targeting key North American allies."
    },
    {
        date: "February 2025",
        title: "Executive Order",
        summary: "Executive order imposes 25% tariffs on Canada and Mexico and 10% on China.",
        details: "The tariffs are officially enacted, sparking immediate concern in global markets."
    },
    {
        date: "March 2025",
        title: "Retaliation",
        summary: "China retaliates with tariffs on U.S. farm goods; Trump announces 25% auto tariffs.",
        details: "The trade war escalates as China hits U.S. agriculture. Trump responds by targeting the automotive sector."
    },
    {
        date: "April 2025",
        title: "Global Baseline",
        summary: "Trump announces 10% baseline global tariff; China tariffs spike to 145%+.",
        details: "Tariffs take effect April 9, then paused for 90 days. The administration threatens higher rates for major economies."
    },
    {
        date: "May 2025",
        title: "Legal Intervention",
        summary: "U.S. Court of International Trade rules IEEPA tariffs unlawful.",
        details: "May 28: The CIT rules against the administration. May 29: A second federal court enjoins the tariffs. Meanwhile, a trade deal is reached with Britain."
    },
    {
        date: "June 2025",
        title: "Appeal & Framework",
        summary: "Federal Circuit allows tariffs to remain in effect pending appeal.",
        details: "June 10: The appeals court grants a stay. U.S.–China trade framework is announced."
    },
    {
        date: "August 2025",
        title: "Global Effect",
        summary: "Tariffs take effect on 90+ countries.",
        details: "India tariffs doubled. U.S.–China trade truce extended as the economic impact widens."
    },
    {
        date: "October 2025",
        title: "Rare Earths",
        summary: "Trump threatens 100% tariffs on all Chinese goods over rare earth controls.",
        details: "Tensions reach a boiling point over critical minerals and supply chains."
    }
];

const justicesData = [
  {
    id: "roberts",
    name: "John Roberts",
    role: "Chief Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Official_roberts_CJ.jpg/480px-Official_roberts_CJ.jpg",
    stance: "NO - Strike Down",
    type: "strict",
    votePrediction: "no",
    summary: "Chief Justice Roberts is likely to vote to strike down or significantly limit the tariffs. Through his jurisprudence, he has carved a distinct path that exercises restraint but also lays firm limits on what he considers appropriate bureaucratic overreach.",
    quote: "Chief Justice Roberts tends to author narrow opinions that can only be applied to the parties before the court... In West Virginia v. EPA, the Chief Justice agreed that actions require clear congressional authorization for sweeping actions.",
    caseName: "West Virginia v. EPA"
  },
  {
    id: "thomas",
    name: "Clarence Thomas",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Clarence_Thomas_official_SCOTUS_portrait.jpg/436px-Clarence_Thomas_official_SCOTUS_portrait.jpg",
    stance: "NO - Strike Down",
    type: "strict",
    votePrediction: "no",
    summary: "Justice Thomas is difficult to predict but is likely to vote to strike down the tariffs. Although he favors inherent presidential authority in foreign affairs, it is likely that he will view the IEEPA case strictly as a Legislative power rather than an issue involving foreign affairs.",
    quote: "The Constitution categorically forbids Congress to delegate its legislative power... In Gundy v. United States Justice Thomas called to revive nondelegation.",
    caseName: "Gundy v. United States"
  },
  {
    id: "alito",
    name: "Samuel Alito",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Samuel_Alito_official_photo.jpg/480px-Samuel_Alito_official_photo.jpg",
    stance: "YES - Uphold",
    type: "defer",
    votePrediction: "yes",
    summary: "Justice Alito is the most likely to uphold the validity of the tariffs. He is greatly sympathetic to broad emergency delegations and understands the necessity for executive flexibility in crises. The government’s justification of using “emergency tools” is an argument he has accepted in the past.",
    quote: "Justice Alito tends to leans towards and places great trust in the executive branch in crises and is rarely in the vote to limit presidential power.",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "sotomayor",
    name: "Sonia Sotomayor",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sonia_Sotomayor_in_SCOTUS_robe.jpg/480px-Sonia_Sotomayor_in_SCOTUS_robe.jpg",
    stance: "NO - Strike Down",
    type: "strict",
    votePrediction: "no",
    summary: "Justice Sotomayor will certainly vote to strike down the validity of the tariffs. It is clear that she equates these tariffs that are enacted as revenue raising taxes. She consistently requires that there be clear statutory authorization to justify sweeping actions.",
    quote: "Justice Sotomayor dissented in Trump v. Hawaii, warning against the danger of rubber-stamping national-security justifications.",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "kavanaugh",
    name: "Brett Kavanaugh",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brett_Kavanaugh_Official_Portrait.jpg/480px-Brett_Kavanaugh_Official_Portrait.jpg",
    stance: "Possible Swing",
    type: "mixed",
    votePrediction: "yes", 
    summary: "The prediction notes Kavanaugh as 'possibly' joining the majority to limit tariffs, but historically he defers on national security. He remains a key swing vote in this simulation.",
    quote: "Courts generally lack the authority to second-guess the President’s national security determinations.",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "kagan",
    name: "Elena Kagan",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg/480px-Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg",
    stance: "Limit Power",
    type: "strict",
    votePrediction: "no",
    summary: "Identified as part of the coalition to limit executive action. Justice Kagan believes Congress can delegate power only if it provides clear instructions.",
    quote: "Congress may delegate authority so long as it provides an intelligible principle...",
    caseName: "Gundy v. United States"
  },
  {
    id: "gorsuch",
    name: "Neil Gorsuch",
    role: "Associate Justice",
    image: "https://dims.apnews.com/dims4/default/076fdab/2147483647/strip/true/crop/3000x1885+0+0/resize/599x376!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fafs%3AMedium%3A799830007%2F3000.jpeg",
    stance: "Limit Power",
    type: "strict", 
    votePrediction: "no",
    summary: "Identified as part of the coalition to limit executive action. Justice Gorsuch is the court's leading critic of the 'Administrative State.'",
    quote: "The Constitution promises that only the people's elected representatives may adopt new federal laws restricting liberty...",
    caseName: "Gundy v. United States"
  },
  {
    id: "barrett",
    name: "Amy Coney Barrett",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Amy_Coney_Barrett_Official_Portrait.jpg/480px-Amy_Coney_Barrett_Official_Portrait.jpg",
    stance: "Textualist",
    type: "strict",
    votePrediction: "no",
    summary: "Identified as part of the coalition to limit executive action. Justice Barrett interprets laws by their plain text.",
    quote: "N/A",
    caseName: "Biden v. Nebraska"
  },
  {
    id: "jackson",
    name: "Ketanji Brown Jackson",
    role: "Associate Justice",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/KBJackson.jpg/480px-KBJackson.jpg",
    stance: "Limit Power",
    type: "strict",
    votePrediction: "no",
    summary: "Identified as part of the coalition to limit executive action. Justice Jackson tends to vote against executive overreach when it infringes on legislative duties.",
    quote: "N/A",
    caseName: "Loper Bright v. Raimondo"
  }
];
