const React = require("react");
const CnblogShow = require("../../components/cnblogShow");
const ContentData = require("../../models/ContentData");

const cnblogPage = React.createClass({
    statics: {
        fetchData: function (callback) {
            var url = 'http://localhost:3000/api/cnblog/list';
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
            arr.push(<CnblogShow key={i} itemInfo={em} />);
        });
        return (
            <div className="post-list">
                { arr }
            </div>
        );
    }
});
module.exports = cnblogPage;