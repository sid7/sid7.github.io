const $ = q => document.querySelector(q);
const $$ = Q => [].slice.call(document.querySelectorAll(Q));

const colors = {
  home: "#ff5722",
  about: "#009688",
  skills: "#e91e63",
  projects: "#0279af",
  contact: "#673ab7"
};

export default new class scrollSpy {
  constructor() {
    this.ticks = {
      scroll: false,
      resize: false
    };
    this.lst = {};
  }
  getActiveSec = pos => {
    let rtn;
    for (const i in this.lst) {
      if (this.lst[i] <= pos) {
        rtn = i;
      }
    }
    return rtn;
  };
  __cls_active = () => {
    const actEl = $(".site-nav .active");
    if (actEl) {
      actEl.classList.remove("active");
    }
  };
  __scroll_agent = () => {
    const pos = document.documentElement.scrollTop || document.body.scrollTop;
    if (!this.ticks.scroll) {
      requestAnimationFrame(() => {
        const sec = this.getActiveSec(pos);
        this.__cls_active();
        const a = $(`a[href="#${sec}"]`);
        if (a) {
          a.classList.add("active");
          document.body.className = `active-${sec}`;
          document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", colors[sec]);
        } else {
          document.body.className = "";
          document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", colors.home);
        }

        this.ticks.scroll = false;
      });
      this.ticks.scroll = true;
    }
  };
  __resize_agent = () => {
    if (!this.ticks.resize) {
      requestAnimationFrame(() => {
        this.setPos();
        this.ticks.resize = false;
      });
      this.ticks.resize = true;
    }
  };
  setPos = () => {
    this.secs.forEach(sec => {
      this.lst[sec.id] = sec.offsetTop - 50;
    });
  };
  inject = target => {
    this.secs = $$(target);
    this.setPos();
    document.addEventListener("scroll", this.__scroll_agent);
    document.addEventListener("resize", this.__resize_agent);
  };
  eject = () => {
    document.removeEventListener("scroll", this.__scroll_agent);
    document.removeEventListener("resize", this.__resize_agent);
  };
}();
