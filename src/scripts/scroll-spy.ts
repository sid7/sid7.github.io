type SectionLst = "home" | "about" | "skills" | "projects" | "contact";
type SectionColor = {
  [sec in SectionLst]: string;
};
const colors: SectionColor = {
  home: "#ff5722",
  about: "#009688",
  skills: "#e91e63",
  projects: "#0279af",
  contact: "#673ab7"
};

export default new (class scrollSpy {
  private ticks: { scroll: boolean; resize: boolean };
  private lst: any;
  private sections: HTMLElement[] | undefined;

  private el = (query: string) => document.querySelector(query);
  private elAll = (query: string) =>
    Array.from(document.querySelectorAll(query));

  constructor() {
    this.ticks = { scroll: false, resize: false };
    this.lst = {};
  }
  private setPos = () => {
    this.sections?.forEach((sec) => {
      this.lst[sec.id] = sec.offsetTop - 50;
    });
  };
  private cls_active = () => {
    this.el(".site-nav .active")?.classList.remove("active");
  };
  private get_active_sec = (pos: number): SectionLst => {
    let active_sec: SectionLst = "home";
    for (const i in this.lst) {
      if (this.lst[i] <= pos) {
        active_sec = i as SectionLst;
      }
    }
    return active_sec;
  };
  private scroll_agent = () => {
    const pos = document.documentElement.scrollTop;
    if (!this.ticks.scroll) {
      requestAnimationFrame(() => {
        const sec = this.get_active_sec(pos);
        this.cls_active();
        const a = this.el(`a[href="#${sec}"]`);
        if (a) {
          a.classList.add("active");
          document.body.className = `active-${sec}`;
          document
            .querySelector('meta[name="theme-color"]')!
            .setAttribute("content", colors[sec]);
        } else {
          document.body.className = "";
          document
            .querySelector('meta[name="theme-color"]')!
            .setAttribute("content", colors.home);
        }
        this.ticks.scroll = false;
      });
      this.ticks.scroll = true;
    }
  };
  private resize_agent = () => {
    if (!this.ticks.resize) {
      requestAnimationFrame(() => {
        this.setPos();
        this.ticks.resize = false;
      });
      this.ticks.resize = true;
    }
  };

  inject = (target: string) => {
    this.sections = this.elAll(target) as HTMLElement[];
    this.setPos();
    document.addEventListener("scroll", this.scroll_agent);
    document.addEventListener("resize", this.resize_agent);
  };
  eject = () => {
    document.removeEventListener("scroll", this.scroll_agent);
    document.removeEventListener("resize", this.resize_agent);
  };
})();
