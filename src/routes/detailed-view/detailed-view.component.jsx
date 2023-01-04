import Navigation from "../../components/navigation/navigation.component";
import ArticleDetail from "../../components/article-detail/article-detail.component";

const DetailedView = ({ articles }) => {
  return (
    <div>
      <Navigation />
      <ArticleDetail articles={articles} />
    </div>
  );
};

export default DetailedView;