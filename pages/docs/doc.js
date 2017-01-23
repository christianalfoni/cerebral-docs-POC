import React from 'react'

function Doc (props) {
  return (
    <div className="docs-doc">
      <div className="docs-doc-edit">
        <a href={`https://github.com/christianalfoni/cerebral-docs-POC/edit/master/docs/${props.docName}.md`} target="_new">Edit on Github</a>
      </div>
      <div className="docs-doc-content">
        {props.doc}
      </div>
    </div>
  )
}

export default Doc
