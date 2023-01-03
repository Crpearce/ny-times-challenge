import Navigation from "../../components/navigation/navigation.component";
import ArticlesContainer from "../../components/articles-container/articles-container.component";

const Home = ({ articles }) => {
  return (
    <div>
      <Navigation />
      <ArticlesContainer articles={articles} />
    </div>
  );
};

export default Home;
