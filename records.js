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
