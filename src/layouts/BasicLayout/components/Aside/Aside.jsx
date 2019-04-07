/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import Logo from '../Logo';
import Notify from '../../../../components/Notify';
import { asideMenuConfig } from '../../../../menuConfig';

import './Aside.scss';


const { SubNav, Item } = Nav;
@withRouter
export default class BasicLayout extends Component {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    return (
      <div className="aside-custom-menu">
        <Logo
          style={{
            height: '62px',
            fontSize: '30px',
            marginRight: '0',
            background: '#fff',
            justifyContent: 'center',
            borderBottom: '1px solid #f5f5f5',
          }}
        />

        <Nav
          mode="inline"
          selectedKeys={[pathname]}
          className="ice-menu-custom"
          activeDirection="right"
          defaultOpenAll={true}
        >
          {Array.isArray(asideMenuConfig) &&
            asideMenuConfig.length > 0 &&
            asideMenuConfig.map((nav, index) => {
              if (nav.children && nav.children.length > 0) {
                return (
                  <SubNav
                    key={index}
                    label={
                      <span>
                        {nav.icon ? (
                          <FoundationSymbol size="small" type={nav.icon} />
                        ) : null}
                        <span className="ice-menu-collapse-hide">
                          {nav.name}
                        </span>
                      </span>
                    }
                  >
                    {nav.children.map((item) => {
                      const linkProps = {};
                      if (item.newWindow) {
                        linkProps.href = item.path;
                        linkProps.target = '_blank';
                      } else if (item.external) {
                        linkProps.href = item.path;
                      } else {
                        linkProps.to = item.path;
                      }
                      return (
                        <Item key={item.path}>
                          <Link {...linkProps}>{item.name}</Link>
                        </Item>
                      );
                    })}
                  </SubNav>
                );
              }
              const linkProps = {};
              if (nav.newWindow) {
                linkProps.href = nav.path;
                linkProps.target = '_blank';
              } else if (nav.external) {
                linkProps.href = nav.path;
              } else {
                linkProps.to = nav.path;
              }
              return (
                <Item key={nav.path}>
                  <Link {...linkProps}>
                    <span>
                      {nav.icon ? (
                        <FoundationSymbol size="small" type={nav.icon} />
                      ) : null}
                      <span className="ice-menu-collapse-hide">{nav.name}</span>
                    </span>
                  </Link>
                </Item>
              );
            })}
        </Nav>
      </div>
    );
  }
}
