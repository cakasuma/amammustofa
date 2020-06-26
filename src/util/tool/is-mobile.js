const isMobile =
  window !== undefined &&
  window.matchMedia('only screen and (max-width: 760px)').matches

export default isMobile
