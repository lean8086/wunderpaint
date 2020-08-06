export default ({ children }) => (
  <div className="toolbox">
    {children}

    <style jsx>{`
      .toolbox {
        z-index: 99;
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
      }
      `}</style>
  </div>
);
