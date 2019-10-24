import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Koni } from 'gg-editor';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import uuid from 'react-uuid';

import EditorMinimap from '../components/EditorMinimap';
import { KoniContextMenu } from '../components/EditorContextMenu';
import { KoniToolbar } from '../components/EditorToolbar';
import { KoniItemPanel } from '../components/EditorItemPanel';
import { KoniDetailPanel } from '../components/EditorDetailPanel';
import KoniCustomNode from './shape/nodes/KoniCustomNode';
import styles from '../Flow/index.less';
import PureComponent from '@/components/PureComponent';
import SaveButton from './SaveButton';
import AddButton from './AddButton';
import AddEdges from './AddEdges';
GGEditor.setTrackable(false);

class KoniPage extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PageHeaderWrapper>
        <GGEditor className={styles.editor}>
          <Row type="flex">
            <Col span={4}>
              <AddButton text="添加节点" />
            </Col>
            <Col span={4}>
              <AddEdges text="添加边" />
            </Col>
            <Col span={4}>
              <SaveButton />
            </Col>
          </Row>
          <Row type="flex" className={styles.editorHd}>
            <Col span={20}>
              <KoniToolbar />
            </Col>
          </Row>

          <Row type="flex" className={styles.editorBd}>
            <Col span={4} className={styles.editorSidebar}>
              <KoniItemPanel />
            </Col>
            <Col span={16} className={styles.editorContent}>
              <Koni className={styles.koni} />
            </Col>
            <Col span={4} className={styles.editorSidebar}>
              <KoniDetailPanel />
              <EditorMinimap />
            </Col>
          </Row>
          <KoniCustomNode />
          <KoniContextMenu />
        </GGEditor>
      </PageHeaderWrapper>
    );
  }
}

export default KoniPage;
