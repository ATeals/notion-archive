import { Client } from "@notionhq/client";
import getSeriesList from "./getSeriesList";
import getPostData from "./getPostData";
import getPostInfo from "./getPostInfo";
import { getPostList } from "./getPostList";

const notion = new Client({ auth: process.env.NOTION_KEY });

const notionSeriesList = () => getSeriesList(notion);
const notionPostData = (id: string) => getPostData(notion, id);
const notionPostInfo = (id: string) => getPostInfo(notion, id);
const notionPostList = () => getPostList(notion);

export { notionSeriesList, notionPostData, notionPostInfo, notionPostList };
