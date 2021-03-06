// pages/relax/relax.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    name2: '',
    showStory: false,
    readAll: false,
    storyTitle: '',
    storyContents: [],
    allStories: {},
    stortReadedKeys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  inputName(e) {
    this.data.name = e.detail.value
  },
  inputName2(e){
    this.data.name2 = e.detail.value
  },
  // 获取一个未读的故事的key
  getUnreadStoryKey(allStories,readedKeys){
    allStories = allStories || []
    readedKeys = readedKeys || []
    var allKeys = Object.keys(allStories)
    var key = null,item
    if (allKeys.length > readedKeys.length){
      for (var i = 0; i < allKeys.length;i++){
        item = allKeys[i]
        if (readedKeys.indexOf(item)==-1) {
          key = item
          break
        }
      }
    }
    return key
  },
  storyStart(e){
    var vm = this
    // 初始化故事
    vm.initStories()
    vm.switchStory()
    vm.setData({
      name: '',
      name2: ''
    })
  },
  resetStoey() {
    this.setData({
      storyTitle: '',
      storyContents: '',
      allStories: [],
      stortReadedKeys: [],
      showStory: false
    })
  },
  switchStory(){
    var vm = this
    var stories = vm.data.allStories,
      readedKeys = vm.data.stortReadedKeys
    var len = Object.keys(stories).length,
      num = vm.getUnreadStoryKey(stories, readedKeys)
    if(num==null){
      // 没有故事时此处会导致死循环
      vm.initStories()
      vm.switchStory()
    }else{
      var title = stories[num].title,
        content = stories[num].content
      readedKeys.push(num)
      var readAll = false
      if (readedKeys.length == Object.keys(vm.data.allStories).length){
        readAll = true
      }
      vm.setData({
        storyTitle: title,
        storyContents: content,
        stortReadedKeys: readedKeys,
        showStory: true,
        readAll: readAll
      })
    }
  },
  initStories(){
    var stories = this.getStories(this.data.name, this.data.name2)
    this.setData({
      storyTitle: '',
      storyContents: '',
      allStories: stories,
      stortReadedKeys: [],
    })
  },
  getStories(name, name2){
    name = name || '小明'
    name2 = name2 || '小丽'
    var storiesTitles = [
      '雨夜爱情故事',
      '午后浪漫时光',
      '霸道的总裁霸道的我',
      '我的男友是老师',
      '澡后的羞耻风波',
      '海滩の疯狂热恋',
      '三好学生VS校园小霸王',
      '炫炸升天の爱恋',
    ]
    var storiesContents = [
      [
        '这是一个风和日丽的晚上。',
        name2 + '一个站在街边，突然一瞬间，风雨，闪电。',
        '好像世界末日来临一般。',
        '街边的人都疯狂的朝着路边的小店跑去避雨，而' + name2 + '一动不动像王八，孤独的站在十字路口。',
        '“好狗不挡道”，在此路过的车示意路中央的' + name2 + '让道，可她还是一动不动像王八，司机无奈只能绕了过去。',
        name2 + '心想，他为什么还不来找我？',
        '无奈，心酸。',
        '冷冷的冰雨在' + name2 + '的脸上胡乱的拍，暖暖的眼泪跟寒雨混成一块。',
        '雨水随着发丝，脸颊往下滴。',
        '嘀嗒，嘀嗒，嘀嗒。',
        name2 + '看了一眼手表，伤心的说到：',
        '“秒钟转动滴滴哒，下个路口再见吧”',
        name2 + '很伤心，打算180度转身黯然离去。',
        '可谁成想，' + name2 + '才转了94度，' + name + '就出现了！',
        '“' + name2 + '!你在干嘛!”' + name2 + '没有理会' + name,
        name + '见' + name2 + '这番模样，拉着' + name2 + '的手就要走。',
        '“你放开我！”' + name2 + '狠狠的把' + name + '的手甩开。',
        name + '从未见过' + name2 + '这番摸样，眼里写满了愤怒。',
        '在他眼里，' + name2 + '一直是一个温柔可人的小女生。',
        '“你知不知道我找了你多久！知不知道我有多担心你！你快跟我回家好不好！”',
        name2 + '撇了撇嘴角，“找我？找我干什么？工作那么重要，你怎么能想起我呢？”',
        name + '跟' + name2 + '在一起之后他就拼命的工作，自从见到' + name2 + '第一眼起，就认定了，他想给' + name2 + '一个稳定的家，而不是跟他一起挤在出租屋里面。',
        name + '语气缓和起来，上前一步说到：“你知道，我拼命工作只是想要给你一个家。”',
        '这时' + name2 + '哭了。',
        '哭的很伤心，很难过。',
        name + '见到这一幕很着急，关心的问到' + name2 + '：“你怎么了？宝贝',
        name2 + '蹲下抱住自己的腿，撕心裂肺的喊到：“你他妈踩我脚了，傻批！！！”',
        '“嘎？”，' + name + '看着眼前这个柔弱的女生，瞬间内疚起来。',
        '这个女孩是何等的单纯，什么都不求，一直以为拼命工作都是为了她，可仔细想想只是为了弥补自己心里上的亏欠。',
        name + '慢慢抬起手，抚摸着女孩的脸颊：“我错了，以后不会了，原谅我好不好。是我不好。”',
        '“那他妈你还不赶紧把脚拿开，艹！！！”，' + name2 + '哭的更难受了。',
        '见状，吓的急忙跳了起来，跳起的一瞬间，' + name2 + '疼晕了。',
        name + '赶忙抱起' + name2 + '，' + name2 + '全身冰凉，衣服也湿透了，“出租车出租车！”',
        '雨渐渐停了，躲在街边小店的路人也都纷纷出来了......',
        '......',
        '经历了这一晚上的折腾，' + name + '终于明白了' + name2 + '的心。',
        '原来' + name2 + '想要的，从来都不是多么有钱，也不需要' + name + '多么拼命努力的工作，只是想要' + name + '每天能多一点时间陪陪她。',
        '还有不要再踩她的脚。',
        name + '明白了这些之后，对' + name2 + '越来越好了。',
        '从此，' + name + '和' + name2 + '便过上了幸福快乐的生活。'
      ],
      [
        '“你说我们以后会是怎样啊？”',
        name2 + '靠在' + name + '身上不经意的问着。',
        '在情窦初开的年纪遇见了彼此，总是想要把后半辈子都想象出来。',
        'emmmm........我感觉你会变成黄脸婆，而我，依旧英俊潇洒。到时候，可别怪....',
        'boom！！！',
        name + '话还没说完，' + name2 + '就一拳打在了' + name + '头上，“你在想什么呢？又开始做梦了，你再这样可就不止打一下头这么简单了！”',
        '“哎哟？给你牛逼大发了！来来来你来打我呀！你来你来！”' + name + '站起身来以4m/s的匀速运动向后退了两步并向' + name2 + '挑衅道。',
        name2 + '不甘示弱，“' + name + '你别跑，你给我等着。”',
        '“哈哈哈哈哈追不上我吧，啦啦啦啦啦啦啦啦啦啦啦”',
        name2 + '又急又气。',
        '于是' + name + '故意放慢速度至2.5m/s，他害怕' + name2 + '追得太急会绊一个狗吃屎。',
        '没多一会' + name2 + '就以3m/s的速度追上了他。',
        name2 + '打算狠狠地敲爆' + name + '的头，无奈与' + name + '身高差距太大，根本就够不到。',
        name + '只好配合地低下头，并以迅雷不及掩耳之势快速吻上了' + name2 + '的唇。',
        name2 + '那只悬空的手慢慢搭在了' + name + '的肩膀上，享受的看着' + name + '眯起的眼睛。',
        '他卷翘的睫毛在阳光下显得很长，甚至挡住了' + name + '那颗放荡不羁的眼屎。',
        name + '缓缓睁开眼睛，看到' + name2 + '正与自己四目相对，便用霸道总裁的口吻命令' + name2 + '：',
        '“给老子把眼睛闭上！”' + name2 + '此刻看着' + name + '有些晕晕的，心梗都要发作了。',
        name2 + '害羞的闭上眼睛之后，' + name + '便如蜻蜓点水般的亲在' + name2 + '的嘴唇上，轻轻的吮吸着，生怕弄疼了' + name2 + '，亲了一会又慢慢撬开了' + name2 + '的牙齿。',
        '透过' + name2 + '的牙缝，' + name + '看到了她躁动的舌头，他心领神会，便穿过牙缝和' + name2 + '舌吻了起来。',
        '“真的好甜啊，”' + name2 + '心里默默的说，“要是时间能停留在这一刻就好啦！”',
        '想着想着' + name2 + '突然觉得哪里不对。',
        '哎呀，怎么忘了他说我黄脸婆的事呢！',
        '于是便狠狠的咬了一下' + name + '的嘴唇。',
        '“你tm嘎哈呀？”' + name + '温柔的说。',
        '“哼！你说我黄脸婆的事还没完呢？我可是很记仇的呢！”',
        '“好啦好啦，我认错，你在我心里一直都是最漂亮的呢。”',
        '“这还差不多，哼！”',
        '从此以后，' + name + '和' + name2 + '过着幸福快乐的生活。',
        '甚至' + name2 + '一争气，还生下了十八个宝宝。'
      ],
      [
        '“好了，今天的会就开到这里。散会！”',
        name2 + '满脸崇拜的看着' + name + '，他认真工作的样子好迷人啊，他穿西服的样子好帅啊！',
        '一想到这是自己的老公就心里美滋滋的。',
        '“在想什么呢？吃饭去！”' + name + '用极其霸道的口吻说。',
        '“啊，好吧，走吧”',
        '晚上回到家，' + name2 + '故意不理' + name + '。',
        '回到家的' + name + '跟在公司的' + name + '是截然不同的两个人，在公司的' + name + '霸道冷漠不近人情，回到家之后的' + name + '像一个温顺的小绵羊。',
        name + '发现' + name2 + '的异样，“怎么了呢？老婆大人，谁招惹你了呢？”',
        name2 + '愤愤的说，“今天白天在公司有人跟我说话语气不好了呢！”',
        name + '抿嘴一笑，“我知道了是谁招惹我老婆大人了，我这就去收拾他！”',
        '于是拿着手机翻出自己的照片自言自语道，“以后不要再欺负我老婆大人了听见没有，不然我饶不了你！”',
        name2 + '看到' + name + '这般傻气，忍不住笑出猪叫。',
        name + '见状，赶快讨好老婆：“好啦老婆大人，我这不是在公司刚晋升嘛，就要拿出一点领导的架子，求求老婆不要生气了嘛qaq，以后在家你随便处置我，在公司给我留点面子好不好嘛嘤嘤嘤。”',
        name2 + '嘴巴嘟嘟，嘟嘟嘟嘟嘟，故意装作不情愿的样子说好。',
        name + '不再说话，从口袋默默掏出提前准备好的一个精致的礼物盒子。',
        name2 + '看到礼物两眼放出了七彩光芒：“这是什么？”',
        name + '调皮的举高手说道，“你猜啊，猜到了就给你。”',
        name2 + '连蹦带跳，撒娇似的说到：“cnm快给我快给我”',
        name + '趁机一把搂住了' + name2 + '直径59厘米的粗腰，温柔的在她耳边说到，“老婆大人你最好了，知道你最体谅我了。”',
        '说完，直接把盒子塞到' + name2 + '的手里，“好啦，送给你。”',
        name2 + '接过盒子，赫然发现里面躺着一只戒指，于是激动的说到：',
        '“戒指戒指看看我，我的手指在哪里？”',
        name + '心领神会，单膝跪在250平米的奢华纯木地板上，缓缓说道，“' + name2 + '，嫁给我好不好？”',
        name2 + '听后才明白' + name + '的意图，流下了激动的色彩斑斓的泪水，说：“我愿意！”',
        name + '听闻这话说到：“我是问你嫁给我好不好，不是问你愿不愿意，你这样的回答很不严谨。”',
        name2 + '一愣，害羞的说到：“好。这样紧了嘛？”',
        '从此以后，' + name + '便和' + name2 + '过上了性福快乐的生活。'
      ],
      [
        name + '最近受邀去京都大学当讲师。',
        name2 + '知道这个消息非常开心。',
        '今天的课堂上，' + name + '在滔滔不绝的讲课，' + name2 + '半趴在课桌上，目不转睛的盯着' + name + '。',
        '而' + name + '也时不时地用他那酷似八倍镜的眼睛瞄一下' + name2 + '。',
        '这个课堂上，' + name + '散发着一种栀子花味的光芒，让' + name2 + '迟迟移不开眼睛。',
        '“' + name2 + '，这道题你会做吗？？”',
        '“我……不会”',
        '“那就好好听课，不要开小差”，' + name + '不经意间说道。',
        '下课了，' + name + '环扫一圈教室，“' + name2 + '，跟我来办公室一趟。”' + name + '轻轻地拨弄一下' + name2 + '的空气刘海，“好啊你个小丫头，总盯着我看干啥？记住不要总看我，你看我我讲课会紧张。”',
        '“你看我，我看你，你不看我我还看你，我看你你还不理我，那我就干你”' + name2 + '挑拨道。',
        name + '看着面前这个任性的小丫头无可奈何，都是自己惯出来的，“你还敢挑衅我？小心我罚你倒立抄课堂笔记抄十遍！”',
        '“哼？你这话我都听腻了！每次都是这样，你哪次忍心罚我？能不能换个新鲜的”',
        name + '哈哈哈大笑，对这个任性的小女友真的是一点办法都没有，“好啦，我还不是心疼你，不就是想让你好好听个课嘛，那你说怎样你才好好听课嘛？”',
        name2 + '瞪着卡姿兰大眼睛满脸天真的想，那不如就要一个飞吻吧。',
        '于是' + name2 + '说，“嘻嘻，我要你亲我一下，但还不能碰到我”',
        name + '微微一笑，心领神会，这也太简单了吧。',
        '于是他抬头，挺胸，收腹，吸气，用力，he~tui~，吐了一口痰到' + name2 + '脸上。',
        name2 + '顿时生气了：“你干嘛啊你，我要的是飞吻，你吐我干嘛啊”',
        '“啊？飞吻啊？”，' + name + '慌了。',
        '为了弥补过错，' + name + '立刻贴近' + name2 + '，以每秒三次的频率疯狂啄亲着' + name2 + '，足足亲了九千七百四十六下才肯罢休。',
        '“哼，这还差不多”，' + name2 + '被亲的高兴了，自然就原谅了' + name + '。',
        '然后' + name2 + '蹦蹦跳跳的回教室了，' + name + '看着' + name2 + '的背影，露出了笑不出来的微笑。',
        '因为他的嘴亲肿了。'
      ],
      [
        name + '洗完澡靠在床上玩手机。',
        name2 + '刚洗好澡从浴室里溜出来。',
        '半裹着浴巾，胡萝卜般曼妙的身材，再加上猴屁股般红彤彤的脸蛋儿还有清蒸豆腐般白嫩的肌肤就像刚刚剥了皮的咸鸭蛋，让' + name + '咽了咽口水。',
        name2 + '直接过来躺倒' + name + '的腿上，“亲爱的，你帮我吹下头发”',
        name + '轻轻的拨弄着' + name2 + '的毛发。',
        '哇，是洗发水的香气。',
        name + '从未见过' + name2 + '这般模样，也从未有过像今天这样想把她占为己有。',
        '“你好骚啊”，' + name + '邪魅一笑。',
        '此刻' + name2 + '在眯缝着芝麻般的小眼睛享受着' + name + '的吹发。',
        name + '受不了了，他放下吹风机，俯下身去吻' + name2 + '，' + name2 + '也温柔的回应着。',
        name + '见' + name2 + '回应，心中窃喜。',
        '手不自觉的开始乱摸，并慢慢撬开' + name2 + '的牙床，和' + name2 + '纠缠在一起。',
        '“这是...葱香的味道”，' + name + '从' + name2 + '牙齿上搅下来了一片菜叶。',
        name + '品尝着。',
        '“你晚上吃的什么？真香”，',
        name + '惊呆了。',
        name2 + '会心一笑说，“我晚上吃的是....”',
        '“是什么？”，' + name + '迫不及待的想知道。',
        '“哎呀，别打岔，人家吃的是......蒸羊羔、蒸熊掌、蒸鹿尾儿、烧花鸭、烧雏鸡、烧子鹅、卤猪、卤鸭、酱鸡、腊肉、松花小肚儿、晾肉、香肠儿、什锦苏盘、熏鸡白肚儿、清蒸八宝猪、江米酿鸭子、罐儿野鸡、罐儿鹌鹑、卤什件儿、卤子鹅、山鸡、兔脯、菜蟒、银鱼、清蒸哈什蚂、烩鸭丝、烩鸭腰、烩鸭条、清拌鸭丝、黄心管儿、焖白鳝、焖黄鳝、豆豉鲇鱼、锅烧鲤鱼、烀烂甲鱼、抓炒鲤鱼、抓炒对儿虾、软炸里脊、软炸鸡、什锦套肠儿、卤煮寒鸦儿、麻酥油卷儿、熘鲜蘑、熘鱼脯、熘鱼肚、熘鱼片儿、醋熘肉片儿、烩三鲜、烩白蘑、烩鸽子蛋、炒银丝、烩鳗鱼、炒白虾、炝青蛤、炒面鱼、炒竹笋、芙蓉燕菜、炒虾仁儿、烩虾仁儿、烩腰花儿、烩海参、炒蹄筋儿、锅烧海参、锅烧白菜、炸木耳、炒肝尖儿、桂花翅子、清蒸翅子、炸飞禽。炸汁儿、炸排骨、清蒸江瑶柱、糖熘芡仁米、拌鸡丝、拌肚丝、什锦豆腐、什锦丁儿、糟鸭、糟熘鱼片儿、熘蟹肉、炒蟹肉、烩蟹肉、清拌蟹肉、蒸南瓜、酿倭瓜、炒丝瓜、酿冬瓜．烟鸭掌儿、焖鸭掌儿、焖笋、炝茭白、茄子晒炉肉、鸭羹、蟹肉羹、鸡血汤、三鲜木樨汤、红丸子、白丸子、南煎丸子、四喜丸子、三鲜丸子、氽丸子、鲜虾丸子、鱼脯丸子、饹炸丸子、豆腐丸子、樱桃肉、马牙肉、米粉肉、一品肉、栗子肉、坛子肉、红焖肉、黄焖肉、酱豆腐肉、晒炉肉、炖肉、黏糊肉、烀肉、扣肉、松肉、罐儿肉、烧肉、大肉、烤肉、白肉、红肘子、白肘子、熏肘子、水晶肘子、蜜蜡肘子、锅烧肘子、扒肘条、炖羊肉、酱羊肉、烧羊肉、烤羊肉、清羔羊肉、五香羊肉、氽三样儿、爆三样儿、炸卷果儿、烩散丹、烩酸燕儿、烩银丝、烩白杂碎、氽节子、烩节子、炸绣球、三鲜鱼翅、栗子鸡、氽鲤鱼、酱汁鲫鱼、活钻鲤鱼、板鸭、筒子鸡、烩脐肚、烩南荠、爆肚仁儿、盐水肘花儿、锅烧猪蹄儿、拌稂子、炖吊子、烧肝尖儿、烧肥肠儿、烧心、烧肺、烧紫盖儿、烧连帖、烧宝盖儿、油炸肺、酱瓜丝儿、山鸡丁儿、拌海蜇、龙须菜、炝冬笋、玉兰片、烧鸳鸯、烧鱼头、烧槟子、烧百合、炸豆腐、炸面筋、炸软巾、糖熘饹儿、拔丝山药、糖焖莲子、酿山药、杏仁儿酪、小炒螃蟹、氽大甲、炒荤素儿、什锦葛仙米、鳎目鱼、八代鱼、海鲫鱼、黄花鱼、鲥鱼、带鱼、扒海参、扒燕窝、扒鸡腿儿、扒鸡块儿、扒肉、扒面筋、扒三样儿、油泼肉、酱泼肉、炒虾黄、熘蟹黄、炒子蟹、炸子蟹、佛手海参、炸烹儿、炒芡子米、奶汤、翅子汤、三丝汤、熏斑鸠、卤斑鸠、海白米、烩腰丁儿、火烧茨菰、炸鹿尾儿、焖鱼头、拌皮渣儿、氽肥肠儿、炸紫盖儿、鸡丝豆苗、十二台菜、汤羊、鹿肉、驼峰、鹿大哈、插根儿、炸花件儿，清拌粉皮儿、炝莴笋、烹芽韭、木樨菜、烹丁香、烹大肉、烹白肉、麻辣野鸡、烩酸蕾、熘脊髓、咸肉丝儿、白肉丝儿、荸荠一品锅、素炝春不老、清焖莲子、酸黄菜、烧萝卜、脂油雪花儿菜、烩银耳、炒银枝儿、八宝榛子酱、黄鱼锅子、白菜锅子、什锦锅子、汤圆锅子、菊花锅子、杂烩锅子、煮饽饽锅子、肉丁辣酱、炒肉丝、炒肉片儿、烩酸菜、烩白菜、烩豌豆、焖扁豆、氽毛豆、炒豇豆，外加腌苤蓝丝儿。”',
        name + '的口水流了一地。',
        '“你看你这个样子，真是个小馋猪，改天也带你去吃啦”，' + name2 + '娇羞的说到。',
        name + '听到' + name2 + '娇羞的声音更来劲了，像火锅沸腾那般狂吻' + name2 + '的全身，并在' + name2 + '身上留下了一颗直径5cm的草莓，看起来好吃极了。',
        name + '靠近' + name2 + '耳边温柔的说，“我要把你吃掉了哦，嘿嘿”',
        name2 + '也慢慢进入了状态，感受到强大而又温暖的手像小偷一样在自己身上不安分的游走，身体还被重达74.2kg的' + name + '压的死死的，不由得伸出火腿肠般纤细的双手搂住了' + name + '的肩膀。',
        '......',
        '“' + name + '的时间好长，就像我每次等外卖的时间一样长”，' + name2 + '心想。',
        '......',
        '一场激情过后，' + name2 + '大脑一片白纸般空白，虽然很疼，但是心里还是奶茶般美滋滋的。',
        name + '搂着' + name2 + '问：“你后悔吗？”',
        '“不后悔，因为我喜欢你。”',
        name2 + '说完露出了甜甜圈般的微笑。',
        '甜到了' + name + '的心坎里。',
        '从此以后，' + name + '便和' + name2 + '过上了有吃有喝的幸福生活。',
        '就算' + name + "和" + name2 + '分别变成了127.3kg和94.8kg的大胖子，他们也依然幸福的生活在一起。'
      ],
      [
        '这是晴朗的一天，天空乌云密布。',
        name + '心情大好，拉着' + name2 + '一起奔向了海滩。',
        '太阳特别大，大到能燃烧一个人的卡路里，把它的光芒发送到海滩的每一个角落，如此火辣的天气也让' + name + '和' + name2 + '兴奋了起来。',
        name + '对着天空大喊：“日，你好吗？”',
        name2 + '听闻这句话瞬间脸色羞红，刚要说好，' + name + '就脱光了衣服，纵身跃入海里。',
        '于是' + name2 + '也跟着跳了进去，像两条大海豚一样在水中嬉戏。',
        '13分27秒84之后，' + name2 + '觉得有些累了，就先要上岸休息。',
        '她粉红色的黑色泳装上面附着水滴，让' + name + '看得眼花缭乱，甚至还支起了一个小帐篷。',
        name + '说：“热吗？要不要来帐篷里待会？”',
        '就在' + name + '沉迷于' + name2 + '的美色之时，' + name2 + '突然一个趔趄，脚腕扭了740度，仿佛有韧性的面条，咿呀一声滑倒在地。',
        name + '看到这一幕突然兴致来了。',
        '“你看这个面它又长又宽,就像这个碗它又大又圆”，' + name + '指着' + name2 + '的脚腕和太阳唱到。',
        '“啊～我卡摔了～要' + name + '亲亲才能起来～”',
        name + '见状只好立刻停下rap，躺倒地上来了一个鲤鱼打挺，然后对' + name2 + '说：',
        '“你像我这样，不就起来了吗？”',
        '200多斤的' + name2 + '试了一下，并不能起来。',
        name + '气的直跺脚，说：“你这怕不是咸鱼翻身呦兄弟”。',
        '但是看' + name2 + '气鼓鼓的样子，' + name + '只好假装自己也滑了一跤摔在' + name2 + '的旁边。',
        '“宝贝不怕，我永远在你身边！”',
        '“嘻嘻，' + name + '你真好”',
        '两人就这样深情对望着。',
        name + '深知' + name2 + '怕疼，为了让' + name2 + '开心，' + name + '优雅又不失礼貌地捧起一坨沙，和' + name2 + '玩起了埋人游戏。',
        '“太好玩了，你现在看起来就像个真的沙雕！”，',
        name + '说:',
        '“宝贝儿，你也一样，比看我们的沙雕网友还沙雕呢嘤嘤嘤qaq”',
        '两人就这样在沙子里当了一天的沙雕，非常开心。',
        '从此以后每天都过着幸福快乐的生活。'
      ],
      [
        '那年夏天，大雪纷飞。',
        name2 + '还是一名青色的高中生，在学校里她受众多男生的追捧，然而她的眼里只有她的同桌' + name + '。',
        name + '是学校里出了名的恶霸，他常常把同学堵在厕所索要保护费，还支持微信支付宝转账。',
        '无数同学都恐惧他，见着他都要绕着他做公转，也就是以' + name + '为中心，沿一定轨道所作的循环运动，但是只有' + name2 + '觉得' + name + '能好man哦~',
        '一天放学，' + name2 + '又见到' + name + '哥哥在收保护费，她摸了摸自己口袋里仅剩的十块五毛钱，终于鼓起了80立方厘米的勇气去找' + name + '。',
        name2 + '怀里揣着忐忑的心情，走到' + name + '面前，露出了八颗参差不齐的牙齿，开始盯着' + name + '傻笑，“嘿嘿，' + name + '，你猜猜我给你带来了什么好东西？”',
        '“' + name2 + '，你不要以为你对我傻笑就可以吸引我的注意力。”' + name + '将' + name2 + '一把推到角度为90度的墙角，伸出手臂将' + name2 + '圈在墙角，霸道的说：',
        '“呵，女人！我不仅要钱，我还要......”',
        '“你要什么？”',
        '“我要.........我要..........我要飞的更高，飞的更高嗷，狂风一样舞蹈，挣脱怀抱~”，' + name + '手舞足蹈的唱了起来，把' + name2 + '都吓懵逼了。',
        '“呵呵，我不仅要飞的更高，我还要.....”',
        '“你又想要什么？”',
        '“我要.......我要.........我要~你在身旁，我要，你为我梳妆，这夜的风儿吹，吹得心痒痒，我的情郎，我在他乡，望着月亮~”',
        name2 + '的心悬了起来，难道' + name + '要表白了吗？',
        name2 + '一脸期待和娇羞。',
        '“我还要你帮我写作业！！！”，' + name + '从自己怀里掏出一打五十厘米厚的作业扔在' + name2 + '身上，“你说过，学习使你快乐！”',
        name2 + '收下了作业，心想：难道这是他给我的定情信物？',
        name2 + '又开始傻笑，一个不小心还流下了感动的口水。',
        name + '看到这一幕不禁心动，低头亲上了' + name2 + '厚厚的的大嘴唇子，暗道：“这女人的口水竟如此的香甜。”',
        '后来......',
        '他们因为早恋双双被开除学籍。',
        '从此，' + name + '便和' + name2 + '过上了没羞没臊的幸福生活。'
      ],
      [
        name + '一直是一副天生我最牛逼的模样，而同样他喜欢的' + name2 + '也是这样一个人。',
        '“喂，今天上课路上我离你只有3000多公里，我喊你为什么不理我！”',
        '“你管我？我就是不想理你，要那么多理由干嘛！”' + name2 + '毫不客气的回应道。',
        '“你这女人，能不能对我说话客气点！”' + name + '生气的说道。',
        name2 + '听完很不屑，跳了一下：“我说话就这样，你能把我怎么样啊！”',
        '“你走那么快干嘛！拖鞋都掉了”',
        name2 + '不但不听' + name + '的话，反而走的更快了。',
        name + '彻底被' + name2 + '激怒了，一个加速度为10m/s的冲刺狠狠的拉住了' + name2 + '的咸猪手。',
        name2 + '也毫不示弱，“' + name + '！你到底要干嘛！”',
        '“我想干嘛？”，' + name + '左脚踩右脚，右脚踩左脚，一下就飞上了天，居高临下的看着' + name2 + '：',
        '“从现在开始，你就是我女朋友了，所以你必须要理我！”',
        name2 + '抬头，这是第一次这么仔细的看' + name + '。',
        '一米五几的身高，白里透红红里透粉粉里透绿的脸庞，低垂着的长长的睫毛下，竟挂着一颗超级可爱的眼屎，高傲的鼻梁仿佛能撑起一座大山。',
        '原来他这么好看呢。',
        '“心跳的好快呢......糟了，是心梗的感觉”，' + name2 + '心想。',
        name + '撑开降落伞，安稳落地，温柔的和' + name2 + '对视了足足三个小时，然后慢慢闭上了眼睛。',
        name2 + '见状，也慌忙的闭上了眼睛。',
        '这个吻很甜，让' + name2 + '欲罢不能，吻了还想再吻。',
        name + '慢慢睁开了眼睛，看到' + name2 + '那番享受的模样不禁吭哧一声笑了出来，' + name2 + '睁眼看到' + name + '在嘲笑自己，刚才的感觉一下子没有了。',
        '“？？？你笑个JB！”',
        name + '坏坏的笑着说，“怎样，刚才的吻是不是有点甜。”',
        name2 + '邪魅一笑，“你过来我偷偷给你说个事。”',
        '“什么？”',
        '“你以后别再亲我了，你有口臭！！！”，' + name2 + '说完拔腿就开始跑，怕被打。',
        name + '一直追着' + name2 + '喊，“喂，你的假肢，你的假肢不要了？”',
        '就这样，从此以后' + name + '便和' + name2 + '两个人过上了打打杀杀的幸福生活。'
      ]
    ]
    var len = storiesTitles.length
    var randomIndex = this.getRandom(len)
    var stories = {}
    // 每次生成的故事顺序随机，就可以使按顺序读的故事随机
    for (var i = 0; i < randomIndex.length;i++){
      stories[randomIndex[i]] = {}
      stories[randomIndex[i]].title = storiesTitles[i]
      stories[randomIndex[i]].content = storiesContents[i]
    }
    return stories
  },
  // 伪随机
  getRandom(num){
    num instanceof Number ? num : 0
    var arr = [],n
    if(num){
      for(var i=0;i<num;i++){
        arr.push(i)
      }
      arr.sort(function () {
        return Math.random() - 0.5;
      });
    }
    return arr
  }
})