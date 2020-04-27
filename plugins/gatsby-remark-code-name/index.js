"use strict"
const visit = require("unist-util-visit")

module.exports = ({ markdownAST }) => {
  // copy children to prevent infinity roop when splice node
  const children = [...markdownAST.children]
  let insertCount = 0
  visit(markdownAST, "code", (node, index) => {
    const { lang } = node
    if (!lang) return
    const [name, extension] = lang.split(".")
    const title = name && extension ? lang : null
    if (title) {
      const className = "gatsby-remark-code-name"
      const titleNode = {
        type: "html",
        value: `
          <div class=${className}>
            <span>${title}</span>
          </div>
        `.trim(),
      }
      children.splice(index + insertCount, 0, titleNode)
      insertCount += 1
    }
    node.lang = extension || name
  })
  markdownAST.children = children
  return markdownAST
}
