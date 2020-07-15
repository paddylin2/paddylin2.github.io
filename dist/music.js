const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  // mini: true,
  autoplay: true,
  mutex: true,
  // theme: '#FADFA3', //列表标签颜色,audio有设置theme这个就会失效
  loop: 'all',
  lrcType: 1,
  // volume: 0.7, //默认音量
  audio: [{
      theme: 'pink',
      name: '圈住你',
      artist: '一口甜',
      url: 'https://music.163.com/song/media/outer/url?id=1372552573',
      cover: 'http://p1.music.126.net/Y05iUqwPp1IBwCj291_Ulg==/109951164156398679.jpg?param=130y130',
      lrc: ""
    }, {
      theme: '#46718b',
      name: '追',
      artist: '陈壹千',
      url: 'https://music.163.com/song/media/outer/url?id=1358848433',
      cover: 'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
    },
    {
      name: "冬眠",
      artist: '司南',
      url: 'https://music.163.com/song/media/outer/url?id=1398663411',
      cover: 'http://p2.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=130y130',
      // theme: '#fff' //进度条颜色
    }
  ]
});
