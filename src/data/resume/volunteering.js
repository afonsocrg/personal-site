/**
 * @typedef {Object} Volunteering
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} organization - Name of the organization
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */

const volunteering = [
  {
    organization: 'Just a Change',
    position: 'Volunteer',
    url: 'https://justachange.pt/en/',
    startDate: '2020-06-01',
    summary: `
The motto is “Renovating homes, Rebuilding lives”.
By improving the living conditions in several homes, we aim to bring joy,
hope and charity to the people that live there.
I actively participated in the rehabilitation of 5 houses, dedicating
**over 300 hours** to construction efforts.
In the last 3 projects, I took on the role of team lead, overseeing 5-10
volunteers and coordinating tasks over a two-week period.
Additionally, I ensured a seamless flow of materials for our ongoing work.
This experience significantly honed my skills in **team and operation management**.`,
  },
  {
    organization: 'Movimento Claro',
    position: 'Diver',
    url: 'https://movimentoclaro.org/en/',
    startDate: '2022-04-01',
    summary: `
In this volunteering project our goal is to remove debris from
under the sea. We have two teams: The divers collect the trash
from underwater, which is handed over to paddlers responsible for
transporting it to the collection area.
I participate as a diver, and helped removing **over 5000 Kg of debris**
from the Cascais bay.
This project strengthened my **communication and teamwork** skills.`,
  },
  {
    organization: 'Maré Viva',
    position: 'Volunteer',
    url: 'https://jovem.cascais.pt/en/node/442',
    startDate: '2015-06-01',
    endDate: '2019-08-31',
    summary: `
At Maré Viva, we enhanced the vacation experience for thousands by
maintaining the cleanliness of county beaches, offering helpful information
to tourists, and providing first aid when needed.
Over three summers, I **led a team of 8-15 volunteers**, coordinating their
daily tasks. This hands-on role significantly refined my
**communication and team management** skills.`,
  },
];

export default volunteering;
