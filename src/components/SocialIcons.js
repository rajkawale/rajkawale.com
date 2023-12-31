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
      <a className="icon" style={styles.icon} href="https://github.com/rajkawale">
        <i className="fa-brands fa-github" aria-hidden="true" title="Raj Kawale' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/rajkawale/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Raj Kawale' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://blog.rajkawale.com">
        <i className="fa-brands fa-blogger-b" aria-hidden="true" title="Raj Kawale' Blog Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://portfolio.rajkawale.com">
        <i className="fa-solid fa-briefcase" aria-hidden="true" title="Raj Kawale'Portfolio "></i>
      </a>
    </div>
  );
};

export default SocialIcons;
