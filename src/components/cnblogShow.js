const React = require("react");

const cnblogShow = React.createClass({
    render: function() {
        const itemInfo = this.props.itemInfo;
        // console.log(itemInfo);
        return (
            <div className="post-item">
                <div className="digg">
                    <div className="diggit">
                        <span className="diggnum">{ itemInfo.diggNum }</span>
                    </div>
                </div>
                <div className="post-item-body">
                    <h3>
                        <a href="javascript:void(0)" className="titlelnk">{ itemInfo.title }</a>
                    </h3>
                    <div className="post-item-summary">
                        <a href="javascript:void(0)">
                            <img src={itemInfo.img} />
                        </a>
                        <span>{itemInfo.content}</span>
                    </div>
                    <div className="post-item-foot">
                        <a href="javascript:void(0)" className="lightblue">{ itemInfo.userName }</a>
                        发布于<span>{ itemInfo.time }</span>
                        <span className="article-comment gray">评论({ itemInfo.commentNum })</span>
                        <span className="article-view gray">阅读({ itemInfo.viewNum })</span>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = cnblogShow;