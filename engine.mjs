import include from 'markdown-it-include'

const options = {
  includeRe: /#include(.+)/,
  bracesAreOptional: true,
}

export default ({ marp }) => marp.use(include, options)
