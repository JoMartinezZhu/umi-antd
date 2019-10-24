import React from 'react';
import { message, Button } from 'antd';
import { withPropsAPI } from 'gg-editor';
import uuid from 'react-uuid';

function get2DiffRandom(n) {
  let arr = [];
  let i = 0;
  if (!isNaN(n)) {
    while (i < 2) {
      let number = Math.floor(Math.random() * 10);
      if (number < n && arr.indexOf(number) < 0) {
        arr.push(number);
        i++;
      }
    }
  }
  return arr;
}

class AddEdges extends React.Component {
  handleClick = () => {
    const { propsAPI } = this.props;

    const existData = propsAPI.save();
    const { nodes: existNodes = [] } = existData;
    const nodesCount = existNodes.length;
    if (nodesCount > 1) {
      const diffRandom = get2DiffRandom(nodesCount);
      const sourceNode = existNodes[diffRandom[0]];
      const targetNode = existNodes[diffRandom[1]];
      const source = sourceNode.id;
      const target = targetNode.id;
      propsAPI.add('edge', {
        id: uuid(),
        label: '',
        shape: 'flow-smooth',
        source,
        target,
      });
      propsAPI.executeCommand('autoZoom');
    } else {
      message.warning('当前节点数不够添加边！');
    }
  };

  render() {
    const { text = '添加' } = this.props;

    return (
      <div style={{ padding: 8 }}>
        <Button onClick={this.handleClick}>{text}</Button>
      </div>
    );
  }
}

export default withPropsAPI(AddEdges);
