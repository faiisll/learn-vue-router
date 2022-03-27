import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/jobs/JobsView.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "jobDetails",
    component: JobDetails,
    props: true,
  },

  //redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },

  //404
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
