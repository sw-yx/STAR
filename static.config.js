import axios from 'axios'
import path from 'path'
// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

import jdown from 'jdown'
import chokidar from 'chokidar'
import { reloadRoutes } from 'react-static/node'
chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  plugins: ['react-static-plugin-typescript'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'React Static',
  }),
  paths: {
    // src: 'src', // The source directory. Must include an index.js entry file.
    // temp: 'tmp', // Temp output directory for build files not to be published.
    // dist: 'docs', // The production output directory.
    // devDist: 'tmp/dev-server', // The development scratch directory.
    // public: 'public', // The public directory (files copied to dist during build)
    // assets: 'docs', // The output directory for bundled JS and CSS
  },
  // siteRoot: 'https://starframework.github.io',
  // basePath: 'STAR',
  // getRoutes: async () => {
  //   const props = await jdown('content')
  //   const { articles } = props
  //   return [
  //     {
  //       path: '/',
  //       getData: () => ({ articles }),
  //     },
  //     // {
  //     //   path: '/articles',
  //     //   getData: () => ({
  //     //     articles,
  //     //   }),
  //     //   // children: posts.slice(1, 3).map(post => ({
  //     //   //   path: `/post/${post.id}`,
  //     //   //   component: 'src/containers/Post',
  //     //   //   getData: () => ({
  //     //   //     post,
  //     //   //   }),
  //     //   // })),
  //     // },
  //   ]
  // },
}
