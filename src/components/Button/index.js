import React from 'react';

export default const Button = () => (
  <button style={styles.homeButton}>
    {children}
  </button>
);

const styles = StyleSheet.create({
  homeButton: {
    width: '100%',
    backgroundColor: '#aaa',
    color: '#000000'
  },
});
