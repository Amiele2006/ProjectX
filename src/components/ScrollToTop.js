const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scrolling
    });
  };

  return (
    <button 
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
}

export default ScrollToTopButton;
