import { firestore } from "./firestore";

export type PageProps = {
  title: string,
  article : string,
}

const getArticle = async(path : string) => {
  const doc = await firestore.collection("blog").doc(path).get();
  const article : PageProps = {title: doc.get("title"), article: doc.get("article")}
  article.article = article.article.replaceAll("\\n", "\n")
  return article;
}

export default getArticle;
