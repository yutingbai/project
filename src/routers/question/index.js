export default{
    path:'/question',
    component:()=>import('@/views/question'),
    children: [
        {
            path: 'controller/:cardId',
            components: {
                default: () => import('@/components/allQuestion'),
                itemId: () => import('@/components/allQuestion')
            },
            props: {
                cardId: true
            }
        },{
            path:'/question',
            redirect:'controller/all'
          }
    ]
}