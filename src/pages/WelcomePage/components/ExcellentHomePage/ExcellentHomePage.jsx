import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@alifd/next';
import './ExcellentHomePage.scss';

export default class ExcellentHomePage extends Component {
  static displayName = 'ExcellentHomePage';

  render() {
    return (
      <div className="excellent-home-page" style={{ height: '100vh' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundImage: `url(${require('./images/TB1oJNKsFOWBuNjy0FiXXXFxVXa-1900-1010.svg')})`,
            backgroundPosition: 'center',
          }}
        />

        <div className="excellent-home-page-background" />
        <div className="excellent-home-page-content-wrapper">
          <div className="excellent-home-page-content">
            <h2 className="title">JMTools</h2>
            <p className="subtitle">
              解放生产力，拒绝妥协
            </p>
            <div
              className="excellent-home-page-buttons"
              style={{ textAlign: 'center', marginTop: 70 }}
            >
              <Link to="/gitlab/addtags">
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 16,
                    marginBottom: '20px',
                    background: '#00CE72',
                  }}
                  type="primary"
                  size="large"
                >
                  即刻使用
                  <div
                    style={{
                      marginLeft: '5px',
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRight: '1px solid #fff',
                      borderBottom: '1px solid #fff',
                      transform: 'rotate(-45deg)',
                    }}
                  />
                </Button>
              </Link>
            </div>

            <div style={{ marginTop: '80px', position: 'relative' }}>
              <div style={styles.gitContainer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  leftButton: {
    marginRight: '20px',
  },
  gitStar: {
    border: '0px',
    height: '32px',
    width: '145px',
    margin: '0 auto',
  },
  gitContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  updateLogLinkWrap: {
    textAlign: 'center',
  },
  updateLogLink: {
    color: '#fff',
  },
};
