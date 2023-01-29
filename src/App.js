import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import JobCreateForm from "./pages/jobs/JobCreateForm";
import JobPage from "./pages/jobs/JobPage";
import JobsPage from "./pages/jobs/JobsPage";
import JobEditForm from "./pages/jobs/JobEditForm";
import SkillsPage from "./pages/skills/SkillsPage";
import SkillCreateForm from "./pages/skills/SkillCreateForm";
import SkillEditForm from "./pages/skills/SkillEditForm";
import SkillPage from "./pages/skills/SkillPage"
import NotFound from "./components/NotFound";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route exact path="/jobs" render={() => <JobsPage />} />
          <Route exact path="/jobs/create" render={() => <JobCreateForm /> } />
          <Route exact path="/jobs/:id" render={() => <JobPage />} />
          <Route exact path="/jobs/:id/edit" render={() => <JobEditForm />} />
          <Route exact path="/skills" render={() => <SkillsPage />} />
          <Route exact path="/skills/create" render={() => <SkillCreateForm />} />
          <Route exact path="/skills/:id" render={() => <SkillPage />} />
          <Route exact path="/skills/:id/edit" render={() => <SkillEditForm />} />
          
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;