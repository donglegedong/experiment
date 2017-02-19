const React = require("react");

const jdShow = React.createClass({
    render: function() {
        const itemInfo = this.props.itemInfo;
        // console.log(itemInfo);
        return (
            <div className="main-wrap">
                <a href="#" className="link">
                    <div className="pd-pic">
                        <img data-src={itemInfo.image} src="http://m.360buyimg.com/cms/jfs/t2218/111/2490744834/43/9acceab1/56d55ce6N5a567661.gif" alt="示例图片" />
                    </div>
                    <div className="pd-info">
                        <div className="pd-title">{ itemInfo.name }</div>
                        <div className="pd-wrap">
                            <div className="pd-price-wrap">
                                <div className="pd-now-price">{ itemInfo.pPrice }</div>
                                <div className="pd-old-price">
                                    <span className="replace-price">{ itemInfo.promotionTag }</span>
                                </div>
                            </div>
                            <div className="pd-buy-car">
                                <span className="icon-wrap"></span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
});
module.exports = jdShow;