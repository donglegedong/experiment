
const React = require("react");
const ChildBox = require("./childBox");
const ContentData = require("../models/ContentData");

const productBox = React.createClass({
    statics: {
        fetchData: function (callback) {
            var url = 'http://localhost:3000/api/list';
            ContentData.fetch(url).then((data)=> {
                callback(data);
            });
        }
    },
    // 组件相关的状态对象
    getInitialState: function() {
        return {
            messageList: []
        };
    },
    getData: function() {
        const self = this;
        this.constructor.fetchData((data) => {
            const len = data.length;
            let i = 0,
                messageListArr = [];
            for(; i<len; i++) {
                messageListArr[i] = data[i].Message;
            }
            self.setState({messageList: messageListArr});
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
        const messages = this.props.messageList || this.state.messageList;
        const childList = this.props.childList;
        let arr = [];
        messages
        .forEach(function(em, i) {
            arr.push(<li key={i}> {em} </li>);
        });
        return (
            <div>
                <section className="pageContentInner">
                    <div className="head-section"><h1>MessageList: </h1></div>
                    <ul>
                        {arr}
                    </ul>
                </section>
                <ChildBox childList={ childList }/>
            </div>
        )
    }
});
module.exports = productBox;