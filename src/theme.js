const withTheme =
  (theme = {}) =>
  (WrappedComponent) => {
    return function ThemeWrapper(props) {
      return (
        <div style={{ ...theme }}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };

export default withTheme;
