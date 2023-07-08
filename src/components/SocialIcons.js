const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/mdyeates">
        <i className="fa-brands fa-github" aria-hidden="true" title="Raj Kawale' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/raj-kawale/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Raj Kawale' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://raj-dairy.blogspot.com/">
        <i className="fa-brands fa-blogger-b" aria-hidden="true" title="Raj Kawale' Blog Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
