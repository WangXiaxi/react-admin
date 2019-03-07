/**
 * Created by wangxiaoxing on 2019/3/7
 */
import React from 'react'
import img from 'assets/images/404.png'


class Error404 extends React.Component {
  state = {
    animated: ''
  };
  enter = () => {
    this.setState({ animated: 'hinge' })
    setTimeout(() => {
      this.setState({ animated: '' })
    }, 4000)
  };
  render() {
    return (
      <div className="center" style={styles.center}>
        <img src={img} alt="404" className={`animated ${this.state.animated}`} onMouseEnter={this.enter} />
      </div>
    )
  }
}

const styles = {
  center: {
    height: '100vh',
    background: '#ececec',
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: '80vh'
  }
}
export default Error404