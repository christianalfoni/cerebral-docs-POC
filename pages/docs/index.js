import React from 'react'
import Navigation from './navigation'
import TOC from './toc'
import Doc from './doc'

function Docs (props) {
  const doc = props.docs[props.sectionName][props.docName]

  return (
    <div className="docs-container">
      <Navigation docs={props.docs} />
      <div className="docs-content">
        <TOC toc={doc.toc} />
        <Doc doc={doc.tree} />
      </div>
    </div>
  )
}

export default Docs
