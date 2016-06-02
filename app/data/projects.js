var techs = {
  node: {name:'Node.js', link:'https://nodejs.org'},
  express: {name:'Express.js', link:'http://expressjs.com/'},
  commander: {name:'Commander.js', link:'https://www.npmjs.com/package/commander'},
  superagent: {name:'Superagent.js', link:'https://github.com/visionmedia/superagent'},
  co: {name:'Co.js', link:'https://github.com/tj/co'},
  angular: {name:'AngularJS', link:'https://angularjs.org/'},
  jquery: {name:'jQuery', link:'https://jquery.com/'},
  bootstrap: {name:'Bootstrap', link:'http://getbootstrap.com/'},
  gulp: {name:'Gulp.js', link:'http://gulpjs.com/'},
  webpack: {name:'Webpack', link:'https://webpack.github.io/'},
  html5: {name:'HTML5', link:'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'},
  css3: {name:'CSS3', link:'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'},
  page: {name:'Page.js', link:'https://visionmedia.github.io/page.js/'},
  handlebars: {name:'Handlebars.js', link:'http://handlebarsjs.com/'}
}

module.exports = {
  projects: [
    {
      id: 1,
      name: 'Code Fellows Package Manager and CLI',
      date: 'April 2016',
      tech: [
        techs.node,
        techs.express,
        techs.commander,
        techs.superagent,
        techs.co
      ],
      image: 'images/cfpm.gif',
      description: 'My classmate Joshua Haan and I did this project as the final for the "back-end" portion of Code 401 at Code Fellows. I wrote the command line interface (CLI) and Joshua wrote the API. My goal was to write an intuitive interface that gave clear responses everytime the user enters a command. On success, there are messages informing the user on what was executed, and if an error occures, the user gets a message describing the error and in most cases an example of a working command. I used Commander.js to set flags for specifying names and versions, a little bit of Co.js for input prompting, and Superagent.js for connecting to the API.',
      link: {
        page: 'https://www.npmjs.com/package/cfpm',
        github: 'https://github.com/setheid/cfpm-cli'
      }
    },
    {
      id: 2,
      name: 'Marvel Explorer',
      date: 'May 2016',
      tech: [
        techs.angular,
        techs.bootstrap,
        techs.gulp,
        techs.webpack,
        techs.html5,
        techs.css3
      ],
      image: 'images/marvelexplorer.jpg',
      description: 'For this project I teamed up with students from the Code 401 Python course at Code Fellows; they built out the back-end and my classmate, Alemneh Asefa, and I developed the front-end. I designed the overall layout of the site, choosing the Bootstrap theme we would work with and setting up the basic header, navigation bar, main body, and footer designs. My areas of focus were the home page, the sign in/up popup, and the "Find a Character" section. For the "Find a Character" section I wrote the logic for the questionnaire filter. I used AngularJS and jQuery for this project and bundled the JavaScript and CSS using Gulp.js and Webpack.',
      link: {
        page: 'marvelexplorer.s3-website-us-west-2.amazonaws.com',
        github: 'https://github.com/setheid/marvel-explorer'
      }
    },
    {
      id: 3,
      name: 'Dota Draft Assistant',
      date: 'February 2016',
      tech: [
        techs.page,
        techs.handlebars,
        techs.jquery,
        techs.html5,
        techs.css3
      ],
      image: 'images/dota_draft.jpg',
      description: 'I did this project in my time between the Code 301 and Code 401 courses as a logic exercise. The basic idea is that each hero does well against certain other heroes, poorly against others, and synergize with some. So, as you input heroes for the enemy team, counter picks get highlighted in red, and as you pick heroes for your team, synergistic heroes are highlighted in green. I used Page.js, Handlebars.js, and jQuery for this project.',
      link: {
        page: 'dotadraft.s3-website-us-west-2.amazonaws.com',
        github: 'https://github.com/setheid/dota-draft'
      }
    }
  ]
}
