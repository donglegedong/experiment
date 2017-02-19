const React = require("react");
const JdShow = require("../../components/jdShow");
const ContentData = require("../../models/ContentData");

const jdPage = React.createClass({
    statics: {
        fetchData: function (callback) {
            var url = 'http://localhost:3000/api/jd/list';
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
            arr.push(<JdShow key={i} itemInfo={em} />);
        });
        return (
            <div className="main-body">
                { arr }
            </div>
        );
    }
});
module.exports = jdPage;