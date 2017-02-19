const React = require("react");

const qqShow = React.createClass({
    render: function() {
        const itemInfo = this.props.itemInfo;
        // console.log(itemInfo);
        return (
            <li className="np-post">
                <img src={itemInfo.userinfo.head} alt="头像" className="np-avatar" />
                <div className="np-post-body">
                    <div className="np-post-header">
                        <span>
                            <a href="javascript:void(0)" title={itemInfo.userinfo.nick} class="np-user">{itemInfo.userinfo.nick}</a>
                        </span>
                        <span className="np-time">{itemInfo.timeDifference}</span>
                    </div>
                    <div className="np-post-content">
                        <p>{ itemInfo.content }</p>
                    </div>
                    <div className="np-post-footer">
                        <a href="javascript:void(0)" className="np-btn np-btn-upvote">
                            (<em>{ itemInfo.up }</em>)
                        </a>
                        <a href="javascript:void(0)" className="np-btn np-btn-reply">回复</a>
                        <a href="javascript:void(0)" className="np-btn np-postlink">
                            <img src="http://mat1.gtimg.com/www/niuping2013/postframe/transparent.gif" alt="查看回复" />
                            查看回复({ itemInfo.rep })
                        </a>
                    </div>
                </div>
            </li>
        );
    }
});
module.exports = qqShow;