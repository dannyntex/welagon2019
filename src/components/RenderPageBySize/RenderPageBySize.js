import React,{Fragment} from 'react'
import ResizeDetector from 'react-resize-detector';

const RenderItemBySize = (props) => {
  if (props.width > 768) {
    return null
  }
  return (props.getChildren)
}

const RenderPageBySize = (props) => (
  <ResizeDetector handleWidth >
    <RenderItemBySize getChildren={props.children}/>
  </ResizeDetector>
)
export default RenderPageBySize;
