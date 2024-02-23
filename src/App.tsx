
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import FrontPage from './FrontPage/FrontPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './shared/header';
import CreatePage from './CreatePage/CreatePage';
import GeneratePage from './GeneratePage/GeneratePage';
import ViewPage from './ViewPage/ViewPage';
import NoPage from './shared/nopage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<FrontPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="generate" element={<GeneratePage />} />
          <Route path="view" element={<ViewPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
