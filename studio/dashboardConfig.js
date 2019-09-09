export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d76d105e410f51bb1c581ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gfrwxkj6',
                  apiId: '16b66d8b-780b-4bd0-8197-930a9cceca32'
                },
                {
                  buildHookId: '5d76d10550223b27224df1dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zmsj8zhq',
                  apiId: '2e11800e-1f3a-4d9a-b7b6-0278b7fbd719'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Biip/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zmsj8zhq.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
