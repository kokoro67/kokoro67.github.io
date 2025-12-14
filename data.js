/* ==========================================================================
   MASTER CONTENT FILE
   ==========================================================================
*/

const siteContent = {
    // --- Header & Intro ---
    title: "A Tax by Any Other Name?",
    subtitle: "Predicting the Supreme Court’s Decision on IEEPA tariffs",
    author: "Kokoro Terukina",
    introText: "This memo demystifies the complex legal battle over trade authority. By examining the judicial philosophies of the nine Justices, it forecasts how a single Supreme Court decision could reshape the global economy. It also considers who the Justices are and how those perspectives inform their likely votes.",

    // --- Section: The Legal Problem ---
    legalSectionTitle: "The Question Before the Court",
    legalQuestion: "Did the President exceed statutory authority under the International Emergency Economic Powers Act (IEEPA) by imposing tariffs unrelated to an “unusual and extraordinary threat,” and does such a reading grant unconstitutional, open-ended power?",
    legalExplanation: "",

    // --- Section: Historical Context ---
    historicalContextTitle: "Historical Context",
    historicalContextText: "Since enacted in 1977, Presidents have used the International Emergency Economic Powers Act (IEEPA) to address discrete threats by specific countries and persons. Historically, IEEPA has been used to target policies and actions of specific foreign governments by prohibiting all economic relations between U.S. persons and the affected jurisdiction. Past Presidents have also used IEEPA to sanction specific categories of foreign “persons” or individuals located within specifically identified geographic areas. No other president other than Trump has invoked IEEPA to impose tariffs or duties on goods at any point in the statute’s history, rendering this a novel question for the Supreme Court.",

    // --- Section: Background ---
    postureTitle: "Relevant Background",
    postureText: "Trump has enacted many forms of tariffs. The first IEEPA tariffs have been imposed on key US trading partners which include China, Canada, Mexico, citing border security and fentanyl concerns. Trump has also imposed Reciprocal Tariffs, imposed tariffs in response to other countries’ tariffs, tax policies, and any other policies including exchange rates and unfair practices. Another target for the Trump Administration was a tariff on Venezuela and any countries that purchase oil and gas from Venezuela. The European Union has also been a target for the Trump Administration. Trump has also issued product-specific tariffs on goods such as semiconductors, pharmaceuticals, steel and aluminum and others.",

    // --- Section: Primary Texts ---
    primarySourceTitle: "The Textual Conflict",
    primarySourceIntro: "",

    primarySources: [
        {
            title: "U.S. Constitution (Art. I, § 8, cl. 1)",
            text: "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the debts and provide for the common defense and general welfare of the United States; but all duties, imposts and excises shall be uniform throughout the United States;",
            commentary: "The Constitution gives this power specifically to Congress, not the President. This is the core of the plaintiffs' argument."
        },
        {
            title: "IEEPA (50 U.S.C. § 1701 (a) and (b))",
            text: "(a) Any authority granted to the President by section 1702 of this title may be execerised to deal with any unusual and extraordinary threat, which has its source in whole or substantial part outside the United States, to the national security, foreign policy, or economy of the United States, if the President declares a national emergency with respect to such threat. (b) The authorities granted to the President by section 1702 of this title may only be exercised to deal with an unusual and extraordinary threat with respect to which a national emergency has been declared for purposes of this chapter and may not be exercised for any other purpose. Any exercise of such authorities to deal with any new threat shall be based on a new declaration of national emergency which must be with respect to such threat.",
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
    // NOTE: This URL is an article page, not a direct image. It may not display correctly.
    image: "https://static01.nyt.com/images/2007/08/01/washington/01roberts.190.jpg",
    stance: "NO - Strike Down",
    type: "strict",
    votePrediction: "no",
    summary: "Chief Justice Roberts is likely to vote to strike down or significantly limit the tariffs.  Through his jurisprudence, he has carved a distinct path that exercises restraint but also lays firm limits on what he considers appropriate bureaucratic overreach. Throughout the executive power opinions such as Selia Law and Trump v. United States, Chief Justice Roberts heavily relies not only on precedent but also emphasizes the structure of power outlined in briefs and some believe that his judicial moves are all about politics. Chief Justice Roberts tends to author narrow opinions that can only be applied to the parties before the court, making his rulings difficult to use as precedent. Although he is likely to vote to strike down the tariffs, it is likely that he will do so in a way that the opinion can be crafted in a narrow text-focused opinion.",
    quote: "",
    caseName: "NFIB v. OSHA"
  },
  {
    id: "thomas",
    name: "Clarence Thomas",
    role: "Associate Justice",
    image: "https://pioneercourthouse.org/images/justices/EL-Thomas.jpg",
    stance: "YES - Uphold",
    type: "uphold",
    votePrediction: "yes",
    summary: "Justice Clarence Thomas is likely to vote to strike down the tariffs. Justice Thomas is known as a strong structural originalist and supports broad presidential power in foreign affairs but is generally skeptical of delegations and administrative power generally. He is known to be a formalist about Article I powers, which points against executive tariff authority but is deferential in foreign-affairs contexts. Historical statutory and textual analysis is likely to be the key factors that will shape his vote.",
    quote: "",
    caseName: "Hamdi v. Rumsfeld"
  },
  {
    id: "alito",
    name: "Samuel Alito",
    role: "Associate Justice",
    image: "https://www.rwu.edu/sites/default/files/styles/660x371/public/news-article/article-image/alito-slider.jpg",
    stance: "YES - Uphold",
    type: "uphold",
    votePrediction: "yes",
    summary: "Justice Alito is the most likely to uphold the validity of the tariffs. Justice Alito is greatly sympathetic to broad emergency delegations and understands the necessity for executive flexibility in crises. The government’s justification of using “emergency tools” is an argument he has accepted in the past. He has a clear record of being deferential to the executive branch, specifically in national security and foreign affairs and is skeptical of limiting presidential power.",
    quote: "",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "sotomayor",
    name: "Sonia Sotomayor",
    role: "Associate Justice",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aQFdRjQ2xtoHSN-vZEEkvTRie8k31Gq16w&s",
    stance: "NO - Strike Down",
    type: "strict",
    votePrediction: "no",
    summary: "Justice Sotomayor will certainly vote to strike down the validity of the tariffs. It is clear that she equates these tariffs that are enacted as revenue raising taxes. Justice Sotomayor usually begins with text but heavily considers statutory history, the greater consequences of decisions, and also balances how an opinion may function in the real-world. She consistently requires that there be clear statutory authorization to justify sweeping actions and is a strong defender of stare desis.",
    quote: "",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "kavanaugh",
    name: "Brett Kavanaugh",
    role: "Associate Justice",
    image: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13062027/1027859644.jpg.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400",
    stance: "Possible Swing",
    type: "mixed",
    votePrediction: "yes", 
    summary: "Justice Kavanaugh is the true swing vote regarding this case but it is incredibly likely his vote will not have the power to sway the majority of justices. Justice Kavanaugh recognizes and sees the government’s argument but also sees the risks of ruling in favor of the executive that could lead to issues of the separation of power. Justice Kavanaugh’s role as the middle justice makes him a pivotal decider on whether the opinion will opt for a narrow textual justification or a structural argument.",
    quote: "",
    caseName: "Trump v. Hawaii"
  },
  {
    id: "kagan",
    name: "Elena Kagan",
    role: "Associate Justice",
    image: "https://static01.nyt.com/images/2014/02/12/us/12bar_cnd/12bar_cnd-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale",
    stance: "Limit Power",
    type: "strict",
    votePrediction: "no",
    summary: "Justice Kagan is certain to vote to strike down the tariffs. Justice Kagan has a contrasting strategy compared to Justice Jackson who is very outspoken and not afraid to openly display her frustration or use her voice to speak to the public. Critics comment that Justice Kagan’s strategy of exercising restraint and limiting how she displays her frustration could be hurting the court and weakening democratic norms. Justice Kagan is known for her ability to speak to the center of the court and to “win by losing.”",
    quote: "",
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
    summary: "Justice Gorsuch is likely a strong vote to rule against the executive. He has a distinct pattern of being aggressively anti-delegation. He is also very skeptical of executive agencies and is a strong advocate of the separation of powers. He has warned against accretion of executive power by administrative reading and it is reasonable to say that he fears the ratcheting of increasing executive power in the future. If the IEEPA tariffs are considered a revenue raising tax, as Justice Sotomayor has labeled it, Justice Gorsuch will be strongly against delegating a taxing authority, which does not originate within the executive power, to the President.",
    quote: "",
    caseName: "Gundy v. United States"
  },
  {
    id: "barrett",
    name: "Amy Coney Barrett",
    role: "Associate Justice",
    image: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/09/04/USAT/85964916007-xxx-usat-1296301-45683.JPG?crop=3169,3168,x0,y0",
    stance: "Limit Power",
    type: "strict",
    votePrediction: "no",
    summary: "Justice Barrett will likely vote against the executive. She has a record of being a textual or historical skeptic, making her a strong candidate conservative that will likely join to reject this use of IEEPA. Justice Barrett is a known textualist. She is cautious about broad delegations and is less instinctively deferential than her colleagues, Justice Alito or Justice Kavanaugh. Justice Barrett remains a critical vote to both the conservative and majority and believes strongly that the justices on the court should be able to rule without considering the repercussions by the public or by the sitting president.",
    quote: "",
    caseName: "Biden v. Nebraska"
  },
  {
    id: "jackson",
    name: "Ketanji Brown Jackson",
    role: "Associate Justice",
    image: "https://media.wusa9.com/assets/WUSA/images/3105a13d-4a4d-4a05-9d7c-f040e61f7196/20250531T225008/3105a13d-4a4d-4a05-9d7c-f040e61f7196_1920x1080.jpg",
    stance: "Limit Power",
    type: "strict",
    votePrediction: "no",
    summary: "Justice Jackson will vote to strike down the tariffs. She has emphasized statutory history and asked about congressional intent to grant taxing-like authority which she suggests that she’ll vote to deny IEEPA as a tariff grant. Justice Jackson tends to favor clear-statement rules in separation-of-powers contexts. She favors a strong statutory text focus and is extremely skeptical of executive overreach where Congress has not clearly spoken.",
    quote: "",
    caseName: "Loper Bright v. Raimondo"
  }
];