// hoc/withAuthorization.js
const withAuthorization =
  (allowedRoles = []) =>
  (WrappedComponent) => {
    return function AuthorizedWrapper({ user, ...props }) {
      if (!allowedRoles.includes(user?.role)) {
        return <div>Access denied</div>;
      }
      return <WrappedComponent user={user} {...props} />;
    };
  };

export default withAuthorization;
