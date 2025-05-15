const withDarkMode =
  (enabled = false) =>
  (WrappedComponent) => {
    return function DarkModeWrapper(props) {
      const style = {
        backgroundColor: enabled ? "#121212" : "#ffffff",
        color: enabled ? "#f0f0f0" : "#000000",
        padding: "1rem",
        borderRadius: "0.5rem",
      };

      return (
        <div style={style}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };

export default withDarkMode;
