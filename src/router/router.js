import {createRouter,createWebHashHistory} from 'vue-router'

import EstudianteD from '../pages/EstudianteD.vue'
import EstudianteE from '../pages/EstudianteE.vue'
import EstudianteG from '../pages/EstudianteG.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
    {
        path: '/estudiante/actualizar/:cedula',

        component: EstudianteD
    },
    {
        path: '/estudiante/eliminar',

        component: EstudianteE
    },
    {
        path: '/estudiante/guardar',

        component: EstudianteG
    },
    {
        path: '/',

        component: BienvenidaPage
    },
    {
        path: '/:pathMat(.*)*',
        component: NotFoundPage
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,

})

export default router



