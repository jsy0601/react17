import React from 'react'
import { Remarkable } from 'remarkable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.md = new Remarkable();   // import나 CDN 방식으로 가져오면 쓸 수 있다.(하지만 실행 동작 안 됨ㅋ)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: 'Hello, **world**!' }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) }
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    )
  }
}

export default App;
