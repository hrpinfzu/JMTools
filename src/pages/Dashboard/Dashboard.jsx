import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import PageHead from '../../components/PageHead';
import NotFound from '../../components/NotFound'

const { Row, Col } = Grid;

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <PageHead title="工作台" />
        <NotFound />
      </div>
    );
  }
}
