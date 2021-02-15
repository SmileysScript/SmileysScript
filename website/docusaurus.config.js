module.exports = {
  title: 'SmileysScript Docs',
  tagline: 'The SmileysScript Docs',
  url: 'https://SmileysScript.JRed.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smileysscript', // Usually your GitHub org/user name.
  projectName: 'smileysscript', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SmileysScript',
      logo: {
        alt: 'SmileysScript Logo',
        src: 'img/Logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/languageReference',
          activeBasePath: 'docs/languageReference',
          label: 'Language Reference',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/SmileysScript/SmileysScript',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'JRed\'s Twitter',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'JRed\'s Youtube',
              href: 'https://www.youtube.com/channel/UC3cz0NQuXwIC7Bue6qmR8YA',
            },
            {
              label: 'JRed\'s Twitch',
              href: 'https://www.twitch.tv/jred_ow',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SmileysScript/SmileysScript',
            },
            {
              label: 'Privacy Policy',
              to: 'privacy',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.  Emoji Images From Twemoji.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SmileysScript/SmileysScript/edit/beta/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SmileysScript/SmileysScript/edit/beta/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    'js/matomo.js',
  ],
};
