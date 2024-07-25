import {createRouter,createWebHashHistory} from 'vue-router'

import EstudianteD from '../pages/EstudianteD.vue'
import EstudianteE from '../pages/EstudianteE.vue'
import EstudianteG from '../pages/EstudianteG.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'

const routes = [
    {
        path: '/estudiante/actualizar',

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
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,

})

export default router



