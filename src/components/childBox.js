
const React = require("react");

const ContentData = require("../models/ContentData");

const childBox = React.createClass({
    statics: {
        fetchData: function (callback) {
            var url = 'http://localhost:3000/api/childList';
            ContentData.fetch(url).then((data)=> {
                callback(data);
            });
        }
    },
    // 组件相关的状态对象
    getInitialState: function() {
        return {
            childList: []
        };
    },
    getData: function() {
        const self = this;
        this.constructor.fetchData((data) => {
            const len = data.length;
            let i = 0,
                childListArr = [];
            for(; i<len; i++) {
                childListArr[i] = data[i].Message;
            }
            self.setState({childList: childListArr});
            // self.setProps({
            //     messageList: messageListArr
            // });
        });
    },
    /*shouldComponentUpdate: function(nextProps, nextState) {
        console.log('preProps:',this.props);
        console.log('nextProps:',nextProps);
        console.log('preState:',this.State);
        console.log('nextState:',nextState);
        return false;
    },*/
    componentDidMount: function() {
        this.getData();     
    },
    render: function() {
        const self = this;
        const messages = this.props.childList || this.state.childList;
        let arr = [];
        console.log('childList:', messages);
        messages
        .forEach(function(em, i) {
            arr.push(<li key={i}> {em} </li>);
        });
        return (
            <div className="pageContentInner">
                <div className="head-section"><h1>ChildList: </h1></div>
                <ul>
                    {arr}
                </ul>
            </div>
        )
    }
});
module.exports = childBox;