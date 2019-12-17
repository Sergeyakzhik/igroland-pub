import React, { Component } from 'react';

const withDataListHOC = (WrappedComponent, type) => {

    return class extends Component {

        state = {
            data: {}
        };
    
        handleDragEnd = result => {
            const { data } = this.state;
    
            if (!result.destination) {
                return;
            } else {
                const list = [ ...data.dataKeys ];
                const startIndex = result.source.index;
                const endIndex = result.destination.index; 
                const [removed] = list.splice(startIndex, 1);
    
                list.splice(endIndex, 0, removed);
    
                this.setState({ data: { ...data, dataKeys: list } });
            }
        };
    
        deletePost = id => {
            const { data } = this.state;
            const newData = { ...data };
    
            delete newData.data[id];
            newData.dataKeys.splice(newData.dataKeys.indexOf(id), 1);
    
            localStorage.setItem(type, JSON.stringify(newData));
            this.setState({ data: newData });
        };
    
        render() {
            const { data } = this.state;
    
            return (
                <WrappedComponent 
                    data={data} 
                    handleDragEnd={this.handleDragEnd} 
                    handleDelete={this.deletePost} 
                />
            );
        };
    }
};

export default withDataListHOC;

