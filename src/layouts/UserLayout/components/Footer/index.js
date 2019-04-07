import React from 'react';

export default () => {
  return (
    <div style={styles.footer}>
      <div style={styles.copyright}><a
              href="http://www.jackyun.com"
              target="_blank"
              className="copyright-link"
              rel="noopener noreferrer"
            >
            吉客云
            </a>
            © 2019 版权所有
      </div>
    </div>
  );
};

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '20px',
  },
  links: {
    marginBottom: '8px',
  },
  link: {
    fontSize: '13px',
    marginRight: '40px',
    color: '#fff',
  },
  copyright: {
    fontSize: '13px',
    color: '#fff',
    lineHeight: 1.5,
    textAlign: 'right',
  },
};
