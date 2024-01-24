import { Link, Route, Routes } from "react-router-dom";

const PagePathsWithComponents: Record<string, { default: any }> =
  import.meta.glob(["./pages/**/*.tsx"], {
    eager: true,
  });

const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];

  return {
    name,
    path: `/${name.toLowerCase()}`,
    component: PagePathsWithComponents[path]?.default,
  };
});

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
