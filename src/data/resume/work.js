/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Mutable Potential',
    position: 'Full Stack Developer / Technical Lead',
    url: 'https://mutablep.com/',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    summary: `
At Mutable Potential, I led the **system design and implementation** of [Cannabud](https://cannabud.ai/),
an Information System for the Medical Cannabis Industry. Cannabud encompasses critical
features like Inventory and Operations Management, and a full traceability module.
In addition to my primary role, I actively contributed to **detailed feature specification** and
helped **prioritizing the development roadmap**.

This experience demanded **extensive study** to address real-time challenges, enhancing my
skills in **translating complex data models into database schemas**, crafting intricate
queries, and strengthening **logical reasoning**. I also developed my ability to pitch our
business vision to fellow founders.
`,
  },
  {
    name: 'Pi R Quadrado',
    position: 'Student Tutor',
    url: 'https://www.pirquadrado.pt/',
    startDate: '2021-10-01',
    summary: `
As a CS student tutor, I invested **over 300 hours** guiding **50+ students** through
multiple Computer Science courses, including Programming Fundamentals, Object-Oriented
Programming, Data Science, Artificial Intelligence, and Databases.
Beyond aiding in projects and test preparation, I emphasized **cultivating a deep
understanding of the fundamentals**. This experience not only bolstered my grasp of
the subjects but also improved my ability to **convey complex concepts in simple terms**.`,
  },
  {
    name: 'Instituto Superior Técnico',
    position: 'Teaching Assistant',
    url: 'https://tecnico.ulisboa.pt/en/',
    startDate: '2021-10-01',
    endDate: '2022-06-30',
    summary: `

 * **October-December 2021**: Communication Skills in Computer Science and Engineering
 * **March - April 2022**: Introduction to Algorithms and Data Structures
 * **May - June 2022**: Artificial Intelligence

Responsible for leading practical lectures, guiding **~250 students** through hands-on
activities and projects that reinforced the concepts taught in each course.
In the CSCSE course, I also assumed the role of delivering a block of **theoretical lectures**
with 100+ students per lecture.

Throughout this experience, I actively engaged with students. This not only honed my
**communication skills** but also provided valuable insights into different learning styles.
My teaching performance, evaluated by students, earned me a **score of 9/10**,
culminating in the **Excellence in Teaching award**. This recognition underscores my commitment
to delivering quality education and has further fueled my passion for contributing to the
academic development of students.
    `,
  },
];

export default work;
