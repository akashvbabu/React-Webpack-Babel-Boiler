/**
 * Created by Akash on 1/23/2016.
 */
/* var React = require('react');

module.exports = React.createClass({
   displayName: 'Hello React',

    render: function(){
        return(
            <div>
                Hello React
                </div>
        );
    }
}); */

import React from 'react';

module.exports = class Hello extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                Hello React
            </div>
        );
    }
}