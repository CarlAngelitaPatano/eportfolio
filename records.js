/* ============================================================
   HOW TO ADD A NEW RECORD (no coding needed):
   1. Upload your file (PDF, image, etc.) into the "works" folder
      - Easiest way: click the "Upload Work File" button on the
        ITC-C508 page, drag your file in, and click "Commit changes"
   2. Copy one of the blocks below (from { to },) and paste it
      at the TOP of the list
   3. Change the tag, title, date, description, and link
   4. Save, then: git add .  ->  git commit -m "Add record"  ->  git push
   ============================================================ */

const RECORDS = [
  {
    tag: "Performance Task · PT-P1",
    title: "No-Code Neural Network Text Classification",
    date: "July 2026",
    description: "A controlled experiment building a no-code neural text classifier on the Machine Learning for Kids platform to sort telecom support messages into three intents: Positive Praise, Negative Complaint, and Urgent Support. Three models were trained on the same held-out test set. Accuracy rose from 63.64% (baseline) to 72.73% (doubled data) to 90.91% (failure-targeted examples), showing that how well the data represents real input matters more than sheer dataset size. Includes a full IEEE report and a spreadsheet with per-run accuracy, precision, recall, F1, and confusion matrices.",
    link: "works/PTP1-IEEE-Report-Text-Classification.pdf",
    linkText: "View IEEE Report (PDF) →",
    link2: "works/PTP1-Performance-Computations.xlsx",
    linkText2: "View Computations (XLSX) →"
  },
  {
    tag: "Written Work · WW-P2",
    title: "IEEE-Formatted Reflection Report on NLP",
    date: "July 2026",
    description: "An IEEE-formatted reflection paper titled \"A Student Reflection on the Foundations of Natural Language Processing: From Tokenization to Semantic Embeddings.\" It discusses what I learned in each stage of text analysis — tokenization, word counting and TF-IDF weighting, and vector models that capture meaning — along with my observations from the hands-on activity and how these fundamentals will support my future subjects, laboratory work, and capstone.",
    link: "works/IEEE-Reflection-Report-NLP.pdf",
    linkText: "View Report (PDF) →"
  },
  {
    tag: "Laboratory Exercise · WW-P2",
    title: "Introduction to NLP Module",
    date: "July 2026",
    description: "A hands-on module and lab exercise introducing the foundations of Natural Language Processing. It covered NLP goals and applications, tokenization and preprocessing (stemming vs. lemmatization, noise removal), statistical text analysis with TF-IDF and N-grams, semantic language models and word embeddings, and an interactive text analytics exercise, completed with a knowledge check and module completion proof.",
    link: "works/WW-P2-Introduction-to-NLP.pdf",
    linkText: "View Completion Proof (PDF) →"
  },
  {
    tag: "Written Work · WW-P1",
    title: "Creating My ePortfolio",
    date: "July 2026",
    description: "Designed and launched this ePortfolio as a workspace and record of my academic learning for ITC-C508. The design follows the course rubric criteria for navigation, usability and accessibility, writing conventions, and multimedia elements. The required Course Expectations section is posted on the landing page.",
    link: "index.html#expectations",
    linkText: "View Course Expectations →"
  }

  /* Example of a record with an uploaded file:
  ,{
    tag: "Laboratory Exercise · LE-1",
    title: "Title of the Exercise",
    date: "August 2026",
    description: "Short description of what this activity was about and what I did.",
    link: "works/my-file.pdf",
    linkText: "View File →"
  }
  */
];
