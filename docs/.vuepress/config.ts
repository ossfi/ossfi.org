import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import type { DefaultThemeOptions } from "vuepress";
import { defineUserConfig } from "vuepress";
// import fetch from "node-fetch";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-GB",
  title: "Open-Source Supported Financial Information | OSSFI.ORG",
  description:
    "We're working to provide useful financial information to everyone for free using open-source software and the open-source data model where members of the community who have specific knowledge of the financial markets can contribute their data aswell as advice.",

  themeConfig: {
    logo: "/logo-light-mode.png",
    logoDark: "/logo-dark-mode.png",
    repo: "ossfi/ossfi.org",
    editLinks: true,
    editLinkText:
      "See something wrong? Have something to add? Make our information better now!",
    lastUpdated: true,
    notFound: [
      "We're sorry, this page can't be found, it may have been moved or deleted. " +
        "Please try searching for the page you're looking for or request it be authored from our Github issues page!",
    ],
    danger: "THIS IS DANGEROUS. USE CAUTION",
    docsDir: "docs",
  },

  bundler: "@vuepress/bundler-vite",
  bundlerConfig: {
    viteOptions: {},
  },
  // plugins: [
  //   [
  //     "@vuepress/container",
  //     {
  //       type: "wiki",
  //       render: async (tokens, idx) => {
  //         tokens[idx].info = tokens[idx].info.trim().split(" "); // Cleanup the token
  //         const Wiki_Page = tokens[idx].info[1];
  //         const wiki_url = `http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=${Wiki_Page}&callback=?`;
  //         try {
  //           const response = await fetch(wiki_url, {
  //             headers: { "Content-Type": "application/json" },
  //           });
  //           const wiki_data = await response.json();
  //           console.log(wiki_data);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       },
  //     },
  //   ],
  // ],
});
