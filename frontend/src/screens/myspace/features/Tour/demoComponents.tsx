const demoCard = () => {
  return (
    <>
      <div
        className="react-grid-item react-draggable cssTransforms react-resizable"
        style={{
          transform: "translate(10px, 10px)",
          width: "243px",
          height: "150px",
          position: "absolute",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ width: "100%", height: "100%" }}>
            <button
              type="button"
              className="ant-btn css-dev-only-do-not-override-ed5zg0 ant-btn-default ant-btn-icon-only chartmenu__button"
            >
              <span
                role="img"
                aria-label="tool"
                className="anticon anticon-tool"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="tool"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"></path>
                </svg>
              </span>
            </button>
            <div className="ant-statistic css-dev-only-do-not-override-ed5zg0">
              <div className="ant-statistic-title">test</div>
              <div className="ant-statistic-content">
                <span className="ant-statistic-content-prefix">Rs.</span>
                <span className="ant-statistic-content-value">
                  <span className="ant-statistic-content-value-int">
                    682,163,612
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="react-resizable-handle react-resizable-handle-se"></span>
      </div>
    </>
  );
};

export { demoCard };
