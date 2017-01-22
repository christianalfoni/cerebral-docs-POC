import React from 'react'

function Doc (props) {
  return (
    <div className="docs-doc">
      <div className="docs-doc-content">
        {props.doc}
      </div>
    </div>
  )
}

export default Doc
