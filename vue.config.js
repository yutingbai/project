module.exports = {
    devServer:{
        proxy:{ 
            '/xuptbbs':{
                ws:false,
                target:'http://yugengkai.top:8080',
                // target:'http://39.97.33.178',
                changeOrigin:true
            }
        }
    }
}