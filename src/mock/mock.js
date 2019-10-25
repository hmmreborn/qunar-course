import Mock from 'mockjs'
import city from './city'
import detail from './detail'
const Random = Mock.Random

// login
Mock.mock('/api/login', 'post', (option) => {
  let { username, password } = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})

// user
const userData = () => {
  let users = []
  for (let i = 0; i < 10; i++) {
    let user = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'name': Random.cname(),
      'address': Mock.mock('@county(true)'),
      'phone': Mock.mock(/^1[0-9]{10}$/),
      'status': Random.integer(0, 1)
    }
    users.push(user)
  }
  return users
}
// swipe
const home = {
  code: 200,
  city: '上海',
  swipe: [
    {
      id: 1,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/47f7d9e9fb7c5cb88a1245180c9ca5b4.jpg_750x200_de4858e1.jpg',
      'title': '去哪儿门票'
    },
    {
      id: 2,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/0fa39f9f5e66189e85b5c6e54278587d.jpg_750x200_86c8f2d8.jpg',
      'title': '去哪儿门票'
    },
    {
      id: 3,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/9b5dd778a3e717f95bf9dfd28140283b.jpg_750x200_33b4a213.jpg',
      'title': '去哪儿门票'
    },
    {
      id: 4,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/249dfa53de67b8824a96f9821e58f30d.jpg_750x200_48bf24d9.jpg',
      'title': '去哪儿门票'
    },
    {
      id: 5,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0645bd625b46216a55e3835d0f677ce2.jpg_750x200_1e9a0cbf.jpg',
      'title': '去哪儿门票'
    },
    {
      id: 6,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/083c708a3949958bcbca0fcc0ea3d57f.jpg_750x200_e47acfc7.jpg',
      'title': '去哪儿门票'
    },
    {
      id: 7,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/da3db1d9761f8984fd9c84c4eccf93ee.jpg_750x200_b7f8686a.jpg',
      'title': '去哪儿门票'
    },
    {
      id: 8,
      'imgUrl': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/cd40bfe8cc78b91664dd9eddc844b9be.jpg_750x200_e1cb5b42.jpg',
      'title': '去哪儿门票'
    }
  ],
  icons: [
    {
      id: 1,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      text: '景点门票'
    },
    {
      id: 2,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      text: '动植物园'
    },
    {
      id: 3,
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
      text: '国庆大促'
    },
    {
      id: 4,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
      text: '室内娱乐'
    },
    {
      id: 5,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      text: '一日游'
    },
    {
      id: 6,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
      text: '黄浦江游船'
    },
    {
      id: 7,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
      text: '上海野生'
    },
    {
      id: 8,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
      text: '上海迪士尼'
    },
    {
      id: 9,
      imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
      text: '上海海昌'
    },
    {
      id: 10,
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
      text: '城市观光'
    }
  ],
  week: [
    {
      id: 1,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
      text: '上海迪士尼乐园',
      price: 253,
      type: {
        ranking: 'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png'
      }
    },
    {
      id: 2,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_250x250_170cb921.jpg',
      text: '上海海昌海洋公园',
      price: 66,
      type: {
        ranking: 'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png'
      }
    },
    {
      id: 3,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/26/2645c1b2ee526285a3.water.jpg_250x250_c9ab8185.jpg',
      text: '黄浦江游览（十六铺码头）',
      price: 72,
      type: {
        ranking: 'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png'
      }
    },
    {
      id: 4,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1908/c8/c8f722801de63d7ca3.img.jpg_250x250_ca25e5dd.jpg',
      text: '上海野生动物园',
      price: 115,
      type: {
        ranking: ''
      }
    },
    {
      id: 5,
      imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
      text: '东方明珠',
      price: 79,
      type: {
        ranking: ''
      }
    },
    {
      id: 6,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_250x250_ca7fa9d0.jpg',
      text: '上海杜莎夫人蜡像馆',
      price: 117,
      type: {
        ranking: ''
      }
    },
    {
      id: 7,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_250x250_13ec6e06.jpg',
      text: '上海科技馆',
      price: 51,
      type: {
        ranking: ''
      }
    },
    {
      id: 8,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg',
      text: '上海欢乐谷',
      price: 190,
      type: {
        ranking: ''
      }
    },
    {
      id: 9,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_250x250_0130a49d.jpg',
      text: '上海海洋水族馆',
      price: 145,
      type: {
        ranking: ''
      }
    },
    {
      id: 10,
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/62/62981f052681ef5ba3.img.jpg_250x250_11d6ec49.jpg',
      text: '上海中心大厦',
      price: 124,
      type: {
        ranking: ''
      }
    }
  ],
  guess: [
    {
      id: 1,
      type: {
        bgImg: 'https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png',
        text: '可订明日'
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1908/c8/c8f722801de63d7ca3.img.jpg_200x200_592ccf80.jpg',
      title: '上海野生动物园',
      price: 118,
      address: '浦东新区',
      comment: 63938,
      score: 4.9,
      ellipse: '会跳芭蕾的小海狮们~'
    },
    {
      id: 2,
      type: {
        bgImg: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
        text: '随买随用'
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
      title: '上海迪士尼乐园',
      price: 253,
      address: '浦东新区',
      comment: 268361,
      score: 4.9,
      ellipse: '全球最大的迪士尼城堡'
    },
    {
      id: 3,
      type: {
        bgImg: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
        text: '随买随用'
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_200x200_6879c7f7.jpg',
      title: '上海海昌海洋公园',
      price: 69,
      address: '浦东新区',
      comment: 19248,
      score: 4.9,
      ellipse: '感受海洋公园乐趣'
    },
    {
      id: 4,
      type: {
        bgImg: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
        text: '随买随用'
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
      title: '上海海洋水族馆',
      price: 145,
      address: '浦东新区',
      comment: 3164,
      score: 4.9,
      ellipse: '亲眼见证鲨鱼的恐怖'
    },
    {
      id: 5,
      type: {
        bgImg: 'https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png',
        text: '可订明日'
      },
      imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
      title: '东方明珠',
      price: 80,
      address: '浦东新区',
      comment: 85391,
      score: 4.9,
      ellipse: '259米透明悬空观光廊了解一下~'
    },
    {
      id: 6,
      type: {
        bgImg: '',
        text: ''
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/20/20dd895e78548b50a3.img.jpg_200x200_348c3831.jpg',
      title: '上海长风海洋世界',
      price: 139.1,
      address: '普陀区',
      comment: 9006,
      score: 4.1,
      ellipse: ''
    },
    {
      id: 7,
      type: {
        bgImg: '',
        text: ''
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_200x200_f22705c9.jpg',
      title: '上海科技馆',
      price: 51,
      address: '浦东新区',
      comment: 25,
      score: 4.3,
      ellipse: '近期小伙伴们收藏最！多！的景点😊'
    },
    {
      id: 8,
      type: {
        bgImg: '',
        text: ''
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_200x200_c7f8a6ad.jpg',
      title: '上海动物园',
      price: 37,
      address: '长宁区',
      comment: 25,
      score: 4.3,
      ellipse: '巨型象龟了解一下~'
    },
    {
      id: 9,
      type: {
        bgImg: '',
        text: ''
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/34/349ee417b69fed40a3.img.jpg_200x200_9c5356e9.jpg',
      title: '上海星空错觉艺术馆',
      price: 60,
      address: '黄浦区',
      comment: 11259,
      score: 3.8,
      ellipse: ''
    },
    {
      id: 10,
      type: {
        bgImg: '',
        text: ''
      },
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_200x200_9a7794fc.jpg',
      title: '上海欢乐谷',
      price: 220,
      address: '黄浦区',
      comment: 40720,
      score: 4.5,
      ellipse: '敢上1200米长的木质过山车吗？'
    }
  ],
  weekend: [
    {
      id: 1,
      imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
      name: '上海必打卡',
      desc: '中西合璧，现代和传统各有各的精彩'
    },
    {
      id: 2,
      imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
      name: '周末亲子爱玩',
      desc: '走进自然或玩转乐园，感知大千世界，游乐项目惊险刺激，特色表演异彩纷呈，等你们~'
    },
    {
      id: 3,
      imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
      name: '上海城市观光',
      desc: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'
    },
    {
      id: 4,
      imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
      name: '情迷博物馆',
      desc: '走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~'
    },
    {
      id: 5,
      imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg',
      name: '学生最爱TOP10',
      desc: '学习之余最爱玩耍，爱玩的你不可错过'
    }
  ]
}
Mock.mock('/api/users', userData)
Mock.mock('/api/home', home)
Mock.mock('/api/city', city)
Mock.mock('/api/detail', detail)
