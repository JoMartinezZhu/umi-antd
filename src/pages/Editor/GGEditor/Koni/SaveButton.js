import React from 'react';
import { Button } from 'antd';
import { withPropsAPI } from 'gg-editor';

class SaveButton extends React.Component {
  handleClick = () => {
    const { propsAPI } = this.props;
    propsAPI.save();
    console.log(propsAPI.save());
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

export default withPropsAPI(SaveButton);
