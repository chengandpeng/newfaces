import React from 'react';
import Route from 'react-route';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});
