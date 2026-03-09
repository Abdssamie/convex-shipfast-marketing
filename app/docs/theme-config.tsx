import { Navbar } from "nextra-theme-docs";

export const docsTitleSuffix = " - Docs";

export const docsThemeConfig = {
  project: {
    link: null,
  },
  chat: {
    link: null,
  },
  footer: false,
  editLink: false,
  titleSuffix: docsTitleSuffix,
};

const themeConfig = {
  docsRepositoryBase: "https://github.com/abdssamie/convex-shipfast-marketing",
  editLink: false,
  feedback: {
    content: null,
  },
  footer: null,
  navbar: (
    <Navbar
      logo={<span>FluxKit Docs</span>}
      projectLink={undefined}
      chatLink={undefined}
    />
  ),
};

export default themeConfig;
