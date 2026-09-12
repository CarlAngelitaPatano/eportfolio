/* ============================================================
   HOW TO ADD A NEW RECORD (no coding needed):
   1. Upload your file (PDF, image, etc.) into the "works" folder
      - Easiest way: click the "Upload Work File" button on the
        ITC-C508 page, drag your file in, and click "Commit changes"
   2. Copy one of the blocks below (from { to },) and paste it
      at the TOP of the list
   3. Change the tag, title, author, date, description, reflection, and link
   4. Save, then: git add .  ->  git commit -m "Add record"  ->  git push

   Fields:
   - tag         : category label (e.g. "Performance Task PT-M1")
   - title       : the work's title
   - author      : your name (shown in the caption for the rubric)
   - date        : month + year
   - description : what the work is (title/importance)
   - reflection  : what YOU learned - growth, goals, and self-critique
                   (rewrite this in your own words - it is graded)
   - link/link2/link3 + linkText... : file links
   ============================================================ */

const RECORDS = [
  {
    tag: "Midterm · Performance Task PT-M1",
    title: "Domain-Specific RAG Chatbot for Mandaluyong Tourism",
    author: "Carl Angelo Patano",
    date: "September 2026",
    description: "A Retrieval-Augmented Generation (RAG) chatbot built over a constructed municipal tourism corpus for Mandaluyong. The pipeline chunks three source documents into 37 passages, embeds them with all-MiniLM-L6-v2 into an in-memory ChromaDB, retrieves the three nearest passages per query, and generates grounded answers with a Groq-hosted LLM. A controlled hallucination stress-test raised temperature from 0 to 1.0 and removed the refusal clause while holding everything else constant. The study honestly reports a negative result — the model still refused all out-of-domain queries because a grounding constraint was conflated with the refusal clause — and proposes an ablation to separate them. Includes the IEEE report and the Colab notebook.",
    reflection: "Building this RAG pipeline showed me how retrieval, embeddings, and prompt design work together, and I grew most from debugging the parts that did not behave as the handout promised — the deprecated model, the loader, and the refusal clause. My biggest lesson was that a negative result is still a real finding: I learned to report what actually happened instead of what I expected. Short term, I want to run the ablation I proposed to properly separate the grounding constraint from the refusal clause. Long term, I want to build a full working municipal chatbot as part of my capstone. If I did it again, I would design the experiment to change only one variable at a time so the cause of each behavior is clearer.",
    link: "works/PTM1-IEEE-Report-RAG-Chatbot.pdf",
    linkText: "View IEEE Report (PDF) →",
    link2: "works/PTM1-RAG-Mandaluyong-Notebook.ipynb",
    linkText2: "View Notebook (IPYNB) →"
  },
  {
    tag: "Performance Task · PT-P2",
    title: "Neural Network Hyperparameter Tuning in Keras",
    author: "Carl Angelo Patano",
    date: "August 2026",
    description: "A controlled study reimplementing the PT-P1 intent classifier in TensorFlow/Keras with full control over the learning process. Seven training runs under a fixed random seed varied dataset size, hidden dimension, learning rate, dropout, weight decay, and training length. Dataset size proved decisive: expanding the corpus from 40 to 225 examples moved validation macro F1 from 0.095 to 0.939 and ROC-AUC from 0.33 to 0.999. The study diagnoses underfitting, overfitting, and regularization through loss-curve analysis, and honestly reports how the choice of evaluation set — random split vs. adversarial phrases — changes which model looks superior. Includes the IEEE report, the full training log, and the Colab notebook.",
    reflection: "This activity moved me from using a no-code tool to actually controlling how a neural network learns, and reading the loss curves taught me to tell underfitting and overfitting apart instead of just trusting the accuracy number. My biggest growth was learning to be honest about results: I found that the same model looked better or worse depending on which test set I used, and I chose to report that instead of hiding it. Short term, I want to get more comfortable choosing hyperparameters on purpose rather than by trial and error. Long term, I want to be confident training and evaluating models for real projects. Next time I would change only one setting per run so each comparison is clean.",
    link: "works/PTP2-IEEE-Report-Keras-Tuning.pdf",
    linkText: "View IEEE Report (PDF) →",
    link2: "works/PTP2-FFBP-Training-Log.xlsx",
    linkText2: "View Training Log (XLSX) →",
    link3: "works/PTP2-Neural-Network-Training-Testing.ipynb",
    linkText3: "View Notebook (IPYNB) →"
  },
  {
    tag: "Performance Task · PT-P1",
    title: "No-Code Neural Network Text Classification",
    author: "Carl Angelo Patano",
    date: "July 2026",
    description: "A controlled experiment building a no-code neural text classifier on the Machine Learning for Kids platform to sort telecom support messages into three intents: Positive Praise, Negative Complaint, and Urgent Support. Three models were trained on the same held-out test set. Accuracy rose from 63.64% (baseline) to 72.73% (doubled data) to 90.91% (failure-targeted examples), showing that how well the data represents real input matters more than sheer dataset size. Includes a full IEEE report and a spreadsheet with per-run accuracy, precision, recall, F1, and confusion matrices.",
    reflection: "This was my first hands-on look at how a machine learning model actually learns from examples, and it changed how I think about training data. I grew the most when I saw that simply adding more data barely helped, but adding examples that targeted the model's specific failures (like sarcasm and negation) raised the accuracy a lot. Short term, my goal is to learn how to spot which failures matter most so I can fix them efficiently. Long term, I want to apply this to real feedback data, like the reviews in my Be@Mandaluyong app. Looking back, the model still struggled with sarcasm, so next time I would collect more varied sarcastic examples to test that weakness harder.",
    link: "works/PTP1-IEEE-Report-Text-Classification.pdf",
    linkText: "View IEEE Report (PDF) →",
    link2: "works/PTP1-Performance-Computations.xlsx",
    linkText2: "View Computations (XLSX) →"
  },
  {
    tag: "Written Work · WW-P2",
    title: "IEEE-Formatted Reflection Report on NLP",
    author: "Carl Angelo Patano",
    date: "July 2026",
    description: "An IEEE-formatted reflection paper titled \"A Student Reflection on the Foundations of Natural Language Processing: From Tokenization to Semantic Embeddings.\" It discusses what I learned in each stage of text analysis — tokenization, word counting and TF-IDF weighting, and vector models that capture meaning — along with my observations from the hands-on activity and how these fundamentals will support my future subjects, laboratory work, and capstone.",
    reflection: "Writing this report pushed me to explain NLP ideas in my own words, which showed me how much I really understood versus just recognized. I grew by connecting each stage — tokenization, TF-IDF, and embeddings — into one clear pipeline instead of separate terms. It also gave me practice writing in the IEEE academic format, which was new to me. Short term, I want to improve at technical writing and citing sources properly. Long term, I want to be able to write a clear research paper for my capstone. If I revised it, I would add more concrete examples from the activity to support my points.",
    link: "works/IEEE-Reflection-Report-NLP.pdf",
    linkText: "View Report (PDF) →"
  },
  {
    tag: "Laboratory Exercise · WW-P2",
    title: "Introduction to NLP Module",
    author: "Carl Angelo Patano",
    date: "July 2026",
    description: "A hands-on module and lab exercise introducing the foundations of Natural Language Processing. It covered NLP goals and applications, tokenization and preprocessing (stemming vs. lemmatization, noise removal), statistical text analysis with TF-IDF and N-grams, semantic language models and word embeddings, and an interactive text analytics exercise, completed with a knowledge check and module completion proof.",
    reflection: "Going through this module gave me the vocabulary and basic skills I needed before the harder performance tasks, so it built my confidence. I grew by actually seeing how raw text is cleaned and turned into numbers a computer can use, which used to be a mystery to me. The interactive exercises helped the ideas stick more than just reading would have. Short term, my goal is to practice these preprocessing steps in code on my own. Long term, I want to use them as the foundation for building real NLP features. Next time I would take more notes during each unit so I can review the concepts faster later.",
    link: "works/WW-P2-Introduction-to-NLP.pdf",
    linkText: "View Completion Proof (PDF) →"
  },
  {
    tag: "Written Work · WW-P1",
    title: "Creating My ePortfolio",
    author: "Carl Angelo Patano",
    date: "July 2026",
    description: "Designed and launched this ePortfolio as a workspace and record of my academic learning for ITC-C508. The design follows the course rubric criteria for navigation, usability and accessibility, writing conventions, and multimedia elements. The required Course Expectations section is posted on the landing page.",
    reflection: "Creating this ePortfolio taught me real web development and deployment skills — building the pages with HTML, CSS, and JavaScript, pushing to GitHub, and hosting on Vercel. I grew a lot from solving the problems along the way, like fixing broken deployments and keeping the design accessible and readable. It also made me more organized because now all my work has one clear home. Short term, I want to keep every new activity posted here neatly and on time. Long term, I want to grow this into a professional portfolio I can show employers after graduation. If I improved it, I would add more visuals and a short summary of my skills at the top of each project.",
    link: "index.html#expectations",
    linkText: "View Course Expectations →"
  }
];
