let picArr = [
      "https://i2.wp.com/marketeeronline.co/wp-content/uploads/2018/07/AFTER-YOU-WEB.jpg?fit=816%2C454&ssl=1",
      "https://cdn1.th.orstatic.com/userphoto/photo/0/1H/000AL8ADEF636764F39833px.jpg",
      "https://miro.medium.com/max/640/1*CNJvfa7R-siIi6RwkQTQ1Q.png",
      "https://16jhl82mq2imp4wet2y0c7og-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/Auntie-Annes-Soft-Prezel-Maker-Logo-RBMM.jpg",
      "https://www.bananaleafthailand.com/wp-content/themes/_bnnl/images/logo.svg",
      "https://article.redprice.co/wp-content/uploads/2017/09/logocover.jpg",
      "https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/49584180_587648991695568_784281966215168000_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHaTfXRl7eNcOa1dyRqzhTGo8xgAliT4zKjzGACWJPjMjJq7wi9aeNeuAmLxtxjdWYMTmUiV69D7Abo-iiJEwls&_nc_ohc=kf7InRnXKs8AX9xLgZ9&_nc_ht=scontent.fbkk2-8.fna&oh=7e06270164cdb157a73f7c02777fdd46&oe=606DA4D0",
      "https://the-parq.sgp1.cdn.digitaloceanspaces.com/2020/07/TheParq_CafeAmazon.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dairy_Queen_logo.svg/220px-Dairy_Queen_logo.svg.png",
      "https://1000logos.net/wp-content/uploads/2017/08/Dunkin-Donuts-Logo.png",
    ];
       let webArr = [
       'http://aubonpainthailand.com/home.php',
       'https://www.facebook.com/akikofanclub/',
       'https://www.afteryoudessertcafe.com/en/',
       'http://www.auntieannes.co.th/',
       'https://www.bananaleafthailand.com/',
       'http://barbqplaza.com/',
       'https://www.facebook.com/bonjoursiambakery/',
       'https://www.cafe-amazon.com/index.aspx',
       'https://www.dairyqueenthailand.com/',
       'http://www.dunkindonuts.co.th/'
       ]
        const Back = document.querySelector('.float-end') 
        const ImgTn = document.querySelectorAll('#image-thumbnail')
        const NameTh = document.querySelectorAll('.nameTH')
        const NameEng = document.querySelectorAll('.nameEng')
        const Numbers = document.querySelectorAll('small')
        const Heading = document.querySelector('#heading')
        const Btn = document.querySelectorAll('#view')

        picArr.forEach((i,index)=> {
          ImgTn[index].src = picArr[index]
        })
        
        axios.get('https://jacktnp.github.io/webtech2019/quiz/api/05/data.json')
        .then(response => {  
        const Arr = response.data.info.foodShop
        Arr.forEach((i,index) => {          
        NameEng[index].textContent = response.data.info.foodShop[index].nameEN
        NameTh[index].textContent = response.data.info.foodShop[index].nameTH
        Numbers[index].textContent = response.data.info.foodShop[index].phone 
        });
        Heading.textContent = response.data.info.des
        })
        .catch(error => 
        console.error(error)
        )
        webArr.forEach((i,index)=>{
         Btn[index].href = webArr[index]
       })