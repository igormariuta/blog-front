const UserAvatar = ({ avatar, size = 20 }: any) => (
  <span
    className="d-block rounded-2 bg-light me-3"
    style={
      avatar.data
        ? {
            background:
              "no-repeat center url(" +
              (process.env.REACT_APP_IMG ?? "") +
              (avatar.data?.attributes.formats.thumbnail.url ?? "") +
              ")",
            backgroundSize: "cover",
            minWidth: `${size}px`,
            height: `${size}px`,
          }
        : {
            backgroundColor: "var(--bs-light)",
            minWidth: `${size}px`,
            height: `${size}px`,
          }
    }
  ></span>
);

export default UserAvatar;
