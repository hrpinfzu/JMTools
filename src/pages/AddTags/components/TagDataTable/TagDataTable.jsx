import React, { Component } from 'react';
import { Table, Button } from '@alifd/next';
import IceLabel from '@icedesign/label';

export default class TagDataTable extends Component {
  static displayName = 'TagDataTable';

  static defaultProps = {
    tagDatas: []
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  renderTagMemo = (value, index, record) => {
    return (
      <div>
        <IceLabel status="success">{record.tag}</IceLabel> 项目：<span style={styles.hotText}>{record.projectName}</span> 分支：<span style={styles.hotText}>{record.branch}</span> 消息：<span style={styles.hotText}>{record.message}</span> 发行说明：<span style={styles.hotText}>{record.publish}</span> <span style={styles.hotText}>{record.sourceBranch}=>{record.targetBranch}</span>
      </div>
    );
  };

  renderOper = (value, index, record) => {
    return (
      <div style={styles.oper}>
        <a href="javascript:;" >提交</a>
        <a href="javascript:;" onClick={this.handleDataDelete.bind(this, index)} style={{marginLeft: '10px'}}>删除</a>
      </div>
    );
  };

  handleDataClear = (e) => {
    this.props.tagDataDelete();
  }

  handleDataDelete = (index, e) => {
    this.props.tagDataDelete(index);
  }

  handleCheckChange = () => {

  }

  rowSelection = {
    onChange: this.handleCheckChange,
    getProps: (record) => {
      return {

      };
    }
  };

  render() {
    return (
      <div>
        <div style={styles.tableContainer}>
          <Table
            dataSource={this.props.tagDatas}
            hasBorder={false}
            isZebra={true}
            rowSelection={this.rowSelection}
            getCellProps={this.getCellProps}
            className="tagdata-table"
          >
            <Table.Column
              width={85}
              title="操作"
              cell={this.renderOper}
              lock="left"
              align="center"
            />
            <Table.Column width={200} title="项目" dataIndex="projectName" />
            <Table.Column
              width={700}
              title="提测"
              dataIndex="tagMemo"
              cell={this.renderTagMemo.bind(this)}
            />
          </Table>
        </div>
        <div style={styles.operation}>
          <Button type="primary">提交</Button>
          <Button warning style={styles.clearBtn} onClick={this.handleDataClear.bind(this)}>清空</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  operation: {
    paddingTop: '10px',
  },
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  clearBtn: {
    marginLeft: '20px',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  btns: {
    margin: '25px 0',
  },
  stateText: {
    color: '#28a745',
  },
  hotText: {
    color: '#00f',
  },
};
