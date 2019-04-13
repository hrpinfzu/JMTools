import React, { Component } from 'react';
import AddTagForm from './components/AddTagForm';
import TagDataTable from './components/TagDataTable';

export default class AddTags extends Component {
  constructor() {
    super();
    this.state = {
      tagDatas: [],
    };
  }

  handleAddTag = (tag) => {
    let {tagDatas} = this.state;
    // 检查提交的数据是否重复（校验项目+标签名）
    for (var i in tagDatas) {
      const tagData = tagDatas[i];
      if (tag && tag.project === tagData.project && tag.tag === tagData.tag) {
        return false;
      }
    }
    tagDatas.push(tag);
    this.setState({
      tagDatas: tagDatas
    });

    return true;
  }

  handleTagDataDelete = (index = -1) => {
    let {tagDatas} = this.state;
    if (index >= 0) {
      tagDatas.splice(index, 1);
    } 
    else {
      tagDatas = [];
    }
    this.setState({
      tagDatas: tagDatas
    });
  }

  render() {
    return (
      <div className="add-tags-page">
        {/* 创建活动的表单 */}
        <AddTagForm addTag={this.handleAddTag}/>
        {/* 权限管理类的表格 */}
        <TagDataTable tagDatas={this.state.tagDatas} tagDataDelete={this.handleTagDataDelete}/>
      </div>
    );
  }
}
