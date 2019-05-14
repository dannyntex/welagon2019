import React,{Fragment} from 'react'
import ResizeDetector from 'react-resize-detector';
import Navigation from 'src/components/Navigation';
import AppBarFooter from './../AppBarFooter'


const ShowBarMenu = (props) => {
  if (props.width > 768) {
    return null
  }
  return (
    <Fragment>
      <AppBarFooter />
      <Navigation />
    </Fragment>
  )
}
const GetSizePage = () => (
  <ResizeDetector
    handleWidth
    render={({ width }) => (
      < ShowBarMenu width={width}/>
    )
  }
    />
)
export default GetSizePage;
