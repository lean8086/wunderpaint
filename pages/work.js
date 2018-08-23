import { Component } from 'react';
import { workReference } from '../firebase';
import App from '../containers/App';

const Work = ({ preloadedData }) => (
  <App preloadedData={preloadedData} />
);

Work.getInitialProps = async ({ query }) => {
  let preloadedData = {};
  await workReference(query.id).once('value')
    .then(snapshot => preloadedData = snapshot.val());
  return { preloadedData };
};

export default Work;
