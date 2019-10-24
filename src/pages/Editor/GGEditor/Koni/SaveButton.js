import React from 'react';
import { Button } from 'antd';
import { withPropsAPI } from 'gg-editor';

class Save extends React.Component {
  handleClick = () => {
    const { propsAPI } = this.props;
    const koniData = propsAPI.save();
    console.log('koniData', JSON.stringify(koniData));
  };

  render() {
    const { text = '保存' } = this.props;
    return (
      <div style={{ padding: 8 }}>
        <Button onClick={this.handleClick}>{text}</Button>
      </div>
    );
  }
}

export default withPropsAPI(Save);
