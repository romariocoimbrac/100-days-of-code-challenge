window.onscroll = () => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};
