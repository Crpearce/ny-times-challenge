import Navigation from "../../components/navigation/navigation.component";
import SearchBox from "../../components/search-box/search-box.component";
import ArticlesContainer from "../../components/articles-container/articles-container.component";

const Home = ({ articles, placeholder, onChangeHandler }) => {
  return (
    <div>
      <Navigation />
      <SearchBox placeholder={placeholder} onChangeHandler={onChangeHandler} />
      <ArticlesContainer articles={articles} />
    </div>
  );
};

export default Home;
