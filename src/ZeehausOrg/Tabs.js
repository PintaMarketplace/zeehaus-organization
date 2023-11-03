import MobileDetect from "mobile-detect";
import React, { Component } from "react";
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeIndex || 0,
    };
  }

  activateTab(e, index, onActive) {
    if (this.props.onIndexChange) this.props.onIndexChange(index);
    this.setState({ activeTab: index }, () => {
      if (onActive) onActive(e);
    });
  }
  componentWillReceiveProps(np) {
    if (np.activeIndex !== this.props.activeIndex) {
      this.activateTab(null, np.activeIndex);
    }
  }
  componentDidMount() {
    let children = this.props.children;
    if (children && !children.length) children = [children];
    let exploded = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i] && children[i].length) {
        for (let j = 0; j < children[i].length; j++) {
          exploded.push(children[i][j]);
        }
      } else if (children[i]) {
        exploded.push(children[i]);
      }
    }
    if (exploded[0] && exploded[0].props.onActive) exploded[0].props.onActive();
    this.manageButton();
  }

  manageButton() {
    let scrollableHeight =
      this.tabContainer.scrollWidth -
      this.tabContainer.getBoundingClientRect().width;
    if (scrollableHeight) {
      if (this.tabContainer.scrollLeft > 0) {
        this.setState({
          showLeft: true,
        });
      }
      if (this.tabContainer.scrollLeft === 0) {
        this.setState({
          showLeft: false,
          showRight: true,
        });
      }
      if (this.tabContainer.scrollLeft === scrollableHeight) {
        this.setState({
          showLeft: true,
          showRight: false,
        });
      }
    }
  }
  scroll(dir) {
    let offsetConstant = 100;
    let scrollableHeight =
      this.tabContainer.scrollWidth -
      this.tabContainer.getBoundingClientRect().width;
    let scrollableOffset = scrollableHeight - this.tabContainer.scrollLeft;
    if (dir === "right") {
      let scrollBy =
        scrollableOffset < offsetConstant ? scrollableOffset : offsetConstant;
      this.tabContainer.scrollBy(scrollBy, 0);
    }
    if (dir === "left") {
      let scrollBy =
        scrollableOffset === 0
          ? offsetConstant
          : scrollableOffset < offsetConstant
          ? scrollableOffset
          : offsetConstant;
      this.tabContainer.scrollBy(-scrollBy, 0);
    }
    setTimeout(() => this.manageButton(), 300);
  }
  render() {
    let children = this.props.children;
    const { noTopMar, v2, v3, start, grid, v5, style } = this.props;
    if (children && !children.length) children = [children];
    let icons = [];
    let exploded = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i] && children[i].length) {
        for (let j = 0; j < children[i].length; j++) {
          exploded.push(children[i][j]);
        }
      } else if (children[i]) {
        exploded.push(children[i]);
      }
    }
    for (let i = 0; i < exploded.length; i++) {
      icons.push(
        exploded[i] && exploded[i].props ? exploded[i].props.icon : null
      );
    }
    let buttons = [];
    for (let i = 0; i < exploded.length; i++) {
      buttons.push(
        exploded[i] && exploded[i].props
          ? exploded[i].props.label
          : "No tab head"
      );
    }
    let disabled = [];
    for (let i = 0; i < exploded.length; i++) {
      disabled.push(
        exploded[i] && exploded[i].props ? exploded[i].props.disabled : null
      );
    }
    const { activeTab, showLeft, showRight } = this.state;
    let content = [];
    for (let i = 0; i < exploded.length; i++) {
      content.push(
        activeTab === i ? (
          <div
            key={i}
            className={
              activeTab === i ? "zeetabs-content active" : "zeetabs-content"
            }
          >
            {exploded[i]}
          </div>
        ) : (
          <div
            key={i}
            className={
              activeTab === i ? "zeetabs-content active" : "zeetabs-content"
            }
          ></div>
        )
      );
    }
    let showLeftScrollButton = (v2 || v3) && showLeft,
      showRightScrollButton = (v2 || v3) && showRight;
    return (
      <div
        className={
          "zeetabs " +
          (v2 ? "zee-tabs-v2" : "") +
          (v3 ? "zee-tabs-v2 zee-tabs-v3" : "") +
          (v5 ? "zee-tabs-v5" : "")
        }
        style={style}
      >
        <div className={grid ? "container" : ""}>
          <div className={v2 || v3 ? "hide-scrollbar" : ""}>
            {/* <button className={showLeftScrollButton ? 'scroll-button left scroll-button-show' : 'scroll-button left'} onClick={() => this.scroll('left')}><span className='fa fa-chevron-left' /></button>
            <button className={showRightScrollButton ? 'scroll-button right scroll-button-show' : 'scroll-button right'} onClick={() => this.scroll('right')}><span className='fa fa-chevron-right' /></button>
            <div className={showLeftScrollButton ? 'left-shadow left-shadow-show' : 'left-shadow'} />
            <div className={showRightScrollButton ? 'right-shadow right-shadow-show' : 'right-shadow'} /> */}
            <div
              className="zeetabs-button-container"
              style={{
                marginTop: noTopMar ? "0" : "",
                justifyContent:
                  start || !(v2 || v3)
                    ? isMobile
                      ? "flex-start"
                      : v2 || v3 || v5
                      ? "center"
                      : "flex-start"
                    : "",
                paddingLeft: !(v2 || v3 || v5) ? "0" : "",
              }}
              ref={(ref) => (this.tabContainer = ref)}
            >
              {buttons.length > 0 &&
                buttons.map((b, k) => {
                  return (
                    <button
                      type="button"
                      className={
                        disabled[k]
                          ? "tab-button disabled"
                          : activeTab === k
                          ? "tab-button active"
                          : "tab-button"
                      }
                      onClick={(e) =>
                        disabled[k]
                          ? null
                          : this.activateTab(e, k, exploded[k].props.onActive)
                      }
                      key={k}
                    >
                      {icons[k] && <span className={icons[k]}></span>}
                      {b}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
        {content.length > 0 && (
          <div className="zeetabs-content-containers">{content}</div>
        )}
      </div>
    );
  }
}

export default Tabs;
