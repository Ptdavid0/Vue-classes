import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import Menu from "./components/template/Menu";
import MenuAlt from "./components/template/MenuAlt";

Vue.use(Router);

//Carregamento tardio (Apenas sob demanda)

const Usuario = () => import("./components/usuario/Usuario");
const UsuarioLista = () => import("./components/usuario/UsuarioLista");
const UsuarioDetalhe = () => import("./components/usuario/UsuarioDetalhe");
const UsuarioEditar = () => import("./components/usuario//UsuarioEditar");

const router = new Router({
  mode: "history",
  routes: [
    {
      name: "inicio",
      path: "/",
      //   component: Inicio
      components: {
        default: Inicio,
        menu: Menu
      }
    },
    {
      path: "/usuario",
      components: {
        default: Usuario,
        menu: MenuAlt,
        menuInferior: MenuAlt
      },
      props: true,
      children: [
        {
          path: "",
          component: UsuarioLista
        },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            // eslint-disable-next-line no-console
            console.log("Antes da rota -> Usuario Detalhe");

            // basic auth
            const autorized = true;
            autorized ? next() : next(false);
          }
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario"
        }
      ]
    },

    // Path redirecionando para um certo local
    {
      path: "/redirect",
      redirect: "/usuario"
    },

    // Rota que pega tudo que nao esta definido e manda para algum lugar
    {
      path: "*",
      redirect: "/"
    }
  ]
});

// Interceptando as rotas-------------------------------------------

// beforeEnter(rotas) <-> beforeEach(outside rotas)

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log("Antes das rotas -> Global");
  next();
});

export default router;
