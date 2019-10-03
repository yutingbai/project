export default {
    path: '/comperate',
    component: () => import('@/views/comperate'),
    children: [
        {
            path: 'item/:itemId',
            components: {
                default: () => import('@/components/allItem'),
                itemId: () => import('@/components/allItem')
            },
            props: {
                itemId: true
            }
        },
      
        {
            path: '/comperate',
            redirect: 'item/all'
        }
    ]
}