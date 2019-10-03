export default {
    path: '/posted',
    component: () => import('@/views/posted'),
    children: [
        /* {
            path: 'controller/:',
            component: () => import('@/components/all')
        },
        {
            path: 'technology',
            component: () => import('@/components/technology')
        },
        {
            path: 'other',
            component: () => import('@/components/other')
        },
        {
            path: 'myfollow',
            component: () => import('@/components/myfollow')
        } */

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
            path: 'detail/:cardId',
            components: {
                default: () => import('@/components/allArticle'),
                detail: () => import('@/components/postDetail')
            },
            props: {
                detail: true
            }
        }
        , {
            path: '/posted',
            redirect: 'controller/all'
        }
    ]
}