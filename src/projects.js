import CommunityCanvas from './images/community-canvas.png'
import CreativeCorner from './images/creative-corner-in-progress.png'
import TechBlog from './images/tech-blog.png'
import Weather from './images/weather-dash.png'
import Bucket from './images/screencap.jpg'
import Notes from './images/note-taker.gif'
const projects = [
{
    title: 'Bucket',
    description: 'A full stack MERN social app to connect adventurous bucket list go-getters together',
    preview: Bucket,
    tech: ['Express/Apollo', 'Mongo/Mongooge', 'GraphQl', 'Cloudinary', 'React', 'Material-Ui', 'MapBox', 'JavaScript/Node'],
    link: 'https://buucket.herokuapp.com/',
    repo: 'https://github.com/KIMBERLYSEDDON/project-bucket'  
    
},
{
    title: 'Community Canvas',
    description: 'A place for users to share and view street art found in their communities.',
    preview: CommunityCanvas,
    tech: ['node.js', 'Handlebars.js', 'Express.js', 'mySQL', 'Cloudinary'],
    link: 'https://community-canvas-2.herokuapp.com/',
    repo: 'https://github.com/KIMBERLYSEDDON/community-canvas'
},
{
    title: 'Creative Corner',
    description: 'A frontend app meant to inspire artists during a creative block',
    preview: CreativeCorner,
    tech: ['MET api', 'Quotes api', 'JavaScript'],
    link: 'https://kimberlyseddon.github.io/creative-corner/',
    repo: 'https://github.com/KIMBERLYSEDDON/creative-corner'  

},
{
    title: 'Tech Blog',
    description: 'A fun blog for tech lovers to post and comment about tech',
    preview: TechBlog,
    tech: ['handlebars.js', 'JavaScript', 'Express.js', 'MySQL'],
    link: 'https://tech-obsessed.herokuapp.com/',
    repo: 'https://github.com/KIMBERLYSEDDON/tech-blog'  

},
{
    title: 'Weather Dashboard',
    description: 'For weather and forecast of cities for travellers',
    preview: Weather,
    tech: ['Local Storage', 'JavaScript', 'Moment.js', 'Open Weather API'],
    link: 'https://kimberlyseddon.github.io/weather-dashboard/',
    repo: 'https://github.com/KIMBERLYSEDDON/weather-dashboard'  

},
{
    title: 'Note Taker',
    description: 'An easy to use digital notepad to help keep track of daily tasks',
    preview: Notes,
    tech: ['Express.js', 'Node.js', 'Sequelize'],
    link: 'https://express-note-taker5.herokuapp.com/notes',
    repo: 'https://github.com/KIMBERLYSEDDON/note-taker-express'  

}]

export default projects