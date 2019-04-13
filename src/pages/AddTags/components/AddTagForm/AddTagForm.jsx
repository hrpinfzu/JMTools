import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Select,
  Icon,
  Form,
  Message,
} from '@alifd/next';
import axios from 'axios';
import { isNumber } from 'util';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: "6", s: "2", l: "2", },
  wrapperCol: { s: "12", l: "10", }
};

let timestamp = Date.now();

const gitlabHost = 'http://192.168.88.224:8081';
const privateToken = 'zdtv8eVH5zSL6jnq_6wb';

export default class AddTagForm extends Component {
  static displayName = 'AddTagForm';

  static defaultProps = {};

  state = {
    dsProjects: [],
    dsBranches: []
  }

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      project: 'test',
      projectName: 'test',
      branch: 'test',
      tag: 'test',
      message: 'message',
      publish: 'publish',
      tagMerge: 0,
      sourceBranch: 'source',
      targetBranch: 'target',
    };
    this.projectSearch();
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = () => {
    this.setState({
      project: '',
      projectName: '',
      branch: '',
      tag: '',
      message: '',
      publish: '',
      tagMerge: 0,
      sourceBranch: '',
      targetBranch: '',
      dsBranches: [],
    });
  };

  submit = (value, error) => {
    if (error) {
      Message.error('请填写完整后添加');
      return;
    }
    
    // 拼装表格展示的字段内容
    value = this.state;
    value.id = `${this.state.project}_${this.state.tag}`;
    value.tagMemo = `${this.state.tag} 项目：${this.state.project} 分支：${this.state.branch} 消息：${this.state.message} 发行说明：${this.state.publish}`;
    // 提交当前填写的数据
    if (this.props.addTag) {
      if (!this.props.addTag(this.state)) {
        Message.error('请勿重复添加');
      }
    }
  };

  projectSearch = (value) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      let getProjectUrl = `${gitlabHost}/api/v4/projects?private_token=${privateToken}&simple=true`;
      if (value && value !== '') {
        getProjectUrl = `${getProjectUrl}&search=${value}`
      }
      
      axios(getProjectUrl).then((response) => {
        const { data } = response;
        const dataSource = data.map(item => {
          return {
            label: item.name,
            value: item.id
          }
        });
        this.setState({ dsProjects: dataSource });
      })
    }, 100);
  };

  projectChange = (value, actionType, item) => {
    this.setState({
      project: value,
      projectName: item.label,
      branch: '',
      tag: ''
    });

    this.setState({
      dsBranches: []
    });

    if (value !== '') {
      this.loadProjectBranches(value);
    }
  };

  branchChange = (value) => {
    this.setState({
      branch: value
    });
  };

  tagChange = (value) => {
    this.setState({
      tag: value
    });
  };

  loadProjectBranches = (value) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      if (value && isNumber(value) && value > 0) {
        axios(`${gitlabHost}/api/v4/projects/${value}/repository/branches?private_token=${privateToken}&per_page=20&_=${timestamp}`).then((response) => {
          const { data } = response;
          const dataSource = data.map(item => item.name);
          this.setState({ dsBranches: dataSource });
        })
      }
      else {
        this.setState({ dsBranches: [] });
      }
    }, 100);
  }

  render() {
    return (
      <div className="create-activity-form">
        <IceContainer title="" style={styles.container}>
          <Form
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <FormItem {...formItemLayout} label="项目："
              required
              requiredMessage="请选择项目"
            >
              <Select placeholder="选择需要打签的项目" showSearch hasArrow={false} hasClear name='project' filterLocal={false} dataSource={this.state.dsProjects} value={this.state.project} onChange={this.projectChange.bind(this)} onSearch={this.projectSearch} style={{ width: 300 }} />
            </FormItem>

            <FormItem {...formItemLayout} label="分支："
              required
              requiredMessage="请选择对应分支"
            >
              <Select placeholder="选择需要打签的分支" showSearch hasArrow={false} hasClear name='branch' filterLocal={true} dataSource={this.state.dsBranches} value={this.state.branch} onChange={this.branchChange} style={{ width: 300 }} />
            </FormItem>

            <FormItem {...formItemLayout} label="标签："
              required
              requiredMessage="请输入标签"
            >
              <Input placeholder="请输入标签或点击推荐" name="tag" value={this.state.tag} onChange={this.tagChange} style={{ width: 300 }} />
              &nbsp;&nbsp;
              <Button type="secondary" size="small"><Icon type="arrow-double-left" />获取推荐</Button>
            </FormItem>

            <FormItem {...formItemLayout} label="消息：">
              <Input placeholder="示例：售后模块提测" name="message" style={{ width: 300 }}/>
            </FormItem>

            <FormItem {...formItemLayout} label="发布说明：">
              <Input placeholder="示例：1、xxx新特性；2、修复xxx问题" name="publish" style={{ width: 300 }} />
            </FormItem>

            <FormItem {...formItemLayout} label=" ">
              <Form.Submit type="secondary" validate onClick={this.submit}>
                添加
                  </Form.Submit>
              <Form.Reset style={styles.resetBtn} onClick={this.reset}>
                重置
                  </Form.Reset>
            </FormItem>
          </Form>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};
