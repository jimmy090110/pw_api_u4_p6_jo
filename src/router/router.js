import {createRouter,createWebHashHistory} from 'vue-router'

import EstudianteD from '../pages/EstudianteD.vue'
import EstudianteE from '../pages/EstudianteE.vue'
import EstudianteG from '../pages/EstudianteG.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import BloqueadoPage from '../pages/BloqueadoPage.vue'



const routes = [
    {
        path: '/estudiante/actualizar/:cedula',
        name:'prueba',

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
    },
    {
    path: '/bloqueado',
    name :'blo', 
    component:BloqueadoPage
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,

})

//programar guardianes
router.beforeEach((to, from, next)=> {
    //
    console.log('Guardianes')
    console.log(to);
    console.log(next);

    let usuario='jimmy';
    let resultado=false;


    const random = Math.random()*100;

    if(random>50){
        console.log('Si tiene acceso a esa pagina')
        next();
    }else{
        console.log('Acceso bloqueado')
        next({name:'blo'})
    }
})

export default router



