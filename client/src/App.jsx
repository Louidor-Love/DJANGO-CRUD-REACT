import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { UserformPage } from "./pages/UserFormPage";
import { TasksPage } from "./pages/TasksPage";
import { UserPage} from "./pages/UserPage";
import { DashboardPage} from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/log-in" element={<UserPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} /> 
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/users-create" element={<UserformPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;