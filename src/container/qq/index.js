const React = require("react");
const QqShow = require("../../components/qqShow");
const ContentData = require("../../models/ContentData");

const cnblogPage = React.createClass({
    statics: {
        fetchData: function (callback) {
            var url = 'http://localhost:3000/api/qq/list';
            ContentData.fetch(url).then((data)=> {
                callback(data);
            });
        }
    },
    // 组件相关的状态对象
    getInitialState: function() {
        return {
            showList: []
        };
    },
    getData: function() {
        const self = this;
        this.constructor.fetchData((data) => {
            const waresPagedList = data.waresPagedList;
            // console.log(waresPagedList);
            self.setState({showList: waresPagedList});
        });
    },
    componentDidMount: function() {
        this.getData();     
    },
    render: function() {
        const showList = this.props.showList || this.state.showList;
        let arr = [];
        showList.forEach(function(em,i){
            arr.push(<QqShow key={i} itemInfo={em} />);
        });
        return (
            <ul>
                <li className="np-title-hot">热门评论</li>
                { arr }
            </ul>
        );
    }
});
module.exports = cnblogPage;