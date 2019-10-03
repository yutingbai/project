export default{
    path:'/practice',
    component:()=>import('@/views/practice'),
    children: [
        {
            path: 'controller/:cardId',
            components: {
                default: () => import('@/components/allPractice'),
                itemId: () => import('@/components/allPractice')
            },
            props: {
                cardId: true
            }
        },{
            path:'/practice',
            redirect:'controller/all'
          }
    ]
}