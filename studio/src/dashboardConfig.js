export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eb9aa8ef5037a80a8cada7f',
                  title: 'Sanity Studio',
                  name: 'cxcguideblog-studio',
                  apiId: '205f49f0-f7c3-4257-ba53-4c0896109dd6'
                },
                {
                  buildHookId: '5eb9aa8ef30aa76f3915529e',
                  title: 'Blog Website',
                  name: 'cxcguideblog',
                  apiId: 'b03e7139-f35e-4784-8cbf-ea6f00f7ecea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamrxheem/cxcguideblog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cxcguideblog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
