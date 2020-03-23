import Vue from "vue"
import Router from "vue-router"
import Login from "@/components/login/Login"
import Dashboard from "@/components/home/Dashboard"
import StartPage from "@/views/StartPage"
import ProjectsOverview from "@/views/ProjectsOverview"
import ProjectCreationForm from "@/components/projects/CreateProject"

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: "/",
      name: "StartPage",
      component: StartPage
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsOverview
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashbaord",
      component: Dashboard
    },
    {
      path: "/create-project",
      name: "CreateProject",
      component: ProjectCreationForm
    },
  ],
})

export default router;
