
import universal, { setHasBabelPlugin } from '/Users/swyx/STAR/STAR/node_modules/react-static/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/pages/404.tsx'), universalOptions)
const t_1 = universal(import('../src/pages/about.tsx'), universalOptions)
const t_2 = universal(import('../src/pages/index.tsx'), universalOptions)


// Template Map
export default [
  t_0,
t_1,
t_2
]
