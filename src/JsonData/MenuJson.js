import buttons  from'../components/Button/Button'
import Cards  from'../components/Cards/Cards'
import Color from '../components/Color/Color'
import Border from '../components/Border/Border'
import Animations from '../components/Animations/Animations'
import Other from '../components/Other/Other'
import Tables from '../components/Tables/Tables'

const MenuJson = [      
                {
                    elementheading:'Interface',
                    items_perent:'Components',
                    icon:'fa-cog',
                    items_child:[
                        {
                            name:'Buttons',
                            path:'./buttons',
                            component: buttons,
                        },
                        {
                            name:'Cards',
                            path:'./cards',
                            component: Cards,
                        }
                    ],
                    items_inner:[
                        {
                            items_perent:'Utilities',
                            icon:'fa-wrench',
                            items_child:[
                                {
                                    name:'Colors',
                                    path:'./colors',
                                    component: Color

                                },
                                {
                                    name:'Borders',
                                    path:'./borders',
                                    component: Border
                                },
                                {
                                    name:'Animations',
                                    path:'./animations',
                                    component: Animations
        
                                },
                                {
                                    name:'Other',
                                    path:'./other',
                                    component: Other
        
                                }
                            ]
                        }
                    ]
                },

                {
                    elementheading:'Addons',
                    items_perent:'Pages',
                    icon:'fa-folder',
                    items_child:[
                        {
                            name:'Login',
                            path:'./login'

                        },
                        {
                            name:'Register',
                            path:'./register'

                        },
                        {
                            name:'Forgot Password',
                            path:'./forgot-password'
                        },
                        {
                            name:'404 Page',
                            path:'./404-Page'

                        },
                        {
                            name:'Blank Page',
                            path:'./Blank-Page'
                        }
                    ],
                    items_inner:[
                        {
                            items_perent:'Charts',
                            icon:'fa-chart-area',
                            path:'./charts'

        
                        },
                        {
                            items_perent:'Tables',
                            icon:'fa-table',
                            path:'./tables',
                            component: Tables,
        
                        }

                    ]


                },


            ]


export default  MenuJson;                  