export default {
    path: '/users',
    component: () => import('@/views/users'),
    children: [
        {
            path:'editor',
            component: () => import('@/views/users/editor'),
        },
        {
            path:'editor/:id',
            components:{
                default : ()=> import('@/views/users/editor'),
                editor:()=>import('@/views/users/editor')
            },
            props :{
                editor:true
            } 
        },
        {
            path: 'aboutMe',
            component: () => import('@/views/users/center')
        },
        {
            path: 'controller/:cardId',
            components: {
                default: () => import('@/components/allArticle'),
                itemId: () => import('@/components/allArticle')
            },
            props: {
                cardId: true
            }
        },
        {
            path: 'myPost',
            component: () => import('@/components/myPost')
        },
        {
            path: 'myItem',
            component: () => import('@/components/myItem')
        },
        {
            path: 'signup',
            component: () => import('@/components/signup')
        },
        {
            path: 'login',
            component: () => import('@/components/login')
        },
        {
            path: 'resive',
            component: () => import('@/components/resive')
        }
        ,
        {
            path: '/users',
            redirect: 'aboutMe'
        }
    ]
}