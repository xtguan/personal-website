import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props)
    this.state = { error: null, info: null }
  }

  static getDerivedStateFromError(error){
    return { error }
  }

  componentDidCatch(error, info){
    this.setState({ error, info })
    // Could also send to Sentry/logging here
    // console.error(error, info)
  }

  render(){
    if(this.state.error){
      return (
        <div style={{padding:24}}>
          <h2>Something went wrong</h2>
          <pre style={{whiteSpace:'pre-wrap',background:'#fff4f4',padding:12,borderRadius:6,color:'#7f1d1d'}}>{String(this.state.error)}</pre>
          {this.state.info && <details style={{marginTop:8}}><summary>Stack trace</summary><pre style={{whiteSpace:'pre-wrap'}}>{this.state.info.componentStack}</pre></details>}
        </div>
      )
    }
    return this.props.children
  }
}
